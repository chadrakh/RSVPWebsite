import Card from "../../common/Cards/Card"
import Grid from "../../common/Cards/CardGrid"
import Container from "../../common/Cards/CardContainer"
import { bridesmaidProfiles } from "../../../store/consts/teamProfiles";

const BridalTeam = () => {
    const cardItems = bridesmaidProfiles.map((bridesmaid: string[]) =>
    <Card>
        <img src="" alt="">
            {bridesmaid[0][0]}
        </img>
        <h2>
            {bridesmaid[0][1]}
        </h2>
    </Card>
    );

    return(
        <>
            <Container>
                <Grid>
                    <Card>
                    {cardItems.map((title, ) => (
                        <Card>
                        <img src={} alt="" />
                        <h2>{title}</h2>
                        </Card>
                    ))}
                    </Card>
                </Grid>
            </Container>
        </>
    )
}

export default BridalTeam