import Tabs from "../../common/Tabs/Tabs"
import BridalTeam from "../bridal-team/BridalTeam"
import GroomsTeam from "../grooms-team/GroomsTeam"

const WeddingTeam = () => {
    return(
            <>
            <Tabs>
                <BridalTeam></BridalTeam>
                <GroomsTeam></GroomsTeam>
            </Tabs>
            </>
    )

}

export default WeddingTeam;