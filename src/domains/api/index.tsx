import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

export interface UserResponse {
  user?: any;
  data?: any;
  error?: any;
  access_token?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export let api: ReturnType<typeof initApi>;
export let useLoginMutation;
export let useSatNdviRecordQuery;
export let useWeatherDashboardQuery;
export let useWeatherForecastQuery;
export let useWeatherRainForecastQuery;
export let useProjectSettingsQuery;
export let useSensorsDataQuery;
export let useAlertsQuery;
export let useRecommendationsQuery;
export let useSummaryStatusQuery;
export let useSummarySensorsQuery;
export let useSummarySatQuery;
export let useSatDataQuery;
export let useSatDayDataQuery;
export let useSatDataHistoryQuery;
export let useWeatherEventsQuery;

export const initApi = (host: string) => {
  const _api = createApi({
    reducerPath: "api",
    baseQuery: retry(
      fetchBaseQuery({
        baseUrl: host,
        prepareHeaders: async (headers, { getState }) => {
          // const state = getState() as any;

          // if (state.user?.tokens?.idToken) {
          //   const token = state.user?.tokens?.idToken?.toString();
          //   // headers.set("Authorization", `Bearer ${token}`);
          // }
          // headers.set("Content-Type", "application/json");
          // headers.set("Accept", "application/json");
          // headers.set("Access-Control-Allow-Origin", "*");
          // headers.set("Content-Type", "application/json");
          // headers.set("Access-Control-Allow-Headers", "Content-Type");
          // headers.set(
          //   "Access-Control-Allow-Methods",
          //   "GET, POST, PUT, DELETE, OPTIONS"
          // );
          // headers.set("Access-Control-Allow-Credentials", "true");
          // headers.set("Accept", "*/*");
          // headers.set("Origin", "*");
          // headers.set("Sec-Fetch-Mode", "cors");
          // headers.set("Sec-Fetch-Dest", "empty");
          // headers.set("Sec-Fech-Site", "cross-site");
          return headers;
        },
      }),
      {
        maxRetries: 0,
      }
    ),
    keepUnusedDataFor: 0,
    endpoints: (builder) => ({
      login: builder.mutation<UserResponse, LoginRequest>({
        query: (credentials) => ({
          url: "user/login",
          method: "POST",
          body: credentials,
        }),
      }),
      project_settings: builder.query<any, any>({
        query: (data) => ({
          url: `/project/settings`,
          method: "GET",
          // credentials: "include",
          // headers: {
          //   "Content-Type": "application/json",
          //   // Authorization: "Bearer YOUR_TOKEN", // Si es necesario
          // },
        }),
        keepUnusedDataFor: 0,
      }),
      summary_status: builder.query<any, any>({
        query: ({ lat, lon }) => ({
          url: `/summary/status`,
          method: "GET",
        }),
        keepUnusedDataFor: 30,
      }),
      summary_sensors: builder.query<any, any>({
        query: ({ lat, lon }) => ({
          url: `/summary/sensors`,
          method: "GET",
        }),
        keepUnusedDataFor: 30,
      }),
      summary_satellite: builder.query<any, any>({
        query: ({ date }) => ({
          url: `/summary/satellite?date=${date}`,
          method: "GET",
        }),
        keepUnusedDataFor: 30,
      }),
      weather_events: builder.query<any, any>({
        query: ({ cursor, limit }) => ({
          url: `/weather/events?cursor=${cursor}&limit=${limit}`,
          method: "GET",
        }),
        keepUnusedDataFor: 30,
      }),
      weather_dashboard: builder.query<any, any>({
        query: ({ lat, lon }) => ({
          url: `/weather/dashboard?lat=${lat}&lon=${lon}`,
          method: "GET",
        }),
        keepUnusedDataFor: 30,
      }),
      weather_forecast: builder.query<any, any>({
        query: ({ lat, lon, date }) => ({
          url: `/weather/weather_forecast?lat=${lat}&lon=${lon}&?date=${date}`,
          method: "GET",
        }),
        keepUnusedDataFor: 30,
      }),
      weather_rain_forecast: builder.query<any, any>({
        query: ({ lat, lon }) => ({
          url: `/weather/weather_rain_forecast?lat=${lat}&lon=${lon}`,
          method: "GET",
        }),
      }),
      sat_ndvi_record: builder.query<any, any>({
        query: ({ date }) => ({
          url: `/sat_ndvi?date=${date}`,
          method: "GET",
        }),
        keepUnusedDataFor: 150,
      }),
      sensors_data: builder.query<any, any>({
        query: ({ startDate, endDate, limit = 20 }) => ({
          url: `/data/sensors?startDate=${startDate}&endDate=${endDate}&limit=${limit}`,
          method: "GET",
        }),
        keepUnusedDataFor: 150,
      }),
      sat_data: builder.query<any, any>({
        query: ({ date }) => ({
          url: `/data/satellite`,
          method: "GET",
        }),
        keepUnusedDataFor: 150,
      }),
      sat_day_data: builder.query<any, any>({
        query: ({ date }) => ({
          url: `/data/satellite_day?date=${date}`,
          method: "GET",
        }),
        keepUnusedDataFor: 150,
      }),
      sat_data_history: builder.query<any, any>({
        query: ({ startDate, endDate }) => ({
          url: `/data/satellite_history?startDate=${startDate}&endDate=${endDate}`,
          method: "GET",
        }),
        keepUnusedDataFor: 150,
      }),
      alerts: builder.query<any, any>({
        query: ({ startDate, endDate, limit = 20 }) => ({
          url: `/data/alerts?startDate=${startDate}&endDate=${endDate}&limit=${limit}`,
          method: "GET",
        }),
        keepUnusedDataFor: 150,
      }),
      recommendations: builder.query<any, any>({
        query: ({ startDate, endDate, limit = 20 }) => ({
          url: `/data/recommendations?startDate=${startDate}&endDate=${endDate}&limit=${limit}`,
          method: "GET",
        }),
        keepUnusedDataFor: 150,
      }),
    }),
  });

  useLoginMutation = _api.useLoginMutation;
  useProjectSettingsQuery = _api.useProject_settingsQuery;
  useSatNdviRecordQuery = _api.useSat_ndvi_recordQuery;
  useWeatherDashboardQuery = _api.useWeather_dashboardQuery;
  useWeatherForecastQuery = _api.useWeather_forecastQuery;
  useWeatherRainForecastQuery = _api.useWeather_rain_forecastQuery;
  useSensorsDataQuery = _api.useSensors_dataQuery;
  useAlertsQuery = _api.useAlertsQuery;
  useRecommendationsQuery = _api.useRecommendationsQuery;
  useSummaryStatusQuery = _api.useSummary_statusQuery;
  useSummarySensorsQuery = _api.useSummary_sensorsQuery;
  useSummarySatQuery = _api.useSummary_satelliteQuery;
  useWeatherEventsQuery = _api.useWeather_eventsQuery;
  useSatDataQuery = _api.useSat_dataQuery;
  useSatDayDataQuery = _api.useSat_day_dataQuery;
  useSatDataHistoryQuery = _api.useSat_data_historyQuery;
  api = _api;

  return _api;
};
