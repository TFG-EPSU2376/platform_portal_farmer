export const transformSensorsData = (data_sensors) => {
  return data_sensors;
};

export const transformSensorsChartData = (data_sensors) => {
  const groupedData = {};

  data_sensors?.forEach((item) => {
    const date = new Date(item.date).toLocaleString();
    if (!groupedData[date]) {
      groupedData[date] = { date };
    }

    if (item.type === "Temperature") {
      groupedData[date].temperature = item.value;
    } else if (item.type === "Humidity") {
      groupedData[date].humidity = item.value;
    } else if (item.type === "Rainfall") {
      groupedData[date].rainfall = item.value;
    }
  });

  return Object.values(groupedData);
};

export const transformSensorData = (data) => {
  return data?.map((item) => {
    const date = new Date(item.date);
    return {
      date: `${date.getHours().toString().padStart(2, "0")}:00`,
      temperatureMin: item.temperature.min,
      temperatureMax: item.temperature.max,
      temperatureAvg: item.temperature.avg,
      humidityMin: item.humidity.min,
      humidityMax: item.humidity.max,
      humidityAvg: item.humidity.avg,
      rainfallMin: item.rainfall.min,
      rainfallMax: item.rainfall.max,
      rainfallAvg: item.rainfall.avg,
    };
  });
};
