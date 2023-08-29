import Msg from "../proto/msg";

export function getTypeValue(buffer: ArrayBuffer) {
  const view = new DataView(buffer);
  const first = view.getUint8(0);
  const second = view.getUint8(1);
  return (first << 8) | second;
}

export function getAlbumListByProtobuf(
  buffer: ArrayBuffer
): Msg.domain.AlbumList {
  const uint8Array = new Uint8Array(buffer.slice(2));
  return Msg.domain.AlbumList.decode(uint8Array);
}

export function getBaseInfoByProtobuf(
  buffer: ArrayBuffer
): Msg.domain.BaseInfo {
  const uint8Array = new Uint8Array(buffer.slice(2));
  return Msg.domain.BaseInfo.decode(uint8Array);
}
