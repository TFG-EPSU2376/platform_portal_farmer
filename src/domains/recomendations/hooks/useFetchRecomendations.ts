import { useEffect, } from "react";
import { useRecommendationsQuery, useSensorsDataQuery } from "../../api";
import { useRecomendationsPagination } from "./useRecomendationsPagination";

export const useFetchRecomendations = () => {
  const { cursor, limit, loadMore, updateCursor } =
    useRecomendationsPagination();

  const query = {
    startDate:"2023-05-25",
    endDate:"2024-09-25",
    limit,
    cursor,
  };

  const { data } = useRecommendationsQuery(query, {
    skip: false,
  });

  useEffect(() => {
    if (data?.lastEvaluatedKey) {
      updateCursor(data?.lastEvaluatedKey);
    }
  }, [data]);

  return data?.items ?? [];
};
