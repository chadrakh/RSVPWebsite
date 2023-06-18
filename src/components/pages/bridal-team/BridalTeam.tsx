import Card from '../../common/Cards/Card';
import Grid from '../../common/Cards/CardGrid';
import Container from '../../common/Cards/CardContainer';
import { BRIDESMAIDS } from '../../../store/consts/consts';

const BridalTeam = () => {
    return (
        <>
            <Container>
                <Grid>
                    {BRIDESMAIDS.map(([name, link]) => (
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

export default BridalTeam;
