import useEvent from "../useEvent";

export default function () {
  const checkPermission = useEvent(async () => {
    const permission = await navigator.permissions.query({
      name: "microphone" as any,
    });
    return permission.state === "granted";
  });
  const applyPermission = useEvent(async () => {
    const hasPermission = await checkPermission();
    if (hasPermission) return;
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    mediaStream.getTracks().forEach((track) => {
      track.stop();
    });
  });
  return applyPermission;
}
