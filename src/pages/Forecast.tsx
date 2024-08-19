import { useProject } from "../domains/project/hooks/useProject";
import PrivateRoute from "../domains/auth/components/PrivateRoute";
import WeatherView from "../domains/dashboard/components/DashboardPanel/WeatherView";
import { useForecastView } from "../domains/dashboard/hooks/useForecastView";

const ForecastPage = () => {
  const project = useProject();
  const data = useForecastView({ project });

  return (
    <PrivateRoute>
      <WeatherView {...data} />
    </PrivateRoute>
  );
};

export default ForecastPage;
