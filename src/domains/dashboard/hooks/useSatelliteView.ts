import { useMemo, useState } from "react";
import { useDashboard } from "./useDashboard";
import { useSatDataHistoryQuery, useSatDataQuery, useSatDayDataQuery,   } from "../../api";

export const useSatelliteView = ({ project }) => {
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

  const satQuery = useSatDataQuery(
    { date: currentDate },
    { skip: !project }
  );

  const satDayQuery = useSatDayDataQuery(
    { date: currentDate },
    { skip: !project }
  );

  const satHistoryQuery = useSatDataHistoryQuery(
    { startDate, endDate: currentDate },
    { skip: !project }
  );

  const ndviData = satHistoryQuery?.data?.chartData ? {
    polygonData: satQuery?.data?.polygonData,
     ...satDayQuery?.data,
    ...satHistoryQuery?.data,
  }: undefined
 
  const handleNDVIDateChange = (date) => {
     setDate(date);
    // setCurrentDate(date);
  };

  const actions = {
    ndvi: {
      onChangeDate: handleNDVIDateChange,
    },
    project
  };

  return {
    actions,
    project,
    ndvi: ndviData
  };
};
