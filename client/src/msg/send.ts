import Msg from "@/proto/msg";

export enum EventType {
  String = 0,
  AlbumList = 1,
}

function typeBytes(type: number) {
  if (type < 0 || type > 65535)
    throw new Error("type range must in [0, 65535]");
  return new Uint8Array([type >> 8, type & 255]);
}

function mergeTypeBytes(type: number, buffer: Uint8Array) {
  let arrayOne = typeBytes(type);
  let mergedArray = new Uint8Array(2 + buffer.length);
  mergedArray.set(arrayOne);
  mergedArray.set(buffer, 2);
  return mergedArray;
}

export function sendStringParams(taskId: string, content: string) {
  return mergeTypeBytes(
    EventType.String,
    Msg.domain.StringParams.encode({
      taskId,
      content,
    }).finish()
  );
}

export function getAlbumListParams(taskId: string, page: number, size: number) {
  return mergeTypeBytes(
    EventType.AlbumList,
    Msg.domain.AlbumParams.encode({
      taskId,
      page,
      size,
    }).finish()
  );
}
