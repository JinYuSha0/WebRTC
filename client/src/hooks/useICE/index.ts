import useWebsocket from "./useWebcosket";

export default function (
  onMessage: (event: MessageEvent) => void,
  onChannelOpen: (channel: RTCDataChannel) => void
) {
  return useWebsocket(onMessage, onChannelOpen);
}
