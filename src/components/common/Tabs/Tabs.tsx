import { FC, ReactElement, useState } from 'react';
import styled from '@emotion/styled';
import TabTitle from './TabTitle';

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
`;


const Tabs: FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <StyledList>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
          />
        ))}
      </StyledList>
      {children[selectedTab]}
    </div>
  );
};

type Props = {
  children: ReactElement[];
};

export default Tabs;
