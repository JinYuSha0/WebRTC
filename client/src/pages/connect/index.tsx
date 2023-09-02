import "./index.css";
import { memo, useEffect, useRef } from "react";
import { useIceContext } from "@/components/iceContext";
import { useNavigate } from "react-router-dom";
import QrcodeParticle from "@/components/qrcodeParticle";
import BgImg from "@assets/images/bg.png";

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
    <div
      className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32 h-full bg-repeat"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <h1
        className="font-mono text-center text-8xl font-bold tracking-tight text-gray-900"
        style={{ fontFamily: "Sriracha" }}
      >
        Tinke
      </h1>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-6 center">
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4 center">
            {!code1 ? (
              <div className="w-[360px] h-[360px]"></div>
            ) : (
              <QrcodeParticle code={code1} />
            )}
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
            <a
              href="#"
              className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
            >
              <svg
                className="h-5 w-5 flex-none text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
                  clip-rule="evenodd"
                />
              </svg>
              Watch demo
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
            >
              <svg
                className="h-5 w-5 flex-none text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                  clip-rule="evenodd"
                />
              </svg>
              Contact sales
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default memo(Connect);
