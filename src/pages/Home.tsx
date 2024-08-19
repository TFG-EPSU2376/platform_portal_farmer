import { useProject } from "../domains/project/hooks/useProject";
import PrivateRoute from "../domains/auth/components/PrivateRoute";
import SummaryView from "../domains/ui/components/SummaryView";
import { useSummaryView } from "../domains/dashboard/hooks/useSummaryView";
import GanttChart from "../domains/GanttChart";

const HomePage = () => {
  const project = useProject();
  const data = useSummaryView({ project });

  return (
    <PrivateRoute>
      <SummaryView {...data} attributes={["ndvi", "weatherForecast"]} />
    </PrivateRoute>
  );
};

export default HomePage;
