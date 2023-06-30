import { FC, useState } from "react";
import Tabs from "../../common/Tabs/Tabs";
import BridalTeam from "../bridal-team/BridalTeam";
import GroomsTeam from "../grooms-team/GroomsTeam";
import TabTitle from "../../common/Tabs/TabTitle";

const WeddingTeam: FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
      <TabTitle title="Bridesmaids" index={0}>
        <BridalTeam />
      </TabTitle>
      <TabTitle title="Groomsmen" index={1}>
        <GroomsTeam />
      </TabTitle>
    </Tabs>
  );
};

export default WeddingTeam;
