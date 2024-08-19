import {
  useWeatherEventsQuery,
  useWeatherForecastQuery,
  useWeatherRainForecastQuery,
} from "../../api";
import { transformWeatherItem } from "../utils";
import { useDashboard } from "./useDashboard";

const registroChartData = [];
for (let i = 0; i < 24; i++) {
  registroChartData.push({
    name: i,
    temperature: Math.floor(Math.random() * 100),
    humidity: Math.floor(Math.random() * 100),
    pressure: Math.floor(Math.random() * 100),
    precipitation: Math.floor(Math.random() * 100),
    date: new Date(Date.now() - 60 * 60 * 1000 * i).toLocaleString(),
  });
}

function roundToNearestThreeHours(date) {
  const hours = date.getHours();
  const roundedHours = Math.floor(hours / 3) * 3;
  date.setHours(roundedHours, 0, 0, 0);
  return date;
}

export const useForecastView = ({ project }) => {
  const dahsboard = useDashboard({ project });

  const location = project?.settings?.location ?? undefined;
  const lat = location?.latitude ?? undefined;
  const lon = location?.longitude ?? undefined;

  const now = new Date();
  const roundedDate = roundToNearestThreeHours(now);
  const date = roundedDate.toISOString().slice(0, 13) + ':00:00Z';

  const weatherForecastQuery = useWeatherForecastQuery(
    { lat, lon, date },
    { skip: !lat || !lon }
  );

  const weatherEventsQuery = useWeatherEventsQuery(
    { cursor: "", limit: 10 },
    { skip: !lat || !lon }
  );

  const weatherEventsData = weatherEventsQuery?.data ?? [];

  const weatherForecastData = weatherForecastQuery?.data;
  const weather_forecast_days =
    weatherForecastData?.forecast?.map(transformWeatherItem) ?? [];

  const currentWeather = weatherForecastQuery?.data?.currentWeather;

  const weatherRainForecastQuery = useWeatherRainForecastQuery(
    { lat, lon },
    { skip: !lat || !lon, refetchOnMountOrArgChange: false }
  );

  return {
    forecast: weatherForecastData,
    project,
    weather: {
      precipitation: {
        data: {
          monthly: dahsboard,
        },
        chart: registroChartData,
      },
      current: currentWeather,
      forecast: {
        data: weather_forecast_days,
      },
      rain: {
        chart: weatherRainForecastQuery?.data,
      },
      events: {
        items: weatherEventsData,
      },
    },
  };
};
