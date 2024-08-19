import { useSelector } from "react-redux";

export const useSensorsFilters = ( ) => {
  const sensors_filters = useSelector((state: any) => state.sensors?.filters);
  const startDate = sensors_filters.startDate;
  const endDate = sensors_filters.endDate;

  const data = {
    startDate,
    endDate,
   };

  return data;
};
