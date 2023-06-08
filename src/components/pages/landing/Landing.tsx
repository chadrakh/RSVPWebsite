import styled from '@emotion/styled';
import Text from "../../common/Headings/LandingText";
import PrimaryButton from "../../common/Buttons/PrimaryButton";
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

// const Footer = styled.div``

const Landing = () => {
    return(
    <>
        <>
            <Header>
                <Text type={"primary"}>John & Dorcas</Text>
            </Header>


            <SubHeader>
                <Text type={"secondary"}>Save The Date</Text>
            </SubHeader>

            <Body>
                <Text type={"body"}>August 26th 2023</Text>
                <Text type={"body"}>Bury Town Hall, BL9 0ST</Text>
                <CountdownTimer targetDate={WEDDING_DATE}/>
                <PrimaryButton>RSVP</PrimaryButton>
            </Body>
        </>
    </>
    )
}

export default Landing;