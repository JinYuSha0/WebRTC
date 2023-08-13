import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import type { Socket } from "socket.io-client";
import useDataChannel from "./useDataChannel";
import useEvent from "../useEvent";
import usePermission from "./usePermission";

enum SocketEvent {
  ID = "id",
  ReceiveOffer = "receiveOffer",
  Answer = "answer",
  ReceiveCandidate = "receiveCandidate",
}

export default function useWebsocket(onMessage: (event: MessageEvent) => void) {
  const dataChannel = useDataChannel(onMessage);
  const applyPermission = usePermission();
  const [isConnect, setIsConnect] = useState(false);
  const [code1, setCode1] = useState<String>();
  const [code2, setCode2] = useState<String>();
  const socketRef = useRef<Socket | null>(null);
  const emit = useEvent((...args: ArgumentTypes<Socket["emit"]>) => {
    if (!socketRef.current || !socketRef.current.active) return;
    return socketRef.current.emit(args[0], { to: code2, ...args[1] });
  });
  dataChannel.setEmit(emit);
  const open = useEvent(async () => {
    await applyPermission();
    dataChannel.open();
    if (socketRef.current && socketRef.current.active) return;
    const socket = (socketRef.current = io("/"));
    socket.on("connect", () => {
      socketRef.current = socket;
      setIsConnect(true);
    });
    socket.on("disconnect", (e) => {
      socketRef.current = null;
      setIsConnect(false);
    });
    socket.on(SocketEvent.ID, (data) => {
      setCode1(data.id);
    });
    socket.on(SocketEvent.ReceiveOffer, async (data) => {
      const { from, offer } = data;
      setCode2((prev) => (prev == null ? from : prev));
      const localConnection = dataChannel.localConnectionRef.current!;
      await localConnection.setRemoteDescription(offer);
      const answer = await localConnection.createAnswer();
      await localConnection.setLocalDescription(answer);
      emit(SocketEvent.Answer, { answer });
    });
    socket.on(SocketEvent.ReceiveCandidate, async (data) => {
      const { from, candidate } = data;
      setCode2((prev) => (prev == null ? from : prev));
      const localConnection = dataChannel.localConnectionRef.current!;
      await localConnection?.addIceCandidate(candidate);
    });
  });
  const closeWebsocket = useEvent(() => {
    if (socketRef.current == null) return;
    socketRef.current.close();
    socketRef.current = null;
    setIsConnect(false);
  });
  const close = useEvent(() => {
    closeWebsocket();
    dataChannel.close();
  });
  useEffect(() => {
    if (dataChannel.isChannelOpen) {
      closeWebsocket();
    }
  }, [dataChannel.isChannelOpen]);
  return {
    isConnect,
    socket: socketRef.current,
    code1,
    code2,
    open,
    close,

    isReceiveChannelOpen: dataChannel.isReceiveChannelOpen,
    isSendChannelOpen: dataChannel.isSendChannelOpen,
    isChannelOpen: dataChannel.isChannelOpen,
    send: dataChannel.send,
  };
}
