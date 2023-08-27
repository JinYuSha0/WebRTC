import { useEffect, useState, memo } from "react";
import { QRCodeSVG } from "qrcode.react";
import { EventType, getAlbumListParams, sendStringParams } from "./msg/send";
import { getTypeValue, getAlbumListByProtobuf } from "./msg/receive";
import useEvent from "./hooks/useEvent";
import useICE from "./hooks/useICE";

function App() {
  const [sendValue, setSendValue] = useState("");
  const [receiveMsg, setReceiveMsg] = useState<string[]>([]);
  const onMessage = useEvent(function (
    this: RTCDataChannel,
    event: MessageEvent
  ) {
    // if (typeof event.data === "string") {
    //   setReceiveMsg((prev) => [...prev, event.data]);
    // } else {
    //   console.log(event.data);
    //   const msg = arrayBufferToString(event.data as unknown as ArrayBuffer);
    //   setReceiveMsg((prev) => [...prev, msg]);
    // }
    console.log(event.data);
    const type = getTypeValue(event.data);
    switch (type) {
      case EventType.AlbumList:
        const albumList = getAlbumListByProtobuf(event.data);
        console.log(albumList);
        break;
    }
  });
  const { isConnect, isChannelOpen, code1, code2, open, close, send } =
    useICE(onMessage);
  const getAlbumList = useEvent(() => {
    send(getAlbumListParams(1, 12));
  });
  const sendMsg = useEvent(() => {
    send(sendStringParams(sendValue));
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
          <button disabled={!isChannelOpen} onClick={getAlbumList}>
            getAlbumList
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
