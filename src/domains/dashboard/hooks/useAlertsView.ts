import { useMemo } from "react";

import { useFetchAlerts } from "../../alerts/hooks/useFetchAlerts";
import { useFetchRecomendations } from "../../recomendations/hooks/useFetchRecomendations";

export const useAlertsView = ({ project }) => {
  const recomendations = useFetchRecomendations();
  const recommendationsData = useMemo(() => {
    return {
      text: "Aquí se muestran recomendaciones importantes para la cosecha actual.",
      milestones:
        recomendations?.map((item) => ({
          date: new Date(item.date).toLocaleString(),
          event: `${item.title} - ${item.type} \n ${item.description}`,
        })) ?? [],
    };
  }, [recomendations]);

  const alerts = useFetchAlerts();

  const alertsData = useMemo(() => {
    return (
      alerts.map((item) => ({
        reason: item.reason,
        date: new Date(item.date).toLocaleString(),
        color: item.color,
        description: item.description,
        source: item.source,
      })) ?? []
    );
  }, [alerts]);

  return {
    project,
    settings: project?.settings,
    alerts: alertsData,
    recommendations: recommendationsData,
  };
};
