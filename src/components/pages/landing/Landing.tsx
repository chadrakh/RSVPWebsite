import styled from '@emotion/styled';
import LandingText from "../../common/Headings/LandingText";
import PrimaryButton from "../../common/Buttons/PrimaryButton";


const LandingWrapper = styled.div`
  background-size: cover;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Landing = () => {
    return(
    <>
        <LandingWrapper>
            <LandingText type={"primary"}>John & Dorcas</LandingText>
            <LandingText type={"secondary"}>Save The Date</LandingText>
            <LandingText type={"body"}>August 26th 2023</LandingText>
            <LandingText type={"body"}>Bury Town Hall, BL9 0ST</LandingText>
            <PrimaryButton>RSVP</PrimaryButton>
        </LandingWrapper>
    </>
    )
}

export default Landing;