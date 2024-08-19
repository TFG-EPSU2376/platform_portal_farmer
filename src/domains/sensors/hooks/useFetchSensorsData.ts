import { useEffect, useMemo } from "react";
import { useSensorsDataQuery } from "../../api";
import { transformSensorsChartData, transformSensorsData } from "../utils";
import { useSensorsFilters } from "./useSensorsFilters";
import { useSensorsPagination } from "./useSensorsPagination";

export const useFetchSensorsData = () => {
  const { startDate, endDate } = useSensorsFilters();
  const { cursor, limit, loadMore, updateCursor } = useSensorsPagination();

  const query = {
    startDate,
    endDate,
    limit,
    cursor,
  };

  const { data: data_sensors } = useSensorsDataQuery(query, {
    skip: false,
  });

  useEffect(() => {
    if (data_sensors?.lastEvaluatedKey) {
      updateCursor(data_sensors?.lastEvaluatedKey);
    }
  }, [data_sensors]);

  const chat_sensors = transformSensorsChartData(data_sensors?.items ?? []);
  const chat_items = transformSensorsData(data_sensors?.items ?? []);

  const data = {
    data: chat_items,
    chart: chat_sensors,
  };

  return data;
};
