import PrivateRoute from "../domains/auth/components/PrivateRoute";
import NDVIDetailedViewer from "../domains/ui/components/NDVIDetailedViewer";
import { useSatelliteView } from "../domains/dashboard/hooks/useSatelliteView";
import { useProject } from "../domains/project/hooks/useProject";
import styled from "styled-components";

const SatellitePage = () => {
  const project = useProject();
  const data = useSatelliteView({ project });
  if (!data?.ndvi) return <div>Loading...</div>;
  return (
    <PrivateRoute>
      <Container>
        <NDVIDetailedViewer data={data} />
      </Container>
    </PrivateRoute>
  );
};

export default SatellitePage;

const Container = styled.div`
  display: flex;
  width: 100vw;
  margin-left: -40px;
`;
