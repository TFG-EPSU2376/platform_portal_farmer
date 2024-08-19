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

//crear registro chart data para cada hora un valor y una fecha de 60 minutos de direncia
const registroChartData = [];
// for (let i = 0; i < 24; i++) {
//   registroChartData.push({
//     name: i,
//     temperature: Math.floor(Math.random() * 100),
//     humidity: Math.floor(Math.random() * 100),
//     pressure: Math.floor(Math.random() * 100),
//     precipitation: Math.floor(Math.random() * 100),
//     date: new Date(Date.now() - 60 * 60 * 1000 * i).toLocaleString(),
//   });
// }

//crear registro table data para cada media hora un valor y una fecha de 30 minutos de direncia
// debe incluir date, type medicion( /temperatura, humedad, presion, estdo fruto, ), sensor que lo proporciona, valor e icono
const registroTableData = [];
// for (let i = 0; i < 24; i++) {
//   registroTableData.push({
//     date: new Date(Date.now() - 30 * 60 * 1000 * i).toLocaleString(),
//     type: "Temperatura",
//     sensor: "Sensor " + ((i % 4) + 1),
//     value: Math.floor(Math.random() * 100),
//     icon: <FaTemperatureHigh />,
//     unity: "°C",
//   });
// }

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
  // return {
  //   ndvi: ndviQuery.data,
  //   isNdviLoading: ndviQuery.isLoading,
  //   sensors: sensorsQuery.data,
  //   chat_sensors,
  //   weatherForecast: weatherForecastQuery.data,
  //   isWeatherForecastFetching: weatherForecastQuery.isFetching,
  //   weatherRainForecast: weatherRainForecastQuery.data,
  //   isWeatherRainForecastFetching: weatherRainForecastQuery.isFetching,
  // };


  const handleNDVIDateChange = (date) => {
     setDate(date);
    // setCurrentDate(date);
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
