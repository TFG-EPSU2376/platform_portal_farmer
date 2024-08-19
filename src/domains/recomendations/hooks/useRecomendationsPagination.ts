import { useDispatch, useSelector } from "react-redux";
 import { useState } from "react";
import { setPagination } from "../../store/slices/alertsSlice";

export const useRecomendationsPagination = () => {
  const recommendations_pagination = useSelector(
    (state: any) => state.recommendations?.pagination
  );
  const cursor = recommendations_pagination.cursor;
  const limit = recommendations_pagination.limit;

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
