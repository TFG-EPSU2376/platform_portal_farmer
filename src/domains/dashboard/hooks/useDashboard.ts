import { useEffect, useMemo } from "react";
import {
  useSatNdviRecordQuery,
  useSensorsDataQuery,
  useWeatherForecastQuery,
  useWeatherRainForecastQuery,
} from "../../api";
import { transformSensorsChartData } from "../../sensors/utils";

import { useSelector } from "react-redux";



function roundToNearestThreeHours(date) {
  const hours = date.getHours();
  const roundedHours = Math.floor(hours / 3) * 3;
  date.setHours(roundedHours, 0, 0, 0);
  return date;
}



export const useDashboard = ({ project }) => {
  const proejctSettingData = useSelector<{
    api: {
      queries: {
        project_settings: () => any;
      };
    };
  }>((state) => state.api.queries["project_settings({})"]?.data) as {
    location: {
      latitude: number;
      longitude: number;
    };
  };

  const location = proejctSettingData?.location ?? undefined;
  const lat = location?.latitude ?? undefined;
  const lon = location?.longitude ?? undefined;

  const currentDate = useMemo(() => new Date().toISOString().split("T")[0], []);
  const startDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() - 3);
    return date.toISOString().split("T")[0];
  }, []);

  const ndviQuery = useSatNdviRecordQuery(
    { date: currentDate },
    { skip: !project }
  );
  const sensorsQuery = useSensorsDataQuery(
    { startDate, endDate: currentDate, limit: 1 },
    { skip: !project }
  );

  const now = new Date();
  const roundedDate = roundToNearestThreeHours(now); 
  const date = roundedDate.toISOString().slice(0, 13) + ':00:00Z';

  const weatherForecastQuery = useWeatherForecastQuery(
    { lat, lon ,date},
    { skip: !lat || !lon }
  );
  const weatherRainForecastQuery = useWeatherRainForecastQuery(
    { lat, lon },
    { skip: !lat || !lon, refetchOnMountOrArgChange: false }
  );
  const chat_sensors = useMemo(
    () => transformSensorsChartData(sensorsQuery.data?.items),
    [sensorsQuery.data]
  );

  return {
    ndvi: ndviQuery.data,
    isNdviLoading: ndviQuery.isLoading,
    sensors: sensorsQuery.data,
    chat_sensors,
    weatherForecast: weatherForecastQuery.data,
    isWeatherForecastFetching: weatherForecastQuery.isFetching,
    weatherRainForecast: weatherRainForecastQuery.data,
    isWeatherRainForecastFetching: weatherRainForecastQuery.isFetching,
  };
};
