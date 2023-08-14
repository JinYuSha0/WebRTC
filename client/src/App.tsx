import { useEffect, useState, memo } from "react";
import { QRCodeSVG } from "qrcode.react";
import useEvent from "./hooks/useEvent";
import useICE from "./hooks/useICE";

function App() {
  const [sendValue, setSendValue] = useState("");
  const [receiveMsg, setReceiveMsg] = useState<string[]>([]);
  const onMessage = useEvent((event: MessageEvent) => {
    setReceiveMsg((prev) => [...prev, event.data]);
  });
  const { isConnect, isChannelOpen, code1, code2, open, close, send } =
    useICE(onMessage);
  const sendMsg = useEvent(() => {
    send(sendValue);
    setSendValue("");
  });
  useEffect(() => {
    open();
    return close;
  }, []);
  return (
    <div className="App">
      <p>WS连接状态: {isConnect ? "已连接" : "未连接"}</p>
      <p>WebRTC: {isChannelOpen ? code2 : "未连接"}</p>
      <p>Code: {code1 ?? "-"}</p>
      {code1 && (
        <QRCodeSVG
          value={code1}
          size={128}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"L"}
          includeMargin={false}
        />
      )}
      {isChannelOpen && (
        <div>
          <input
            placeholder="msg"
            value={sendValue}
            onChange={(e) => setSendValue(e.currentTarget.value)}
          />
          <button disabled={!isChannelOpen} onClick={sendMsg}>
            send
          </button>
        </div>
      )}
      {isChannelOpen && (
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
