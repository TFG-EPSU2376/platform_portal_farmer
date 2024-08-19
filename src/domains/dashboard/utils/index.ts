export const transformWeatherItem = (item: any) => {
      return {
        time: `${item.time.split(" ")[1].split(":")[0]}:00`,
        label: item.weather,
        description: item.description,
        icon: item.icon,
         temperature: item.temp,
        temperatureMax: item.temp_max,
        temperatureMin: item.temp_min,
        humidity: item.humidity,
        precipitation: item.rain,
        condition: item.weather ?? item.icon
    }
}

const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

export const transformWeatherRainMonthlySummary= (data: any) => {
    if (!data) return [];

    const currentYear = new Date().getFullYear();
    const lastYear = currentYear - 1;
    const twoYearsAgo = currentYear - 2;

    const result = monthNames.map((month, index) => {
        const lastYearData = data.find(item => new Date(item.date).getFullYear() === lastYear && new Date(item.date).getMonth() === index);
        const twoYearsAgoData = data.find(item => new Date(item.date).getFullYear() === twoYearsAgo && new Date(item.date).getMonth() === index);

        return {
            week: month,
            currentYear: lastYearData ? lastYearData.precipitation : undefined,
            lastYear: twoYearsAgoData ? twoYearsAgoData.precipitation : undefined
        };
    });

    return result;
}
 

export const transformCurrentForecast = (item: any) => {
    const data = {
        ...item,
        time: new Date(item.time * 1000).toLocaleString(),
    }
    return transformWeatherItem(data);
}