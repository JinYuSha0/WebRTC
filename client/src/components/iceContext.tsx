import React, { useContext, useEffect, useMemo, useState } from "react";
import useICE from "@hooks/useICE";
import useEvent from "@hooks/useEvent";
import Msg, { domain } from "@/proto/msg";
import {
  getAlbumListByProtobuf,
  getBaseInfoByProtobuf,
  getTypeValue,
} from "@msg/receive";
import {
  EventType,
  getAlbumListParams,
  getBaseInfoParams,
  sendStringParams,
} from "@msg/send";
import { TaskPool, noop } from "@/utils";

export interface IceContextProps extends Partial<ReturnType<typeof useICE>> {
  baseInfo: ExcludeTaskId<domain.IBaseInfo> | null;
  getAlbumList: (page: number, size: number) => Promise<Msg.domain.IAlbum[]>;
  sendMsg: (content: string) => void;
  getBaseInfo: () => Promise<ExcludeTaskId<domain.IBaseInfo>>;
}

const IceContext = React.createContext<IceContextProps>({
  baseInfo: null,
  sendMsg: noop as any,
  getAlbumList: noop as any,
  getBaseInfo: noop as any,
});

const taskPool = new TaskPool();

export const IceProvider: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const [baseInfo, setBaseInfo] =
    useState<ExcludeTaskId<domain.IBaseInfo> | null>(null);
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
      case EventType.BaseInfo:
        const baseInfo = getBaseInfoByProtobuf(event.data);
        taskPool.notify(baseInfo.taskId, baseInfo);
        break;
    }
  });
  const onChannelOpen = useEvent(async (channel: RTCDataChannel) => {
    const taskId = TaskPool.genTaskId();
    channel.send(getBaseInfoParams(taskId));
    const baseInfo = await taskPool.wait<ExcludeTaskId<domain.IBaseInfo>>(
      taskId
    );
    setBaseInfo(baseInfo);
  });
  const iceInstance = useICE(onMessage, onChannelOpen);
  const getAlbumList = useEvent((page: number = 1, size: number = 12) => {
    const taskId = TaskPool.genTaskId();
    iceInstance.send(getAlbumListParams(taskId, page, size));
    return taskPool.wait<Msg.domain.AlbumList["list"]>(taskId);
  });
  const sendMsg = useEvent((content: string) => {
    const taskId = TaskPool.genTaskId();
    iceInstance.send(sendStringParams(taskId, content));
  });
  const getBaseInfo = useEvent(async () => {
    const taskId = TaskPool.genTaskId();
    iceInstance.send(getBaseInfoParams(taskId));
    const baseInfo = await taskPool.wait<ExcludeTaskId<domain.IBaseInfo>>(
      taskId
    );
    setBaseInfo(baseInfo);
    return baseInfo;
  });
  const value = useMemo(
    () => ({ ...iceInstance, baseInfo, sendMsg, getAlbumList, getBaseInfo }),
    [iceInstance, baseInfo]
  );
  useEffect(() => {
    iceInstance.open();
    return iceInstance.close;
  }, []);
  useEffect(() => {
    if (baseInfo !== null && !iceInstance.isChannelOpen) {
      location.href = "/";
      setBaseInfo(null);
    }
  }, [iceInstance.isChannelOpen]);
  return (
    <IceContext.Provider value={value}>{props.children}</IceContext.Provider>
  );
};

export const useIceContext = () => {
  return useContext(IceContext);
};
