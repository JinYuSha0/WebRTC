import useEvent from "@hooks/useEvent";
import { useIceContext } from "@components/iceContext";
import { memo, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Doshboard: React.FC<{}> = (props) => {
  const pageRef = useRef<number>(0);
  const [sendValue, setSendValue] = useState("");
  const [receiveMsg, setReceiveMsg] = useState<string[]>([]);
  const navigate = useNavigate();
  const { isChannelOpen, code1, code2, getAlbumList, sendMsg } =
    useIceContext();
  const _getAlbumList = useEvent(async () => {
    pageRef.current++;
    const res = await getAlbumList(pageRef.current, 12);
    console.log(res);
  });
  const _sendMsg = useEvent(() => {
    sendMsg("test");
  });
  useEffect(() => {
    if (!isChannelOpen) {
      navigate("/");
    }
  }, [isChannelOpen]);
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
          <button disabled={!isChannelOpen} onClick={_getAlbumList}>
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
    </>
  );
};

export default memo(Doshboard);
