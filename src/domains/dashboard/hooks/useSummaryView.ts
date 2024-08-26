import { useMemo, useState } from "react";
import { useDashboard } from "./useDashboard";
import {
  useSatNdviRecordQuery,
  useSummarySatQuery,
  useSummarySensorsQuery,
  useSummaryStatusQuery,
  useWeatherForecastQuery,
} from "../../api";
import { transformSensorData } from "../../sensors/utils";
import { transformWeatherItem } from "../utils";

const registroChartData = [];

const registroTableData = [];
export const useSummaryView = ({ project }) => {
  const dahsboard = useDashboard({ project });

  const location = project?.settings?.location ?? undefined;
  const lat = location?.latitude ?? undefined;
  const lon = location?.longitude ?? undefined;

  const [date, setDate] = useState(new Date());

  const currentDate = useMemo(() => date.toISOString().split("T")[0], [date]);
  const startDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() - 14);
    return date.toISOString().split("T")[0];
  }, []);

  const satQuery = useSummarySatQuery( { date: currentDate },{ skip: !project });
 
  const statusQuery = useSummaryStatusQuery({}, { skip: !project });

  const sensorsQuery = useSummarySensorsQuery({}, { skip: !project });

  const ndviQuery = useSatNdviRecordQuery(
    { date: currentDate },
    { skip: !project }
  );

  const chart_sensors = useMemo(
    () => transformSensorData(sensorsQuery?.data?.summary) ?? [],
    [sensorsQuery.data]
  );
  const weatherForecastQuery = useWeatherForecastQuery(
    { lat, lon },
    { skip: !lat || !lon }
  );

  const weatherForecastData = weatherForecastQuery?.data;
  const weather_forecast_days =
    weatherForecastData?.forecast?.map(transformWeatherItem) ?? [];

  const handleNDVIDateChange = (date) => {
     setDate(date);
  }

const actions = {
  ndvi:{
    onChangeDate:handleNDVIDateChange
  }

}

  return {
    settings: project?.settings,
    actions,
    project: {
      ...project,
      coordinates: {
        latitude: lat,
        longitude: lon,
      },
    },
    status: statusQuery?.data,
    forecast: weatherForecastData?.forecast ?? [],
    ndvi: satQuery?.data ?? undefined,
    sensors: {
      chart: chart_sensors,
    },
    weather: {
      precipitation: {
        data: {
          monthly: dahsboard,
        },
        chart: registroChartData,
      },
      forecast: {
        data: weather_forecast_days,
      },
    },
    history: { chart: registroChartData, data: registroTableData },
  };
};
