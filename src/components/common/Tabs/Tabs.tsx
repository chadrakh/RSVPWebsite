import { FC, ReactElement } from "react";
import styled from "@emotion/styled";
import TabTitle, { TabTitleProps } from "./TabTitle";
import React from "react";

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
`;

type TabsProps = {
  selectedTab: number;
  setSelectedTab: (index: number) => void;
  children: ReactElement<TabTitleProps>[] | ReactElement<TabTitleProps>;
};

const Tabs: FC<TabsProps> = ({ selectedTab, setSelectedTab, children }) => {
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div>
      <StyledList>
        {childrenArray.map((child) => {
          if (React.isValidElement(child) && child.type === TabTitle) {
            const { title, setSelectedTab: childSetSelectedTab, selectedTab: childSelectedTab, ...restProps } = child.props;
            const tabProps: TabTitleProps = {
              title,
              setSelectedTab: childSetSelectedTab || setSelectedTab,
              selectedTab: childSelectedTab !== undefined ? childSelectedTab : selectedTab,
              ...restProps,
            };

            return <TabTitle {...tabProps} />;
          }
          return child;
        })}
      </StyledList>
    </div>
  );
};

export default Tabs;
