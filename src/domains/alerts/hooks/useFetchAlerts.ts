import { useEffect, useMemo } from "react";
 import { useAlertsPagination } from "./useAlertsPagination";
import { useAlertsQuery } from "../../api";
 
export const useFetchAlerts = () => {
   const { cursor, limit, loadMore, updateCursor } = useAlertsPagination();

  const query = { 
    startDate:"2023-05-25",
    endDate:"2024-09-25",
    limit,
    cursor,
  };

  const { data } = useAlertsQuery(query, {
    skip: false,
  });

  useEffect(() => {
    if (data?.lastEvaluatedKey) {
      updateCursor(data?.lastEvaluatedKey);
    }
  }, [data]);

 
  

  return   data?.items ?? [];
};
