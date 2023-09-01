import "./index.css";
import useEvent from "@hooks/useEvent";
import { useIceContext } from "@components/iceContext";
import { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Doshboard: React.FC<{}> = (props) => {
  const [sendValue, setSendValue] = useState("");
  const [receiveMsg, setReceiveMsg] = useState<string[]>([]);
  const navigate = useNavigate();
  const { isChannelOpen, sendMsg } = useIceContext();
  const _gotoAlbum = useEvent(async () => {
    navigate("/album");
  });
  const _sendMsg = useEvent(() => {
    sendMsg("test");
  });
  return (
    <>
      {isChannelOpen && (
        <div>
          <input
            placeholder="msg"
            value={sendValue}
            onChange={(e) => setSendValue(e.currentTarget.value)}
          />
          <button disabled={!isChannelOpen} onClick={_sendMsg}>
            send
          </button>
          <button disabled={!isChannelOpen} onClick={_gotoAlbum}>
            album
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
    </>
  );
};

export default memo(Doshboard);
