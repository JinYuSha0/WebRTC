import protobuf from "protobufjs";
import Msg from "../proto/msg";
import fetcher from "./fetcher";
import { AxiosResponse } from "axios";

function protobufDecode<T extends any>(decode: (buffer: Uint8Array) => T) {
  return (res: AxiosResponse<any, any>) => {
    const buffer = protobuf.util.newBuffer(res.data);
    return decode(buffer);
  };
}

export function getAlbumList(params: {
  page: number;
  size: number;
}): Promise<Msg.domain.AlbumList> {
  return fetcher
    .get("/album", {
      params,
      responseType: "arraybuffer",
    })
    .then(protobufDecode(Msg.domain.AlbumList.decode));
}
