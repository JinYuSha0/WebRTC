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
  const dataChannelRef = useRef<RTCDataChannel | null>(null);
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
  const handlDateChannelStatusChange = useEvent((event: Event) => {
    let receiveChannel = dataChannelRef.current;
    if (receiveChannel) {
      const state = receiveChannel.readyState;
      if (state === "open") {
        setChannelOpen(true);
      } else {
        setChannelOpen(false);
      }
    }
  });
  const handleReceiveChannelCallback = useEvent((e: RTCDataChannelEvent) => {
    dataChannelRef.current = e.channel;
    dataChannelRef.current.onmessage = onMessage;
    dataChannelRef.current.onopen = handlDateChannelStatusChange;
    dataChannelRef.current.onclose = handlDateChannelStatusChange;
  });
  const send = useEvent((data: string | Blob | ArrayBuffer) => {
    if (!isChannelOpen) throw new Error("Send channel dosent open");
    let dataChannel = dataChannelRef.current;
    dataChannel?.send(data as any);
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
    let dataChannel = dataChannelRef.current;
    dataChannel?.close();
    localConnection?.close();
    dataChannelRef.current = null;
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
