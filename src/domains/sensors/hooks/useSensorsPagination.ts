import { useDispatch, useSelector } from "react-redux";
import { setPagination } from "../../store/slices/sensorsSlice";
import { useState } from "react";

export const useSensorsPagination = () => {
  const sensors_pagination = useSelector(
    (state: any) => state.sensors?.pagination
  );
  const cursor = sensors_pagination.cursor;
  const limit = sensors_pagination.limit;

  const dispatch = useDispatch();
  const [nextCursor, setNextCursor] = useState<string | null>(null);

  const loadMore = () => {
    dispatch(setPagination({ key: "cursor", value: nextCursor }));
  };

  const updateCursor = (cursor: string) => {
    setNextCursor(cursor);
  };
  const data = {
    cursor,
    limit,
    updateCursor,
    loadMore,
  };

  return data;
};
