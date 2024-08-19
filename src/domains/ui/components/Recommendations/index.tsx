import styled from "styled-components";
import Card from "../Card";

const Recommendations = ({ recommendations }) => (
  <RecommendationsContainer title="Recomendaciones">
    {/* <Text>{recommendations.text}</Text> */}
    <Milestones>
      {recommendations.milestones.map((milestone, index) => (
        <Milestone key={index}>
          <Date>{milestone.date}</Date>: {milestone.event}
        </Milestone>
      ))}
    </Milestones>
  </RecommendationsContainer>
);

export default Recommendations;

const RecommendationsContainer = styled(Card)`
  background-color: rgba(255, 255, 255, 0.15);
  height: 40vh;
  overflow-y: scroll;
  padding: 16px 30px;
  margin: 8px;
  padding-bottom: 0px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 90%;
    height: 70vh;
  }
`;

const Title = styled.h3`
  margin: 0 0 20px;
`;

const Text = styled.p`
  font-size: 16px;
`;

const Milestones = styled.div`
  margin: 20px 0;
`;

const Milestone = styled.div`
  margin: 10px 0;
`;

const Date = styled.span`
  font-weight: bold;
  color: #3f51b5;
`;
