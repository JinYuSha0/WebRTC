import "./index.css";
import { memo, useEffect, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useIceContext } from "@/components/iceContext";
import { useNavigate } from "react-router-dom";
import QrcodeParticle from "@/components/qrcodeParticle";

const Connect: React.FC<{}> = (props) => {
  const { isConnect, isChannelOpen, code1, code2, baseInfo, open } =
    useIceContext();
  const canvasRef = useRef<HTMLCanvasElement>(null);
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
    <div className="center">
      {/* <p>WS连接状态: {isConnect ? "已连接" : "未连接"}</p>
      <p>WebRTC: {isChannelOpen ? code2 : "未连接"}</p>
      <p>Code: {code1 ?? "-"}</p> */}
      {code1 && <QrcodeParticle code={code1} />}
    </div>
  );
};

export default memo(Connect);
