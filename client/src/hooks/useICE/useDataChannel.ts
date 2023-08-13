import { useMemo, useRef, useState } from "react";
import { Socket } from "socket.io-client";
import useEvent from "../useEvent";

type EmitFunc = (
  ...args: ArgumentTypes<Socket["emit"]>
) => ReturnType<Socket["emit"]> | undefined;

export default function useDataChannel(
  onMessage: (event: MessageEvent) => void
) {
  const [isReceiveChannelOpen, setReceiveOpen] = useState(false);
  const [isSendChannelOpen, setSendOpen] = useState(false);
  const localConnectionRef = useRef<RTCPeerConnection | null>(null);
  const sendChannelRef = useRef<RTCDataChannel | null>(null);
  const receiveChannelRef = useRef<RTCDataChannel | null>(null);
  const emitRef = useRef<EmitFunc>();
  const isChannelOpen = useMemo(
    () => isReceiveChannelOpen && isSendChannelOpen,
    [isReceiveChannelOpen, isSendChannelOpen]
  );
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
  const handlReceiveChannelStatusChange = useEvent((event: Event) => {
    let receiveChannel = receiveChannelRef.current;
    if (receiveChannel) {
      const state = receiveChannel.readyState;
      if (state === "open") {
        setReceiveOpen(true);
      } else {
        setReceiveOpen(false);
      }
    }
  });
  const handleSendChannelStatusChange = useEvent((event: Event) => {
    let sendChannel = sendChannelRef.current;
    if (sendChannel) {
      const state = sendChannel.readyState;
      if (state === "open") {
        setSendOpen(true);
      } else {
        setSendOpen(false);
      }
    }
  });
  const handleReceiveChannelCallback = useEvent((e: RTCDataChannelEvent) => {
    receiveChannelRef.current = e.channel;
    receiveChannelRef.current.onmessage = onMessage;
    receiveChannelRef.current.onopen = handlReceiveChannelStatusChange;
    receiveChannelRef.current.onclose = handlReceiveChannelStatusChange;
  });
  const send = useEvent((data: string | Blob | ArrayBuffer) => {
    if (!isSendChannelOpen) throw new Error("Send channel dosent open");
    let sendChannel = sendChannelRef.current;
    sendChannel?.send(data as any);
  });
  const open = useEvent(() => {
    let localConnection = localConnectionRef.current;
    if (localConnection) return;
    localConnectionRef.current = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun1.l.google.com:19302" }],
    });
    // receive channel
    localConnectionRef.current.onicecandidate = onicecandidate;
    localConnectionRef.current.ondatachannel = handleReceiveChannelCallback;
    // send channel
    sendChannelRef.current =
      localConnectionRef.current.createDataChannel("sendChannel");
    sendChannelRef.current.onopen = handleSendChannelStatusChange;
    sendChannelRef.current.onclose = handleSendChannelStatusChange;
  });
  const close = useEvent(() => {
    let localConnection = localConnectionRef.current;
    let sendChannel = sendChannelRef.current;
    let receiveChannel = receiveChannelRef.current;
    receiveChannel?.close();
    sendChannel?.close();
    localConnection?.close();
    receiveChannelRef.current = null;
    sendChannelRef.current = null;
    localConnectionRef.current = null;
  });
  return {
    localConnectionRef: localConnectionRef,
    isReceiveChannelOpen,
    isSendChannelOpen,
    isChannelOpen,
    setEmit,
    open,
    close,
    send,
  };
}
