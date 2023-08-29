import useEvent from "@hooks/useEvent";
import { useIceContext } from "@components/iceContext";
import { memo, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { domain } from "@/proto/msg";

const Doshboard: React.FC<{}> = (props) => {
  const [albumList, setAlbumList] = useState<domain.IAlbum[]>([]);
  const pageRef = useRef<number>(0);
  const [sendValue, setSendValue] = useState("");
  const [receiveMsg, setReceiveMsg] = useState<string[]>([]);
  const navigate = useNavigate();
  const { isChannelOpen, baseInfo, getAlbumList, sendMsg } = useIceContext();
  const _getAlbumList = useEvent(async () => {
    pageRef.current++;
    const res = await getAlbumList(pageRef.current, 12);
    setAlbumList((prev) => [...prev, ...res]);
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
      {albumList.map((album) => (
        <img
          width={160}
          height={284}
          key={album.mediaId}
          src={`http://${baseInfo?.serverAddress}/thumbnail?id=${album.mediaId}`}
        />
      ))}
    </>
  );
};

export default memo(Doshboard);
