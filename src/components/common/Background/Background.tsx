import styled from "@emotion/styled";
import background from "../../../assets/background-dark-overlay.jpg";
import PulseLoader from "react-spinners/PulseLoader";
import { Suspense, ReactNode } from "react";
import { useLocation } from "react-router-dom";

const BackgroundContainer = styled.div<{ isWeddingTeam: boolean }>`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  background-attachment: fixed;
  height: 100vh;
  position: relative;

  @media (max-width: 660px) {
    height: ${(props) => (props.isWeddingTeam ? "auto" : "100vh")};
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

interface BackgroundProps {
  children: ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  const location = useLocation();
  const isWeddingTeam =
    location.pathname === "/wedding-team";

  return (
    <BackgroundContainer isWeddingTeam={isWeddingTeam}>
      <Suspense fallback={<LoaderContainer><PulseLoader color="#ffffff" /></LoaderContainer>}>
        {children}
      </Suspense>
    </BackgroundContainer>
  );
};

export default Background;