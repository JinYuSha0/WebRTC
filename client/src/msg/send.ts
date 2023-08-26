import Msg from "../proto/msg";

enum EventType {
  String = 0,
  AlbumList = 1,
}

export function sendStringParams(content: string) {
  return Msg.domain.StringParams.encode({
    type: EventType.String,
    content,
  }).finish();
}

export function getAlbumListParams(page: number, size: number) {
  return Msg.domain.AlbumParams.encode({
    type: EventType.AlbumList,
    page,
    size,
  }).finish();
}
