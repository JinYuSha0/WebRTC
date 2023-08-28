import React, { useContext, useEffect, useMemo } from "react";
import useICE from "@hooks/useICE";
import useEvent from "@hooks/useEvent";
import Msg from "@/proto/msg";
import { getAlbumListByProtobuf, getTypeValue } from "@msg/receive";
import { EventType, getAlbumListParams, sendStringParams } from "@msg/send";
import { TaskPool, noop } from "@/utils";

export interface IceContextProps extends Partial<ReturnType<typeof useICE>> {
  getAlbumList: (page: number, size: number) => Promise<Msg.domain.IAlbum[]>;
  sendMsg: (content: string) => void;
}

const IceContext = React.createContext<IceContextProps>({
  sendMsg: noop as any,
  getAlbumList: noop as any,
});

const taskPool = new TaskPool();

export const IceProvider: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const onMessage = useEvent(function (
    this: RTCDataChannel,
    event: MessageEvent
  ) {
    const type = getTypeValue(event.data);
    switch (type) {
      case EventType.AlbumList:
        const albumList = getAlbumListByProtobuf(event.data);
        taskPool.notify(albumList.taskId, albumList.list);
        break;
    }
  });
  const iceInstance = useICE(onMessage);
  const getAlbumList = useEvent((page: number = 1, size: number = 12) => {
    const taskId = TaskPool.genTaskId();
    iceInstance.send(getAlbumListParams(taskId, page, size));
    return taskPool.wait<Msg.domain.AlbumList["list"]>(taskId);
  });
  const sendMsg = useEvent((content: string) => {
    const taskId = TaskPool.genTaskId();
    iceInstance.send(sendStringParams(taskId, content));
  });
  const value = useMemo(
    () => ({ ...iceInstance, sendMsg, getAlbumList }),
    [iceInstance]
  );
  useEffect(() => {
    iceInstance.open();
    return iceInstance.close;
  }, []);
  return (
    <IceContext.Provider value={value}>{props.children}</IceContext.Provider>
  );
};

export const useIceContext = () => {
  return useContext(IceContext);
};
