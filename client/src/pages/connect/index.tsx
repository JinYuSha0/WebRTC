import { memo, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useIceContext } from "@/components/iceContext";
import { useNavigate } from "react-router-dom";

const Connect: React.FC<{}> = (props) => {
  const { isConnect, isChannelOpen, code1, code2, baseInfo, open } =
    useIceContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isConnect) {
      open?.();
    }
  }, [isConnect]);
  useEffect(() => {
    if (isChannelOpen && baseInfo) {
      navigate("/dashboard");
    }
  }, [isChannelOpen, baseInfo]);
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
    </div>
  );
};

export default memo(Connect);
