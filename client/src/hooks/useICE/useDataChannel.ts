import { useMemo, useRef, useState } from "react";
import { Socket } from "socket.io-client";
import useEvent from "../useEvent";

type EmitFunc = (
  ...args: ArgumentTypes<Socket["emit"]>
) => ReturnType<Socket["emit"]> | undefined;

export default function useDataChannel(
  onMessage: (event: MessageEvent) => void
) {
  const [isChannelOpen, setChannelOpen] = useState(false);
  const localConnectionRef = useRef<RTCPeerConnection | null>(null);
  const dataChannelsRef = useRef<RTCDataChannel[]>([]);
  const emitRef = useRef<EmitFunc>();
  const setEmit = useEvent((emit: EmitFunc) => (emitRef.current = emit));
  const emit = useEvent((...args: ArgumentTypes<Socket["emit"]>) => {
    emitRef.current?.(...args);
  });
  const onicecandidate = useEvent((e: RTCPeerConnectionIceEvent) => {
    if (e && e.candidate && e.isTrusted) {
      emit("candidate", {
        candidate: e.candidate,
      });
    }
  });
  const handlDateChannelStatusChange = useEvent(function (
    this: RTCDataChannel,
    event: Event
  ) {
    if (this) {
      const state = this.readyState;
      if (state === "open") {
        const maxSize = localConnectionRef.current!.sctp?.maxMessageSize;
        setChannelOpen(true);
      } else {
        setChannelOpen(false);
      }
    }
  });
  const handleReceiveChannelCallback = useEvent((e: RTCDataChannelEvent) => {
    console.log(e.channel.label, e.channel.ordered);
    let channel = e.channel;
    dataChannelsRef.current.push(channel);
    channel.onmessage = onMessage.bind(channel);
    channel.onopen = handlDateChannelStatusChange.bind(channel);
    channel.onclose = handlDateChannelStatusChange.bind(channel);
  });
  const send = useEvent((data: string | Blob | ArrayBuffer) => {
    if (!isChannelOpen) throw new Error("Send channel dosent open");
    let dataChannel = dataChannelsRef.current;
    // todo
    dataChannel[0]?.send(data as any);
  });
  const open = useEvent(() => {
    let localConnection = localConnectionRef.current;
    if (localConnection) return;
    localConnectionRef.current = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun1.l.google.com:19302" }],
    });
    localConnectionRef.current.onicecandidate = onicecandidate;
    localConnectionRef.current.ondatachannel = handleReceiveChannelCallback;
  });
  const close = useEvent(() => {
    let localConnection = localConnectionRef.current;
    let dataChannels = dataChannelsRef.current;
    for (let channel of dataChannels) {
      channel.close();
    }
    localConnection?.close();
    dataChannelsRef.current = [];
  });
  return {
    localConnectionRef: localConnectionRef,
    isChannelOpen,
    setEmit,
    open,
    close,
    send,
  };
}
