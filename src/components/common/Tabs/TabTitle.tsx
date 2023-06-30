import { FC, ReactNode } from "react";
import styled from "@emotion/styled";

const StyledTitle = styled.button`
  padding: 5%;
  margin: 5%;
  font-size: 1.5vh;
  cursor: pointer;
  outline: none;
  border: none;
  color: #ffffff;
  text-decoration: none;
  background-color: transparent;
  border-bottom: 2px solid transparent;
  opacity: 0.6;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    border-bottom: 2px solid #ffffff;
    opacity: 1;
  }
`;

const StyledListItem = styled.li`
  list-style-type: none;
`;

export type TabTitleProps = {
  title: string;
  index: number;
  children?: ReactNode;
  setSelectedTab?: (index: number) => void;
  selectedTab?: number;
};

const TabTitle: FC<TabTitleProps> = ({
  title,
  setSelectedTab,
  index,
  selectedTab,
}) => {
  const isActive = selectedTab === index;

  const handleClick = () => {
    if (setSelectedTab) {
      setSelectedTab(index);
    }
  };

  return (
    <StyledListItem>
      <StyledTitle
        onClick={handleClick}
        style={{
          borderBottom: isActive ? "2px solid #ffffff" : "none",
          opacity: isActive ? 1 : 0.6,
          marginRight: "1em"
        }}
      >
        {title}
      </StyledTitle>
    </StyledListItem>
  );
};

export default TabTitle;