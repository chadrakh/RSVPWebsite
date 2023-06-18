import Tabs from '../../common/Tabs/Tabs'
import BridalTeam from '../bridal-team/BridalTeam'
import GroomsTeam from '../grooms-team/GroomsTeam'

const WeddingTeam = () => {
    return(
            <>
                <Tabs>
                    <BridalTeam />
                    <GroomsTeam />
                </Tabs>
            </>
    )
}

export default WeddingTeam;