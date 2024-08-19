import PrivateRoute from "../domains/auth/components/PrivateRoute";
import HistoryView from "../domains/dashboard/components/DashboardPanel/HIstoryView";
import { useFetchSensorsData } from "../domains/sensors/hooks/useFetchSensorsData";

const HistoryPage = () => {
  const { chart, data: history } = useFetchSensorsData();

  return (
    <PrivateRoute>
      <HistoryView chart={chart} history={history} />
    </PrivateRoute>
  );
};

export default HistoryPage;
