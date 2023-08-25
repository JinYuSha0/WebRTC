import { useEffect, useState, memo } from "react";
import { QRCodeSVG } from "qrcode.react";
import { AlbumService } from "./service";
import useEvent from "./hooks/useEvent";
import useICE from "./hooks/useICE";
import useSWR from "swr";

function arrayBufferToString(buffer: ArrayBuffer) {
  return new TextDecoder("utf-8").decode(new Uint8Array(buffer));
}

function App() {
  const [sendValue, setSendValue] = useState("");
  const [receiveMsg, setReceiveMsg] = useState<string[]>([]);
  const { data: albumList, mutate: fetchAlbumList } = useSWR(
    { page: 1, size: 12 },
    AlbumService.getAlbumList,
    {
      revalidateOnMount: false,
      revalidateOnFocus: false,
    }
  );
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
    console.log(this.label, event.data);
  });
  const { isConnect, isChannelOpen, code1, code2, open, close, send } =
    useICE(onMessage);
  const sendMsg = useEvent(() => {
    send(sendValue);
    setSendValue("");
  });
  useEffect(() => {
    open();
    fetchAlbumList();
    return close;
  }, []);
  console.log(albumList);
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
