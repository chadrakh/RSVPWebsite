import styled from '@emotion/styled';
import PrimaryHeading from "../../common/Headings/PrimaryHeading";
import SecondaryHeading from "../../common/Headings/SecondaryHeading";

const LandingWrapper = styled.div`
  background-image: url(../../../assets/tempBg.jpg);
  background-size: cover;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: block;
  text-align: center;
  margin: 0;
`;

// const LandingWrapper = styled.div`
// margin: 0;
// padding: 0;
// width: 100%;
// height: 100%;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// text-align: center;
// gap: 2em;
// `

const Landing = () => {
    return(
    <>
    <LandingWrapper>
        <TextWrapper>
            <PrimaryHeading>John & Dorcas</PrimaryHeading>
            <SecondaryHeading>Save The Date</SecondaryHeading>
            You have landed.
        </TextWrapper>
    </LandingWrapper>
    </>
    )
}

export default Landing