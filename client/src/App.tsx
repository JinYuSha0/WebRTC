import { useEffect, useState, memo, useRef } from "react";
import { io } from "socket.io-client";
import useEvent from "./hooks/useEvent";
import type { Socket } from "socket.io-client";

let localConnection: RTCPeerConnection | null = null;
let sendChannel: RTCDataChannel | null = null;
let receiveChannel: RTCDataChannel | null = null;

function handleReceiveMessage(event: MessageEvent) {
  console.log("receive message:", event.data);
}

function App() {
  const [isConnect, setIsConnect] = useState(false);
  const [code, setCode] = useState("");
  const [otherSideCode, setOtherSideCode] = useState<string>("");
  const [inputValue, setInputValue] = useState("");
  const [sendValue, setSendValue] = useState("");
  const [sendChannelOpen, setSendChannelOpen] = useState(false);
  const [receiveChannelOpen, setReceiveChannelOpen] = useState(false);
  const [receiveMsg, setReceiveMsg] = useState<string[]>([]);
  const socketRef = useRef<Socket | null>(null);
  const otherSideCodeRef = useRef("");
  const onInputValueChange = useEvent(
    (e: React.FormEvent<HTMLInputElement>) => {
      setInputValue(e.currentTarget.value);
    }
  );
  const onSendInputValueChange = useEvent(
    (e: React.FormEvent<HTMLInputElement>) => {
      setSendValue(e.currentTarget.value);
    }
  );
  const close = useEvent(() => {
    localConnection?.close();
    sendChannel?.close();
    localConnection = null;
    sendChannel = null;
  });
  const handleSendChannelStatusChange = useEvent((event: Event) => {
    if (sendChannel) {
      const state = sendChannel.readyState;
      if (state === "open") {
        setSendChannelOpen(true);
        socketRef.current?.disconnect();
        console.log("Send channel open");
      } else {
        setSendChannelOpen(false);
        console.log("Send channel close");
      }
    }
  });
  const handlReceiveChannelStatusChange = useEvent((event: Event) => {
    if (receiveChannel) {
      const state = receiveChannel.readyState;
      if (state === "open") {
        setReceiveChannelOpen(true);
        socketRef.current?.disconnect();
        console.log("Receive channel open");
      } else {
        setReceiveChannelOpen(false);
        console.log("Receive channel close");
      }
    }
  });
  const handleReceiveMessage = useEvent((event: MessageEvent) => {
    setReceiveMsg((prev) => [...prev, event.data]);
  });
  const receiveChannelCallback = useEvent((e: RTCDataChannelEvent) => {
    receiveChannel = e.channel;
    receiveChannel.onmessage = handleReceiveMessage;
    receiveChannel.onopen = handlReceiveChannelStatusChange;
    receiveChannel.onclose = handlReceiveChannelStatusChange;
  });
  const createOffer = useEvent(async () => {
    if (!localConnection) return;
    console.log("createOffer");
    sendChannel = localConnection.createDataChannel("sendChannel");
    sendChannel.onopen = handleSendChannelStatusChange;
    sendChannel.onclose = handleSendChannelStatusChange;
    sendChannel.onerror = (err) => {
      console.log(err);
    };

    try {
      const offer = await localConnection.createOffer();
      await localConnection.setLocalDescription(offer);
      return localConnection.localDescription;
    } catch (error: any) {
      console.log("Unable to create an offer: " + error.toString());
      close();
    }
    return null;
  });
  const createaAnswer = useEvent(
    async (from: string, offer: RTCSessionDescriptionInit) => {
      if (!localConnection) return;
      console.log("createaAnswer");
      setOtherSideCode(from);
      otherSideCodeRef.current = from;
      await localConnection.setRemoteDescription(offer);
      const answer = await localConnection.createAnswer();
      await localConnection.setLocalDescription(answer);
      if (socketRef.current) {
        socketRef.current.emit("answer", {
          to: from,
          answer: localConnection.localDescription,
        });
      }
    }
  );
  const sendOfferToRemote = useEvent(async () => {
    const offer = await createOffer();
    if (socketRef.current && isConnect && offer && inputValue.length === 6) {
      setOtherSideCode(inputValue);
      otherSideCodeRef.current = inputValue;
      socketRef.current.emit("offer", {
        to: inputValue,
        offer,
      });
    }
  });
  const onicecandidate = useEvent((e: RTCPeerConnectionIceEvent) => {
    if (e && e.candidate && e.isTrusted && socketRef.current) {
      socketRef.current.emit("candidate", {
        to: otherSideCodeRef.current,
        candidate: e.candidate,
      });
    }
  });
  const sendMsg = useEvent(() => {
    sendChannel?.send(sendValue);
    setSendValue("");
  });
  useEffect(() => {
    localConnection = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun1.l.google.com:19302" }],
    });
    localConnection.onicecandidate = onicecandidate;
    localConnection.ondatachannel = receiveChannelCallback;

    const socket = io("127.0.0.1:3000");
    socket.on("connect", () => {
      socketRef.current = socket;
      setIsConnect(true);
    });
    socket.on("disconnect", (e) => {
      socketRef.current = null;
      setIsConnect(false);
    });
    socket.on("id", (e) => {
      setCode(e.id);
    });
    socket.on("error", (msg) => {
      alert(msg);
    });
    socket.on("receiveOffer", (data) => {
      const { from, offer } = data;
      createaAnswer(from, offer);
    });
    socket.on("receiveAnswer", (data) => {
      const { from, answer } = data;
      console.log("receiveAnswer", answer);
      localConnection?.setRemoteDescription(answer);
    });
    socket.on("receiveCandidate", (data) => {
      const { from, candidate, sdpMLineIndex } = data;
      console.log("receiveCandidate", candidate);
      localConnection?.addIceCandidate(candidate).catch((err) => {
        console.log("Oh noes! addICECandidate failed!", err);
      });
    });
  }, []);
  return (
    <div className="App">
      <p>WS连接状态: {isConnect ? "已连接" : "未连接"}</p>
      <p>
        WebRTC:{" "}
        {sendChannelOpen || receiveChannelOpen ? otherSideCode : "未连接"}
      </p>
      <p>用户码: {!!code ? code : "-"}</p>
      {!sendChannelOpen && !receiveChannelOpen && (
        <div>
          <input
            maxLength={6}
            placeholder="code"
            onChange={onInputValueChange}
          />
          <button disabled={!isConnect} onClick={sendOfferToRemote}>
            connect
          </button>
        </div>
      )}
      {sendChannelOpen && (
        <div>
          <input
            placeholder="msg"
            value={sendValue}
            onChange={onSendInputValueChange}
          />
          <button disabled={!sendChannelOpen} onClick={sendMsg}>
            send
          </button>
        </div>
      )}
      {receiveChannelOpen && (
        <>
          <p>接收中</p>
          {receiveMsg.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </>
      )}
    </div>
  );
}

export default memo(App);
