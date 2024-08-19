import { useProject } from "../domains/project/hooks/useProject";
import PrivateRoute from "../domains/auth/components/PrivateRoute";
import AlertsView from "../domains/dashboard/components/DashboardPanel/AlertsView";
import { useAlertsView } from "../domains/dashboard/hooks/useAlertsView";

const AlertsPage = () => {
  const project = useProject();
  const data = useAlertsView({ project });

  return (
    <PrivateRoute>
      <AlertsView
        plantationInfo={{
          name: "",
          location: "",
          seasonStart: "",
          harvestStatus: "",
          weeks: 0,
        }}
        {...data}
      />
    </PrivateRoute>
  );
};

export default AlertsPage;
