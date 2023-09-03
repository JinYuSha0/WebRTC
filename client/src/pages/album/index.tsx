import React, { memo, useEffect, useRef, useState } from "react";
import useEvent from "@/hooks/useEvent";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import { FixedSizeGrid as Grid, areEqual } from "react-window";
import { useIceContext } from "@/components/iceContext";
import { domain } from "@/proto/msg";

const NUM_COLUMNS = 8;

const Cell: React.FC<{
  data: domain.IAlbum[];
  columnIndex: number;
  rowIndex: number;
  style: React.CSSProperties;
}> = memo(({ data, columnIndex, rowIndex, style }) => {
  const { baseInfo } = useIceContext();
  const index = rowIndex * 8 + columnIndex;
  const album = data[index];
  return (
    <div style={style} className="inline-block">
      {album != null ? (
        <img
          className="w-full h-full object-cover"
          src={`http://${baseInfo?.serverAddress}/thumbnail?id=${album?.mediaId}`}
        />
      ) : null}
    </div>
  );
}, areEqual);

const Album: React.FC<{}> = (props) => {
  const { baseInfo, getAlbumList } = useIceContext();
  const { albumCount } = baseInfo ?? {};
  const pageRef = useRef<number>(1);
  const [albumList, setAlbumList] = useState<domain.IAlbum[]>([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isNextPageLoading, setIsNextPageLoading] = useState(false);
  const _getAlbumList = useEvent(async () => {
    try {
      setIsNextPageLoading(true);
      const res = await getAlbumList(pageRef.current, 96);
      pageRef.current++;
      setHasNextPage(albumList.length + res.length < (albumCount ?? 0));
      setAlbumList((prev) => [...prev, ...res]);
    } catch (err) {
      console.log(err);
    } finally {
      setIsNextPageLoading(false);
    }
  });
  const _loadMoreItems = useEvent((startIndex: number, endIndex: number) => {
    if (isNextPageLoading) return;
    _getAlbumList();
  });
  const _isItemLoaded = useEvent((index: number) => {
    return !hasNextPage || index < albumList.length;
  });
  useEffect(() => {
    _getAlbumList();
  }, []);
  return (
    <AutoSizer>
      {({ width, height }: { width: number; height: number }) => {
        const columnWidth = width / NUM_COLUMNS;
        const rowHeight = columnWidth * (16 / 9);
        const rowCount = Math.ceil(albumList.length / NUM_COLUMNS);
        return (
          <InfiniteLoader
            isItemLoaded={_isItemLoaded}
            itemCount={albumCount ?? 0}
            loadMoreItems={_loadMoreItems}
          >
            {({ onItemsRendered, ref }) => (
              <Grid
                ref={ref}
                width={width}
                height={height}
                columnWidth={columnWidth}
                rowHeight={rowHeight}
                columnCount={NUM_COLUMNS}
                itemData={albumList}
                rowCount={rowCount}
                overscanColumnCount={8}
                onItemsRendered={(gridProps) => {
                  onItemsRendered({
                    overscanStartIndex:
                      gridProps.overscanRowStartIndex * NUM_COLUMNS,
                    overscanStopIndex:
                      gridProps.overscanRowStopIndex * NUM_COLUMNS,
                    visibleStartIndex:
                      gridProps.visibleRowStartIndex * NUM_COLUMNS,
                    visibleStopIndex:
                      gridProps.visibleRowStopIndex * NUM_COLUMNS,
                  });
                }}
              >
                {Cell}
              </Grid>
            )}
          </InfiniteLoader>
        );
      }}
    </AutoSizer>
  );
};

export default Album;
