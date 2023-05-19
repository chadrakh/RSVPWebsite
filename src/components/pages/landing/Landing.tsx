import styled from '@emotion/styled';

const LandingWrapper = styled.div`
  background-image: url(../../../assets/tempBg.jpg);
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
        You have landed.
    </LandingWrapper>
    </>
    )
}

export default Landing