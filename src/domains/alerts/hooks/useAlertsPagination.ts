import { useDispatch, useSelector } from "react-redux";
import { setPagination } from "../../store/slices/alertsSlice";
import { useState } from "react";

export const useAlertsPagination = () => {
  const alerts_pagination = useSelector(
    (state: any) => state.alerts?.pagination
  );
  const cursor = alerts_pagination.cursor;
  const limit = alerts_pagination.limit;

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
