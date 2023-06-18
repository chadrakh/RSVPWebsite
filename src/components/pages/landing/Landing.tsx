import styled from '@emotion/styled';
import StyledText from '../../common/Texts/StyledText';
import PrimaryButton from '../../common/Buttons/Button';
import CountdownTimer from '../../common/Countdown/CountdownTimer';
import { WEDDING_DATE } from '../../../store/consts/consts';

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
    margin: 5vh 0 0 0;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
`

const Landing = () => {
    return(
    <>
        <>
            <Header>
                <StyledText type="header">John & Dorcas</StyledText>
            </Header>


            <SubHeader>
                <StyledText type="subheader">Save The Date</StyledText>
            </SubHeader>

            <Body>
                <StyledText type="body" size="large">August 26th 2023</StyledText>
                <StyledText type="body" padding={2} size="large">Bury Town Hall</StyledText>
                <StyledText type="body" padding={1} size="large">BL9 0ST</StyledText>
                <CountdownTimer targetDate={WEDDING_DATE}/>
                <PrimaryButton>RSVP</PrimaryButton>
            </Body>
        </>
    </>
    )
}

export default Landing;