import { FC, ReactNode } from "react";
import styled from "@emotion/styled";

const StyledTabGroup = styled.div`
  display: flex;
  justify-content: center;
`;

type TabGroupProps = {
  children: ReactNode;
  selectedTab: number;
  setSelectedTab: (index: number) => void;
};

const TabGroup: FC<TabGroupProps> = ({ children }) => {
  return (
    <StyledTabGroup>
      {children}
    </StyledTabGroup>
    );
};

export default TabGroup;
