import { FC } from "react";
import styled from "@emotion/styled";

const StyledTitle = styled.button`
  padding: 5%;
  margin: 5%;
  font-size: 1.5vh;
  cursor: pointer;
  outline: none;
  border: none;
  color: white;
  text-decoration: none;
  background-color: transparent;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid white;
  }
`;

const StyledListItem = styled.li`
  list-style-type: none;
`;

type TitleProps = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
  selectedTab: number;
};

const TabTitle: FC<TitleProps> = ({
  title,
  setSelectedTab,
  index,
  selectedTab,
}) => {
  return (
    <StyledListItem>
      <StyledTitle
        onClick={() => setSelectedTab(index)}
        style={{
          borderBottom: selectedTab === index ? "2px solid white" : "none",
        }}
      >
        {title}
      </StyledTitle>
    </StyledListItem>
  );
};

export default TabTitle;
