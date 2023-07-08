import { useEffect } from 'react';
import styled from '@emotion/styled';
import StyledText from "../../common/Texts/StyledText";
import PrimaryButton from '../../common/Buttons/PrimaryButton';
import CountdownTimer from '../../common/Countdown/CountdownTimer';
import { WEDDING_DATE } from '../../../store/consts/consts';
import { useNavigate } from 'react-router';

const Header = styled.div`
    height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SubHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Body = styled.div`
    margin: 3vh 0 0 0;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
`

const Landing = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

    const navigate = useNavigate();
  
    const handleRSVPClick = () => {
      navigate('/rsvp');
    };
  
    return (
      <>
        <Header>
          <StyledText type="header" size="6em">John & Dorcas</StyledText>
        </Header>
  
        <SubHeader>
          <StyledText type="subheader" size="3em">Save The Date</StyledText>
        </SubHeader>
  
        <Body>
          <StyledText type="body" size="large">August 26th 2023</StyledText>
          <StyledText type="body" marginTop={2} size="large">Bury Town Hall</StyledText>
          <StyledText type="body" marginTop={1} size="large">BL9 0ST</StyledText>
          <CountdownTimer targetDate={WEDDING_DATE} />
          <PrimaryButton onClick={handleRSVPClick}>RSVP</PrimaryButton>
        </Body>
      </>
    );
  };
  
  export default Landing;