import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  font-size: 1.5em;
  color: #333;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &::after {
    content: "";
    width: 24px;
    height: 24px;
    border: 4px solid #333;
    border-top-color: transparent;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
    margin-left: 10px;
  }
`;

const Loading = () => {
  return <Loader />;
};

export default Loading;
