import useWebsocket from "./useWebcosket";

export default function (onMessage: (event: MessageEvent) => void) {
  return useWebsocket(onMessage);
}
