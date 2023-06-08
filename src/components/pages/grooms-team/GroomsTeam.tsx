import Card from "../../common/Cards/Card";
import Grid from "../../common/Cards/CardGrid";
import Container from "../../common/Cards/CardContainer";
import { groomsmenArr } from "../../../store/consts/teamProfiles";

const GroomsTeam = () => {
    return (
        <>
            <Container>
                <Grid>
                    {groomsmenArr.map(([name, link]) => (
                        <Card key={name}>
                            <img src={link} alt={name} />
                            <h2>{name}</h2>
                        </Card>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default GroomsTeam;
