import { FC, ReactNode } from 'react';
import CardGrid from '../Cards/CardGrid';
import TabTitle from './TabTitle';

type TabProps = {
  children: ReactNode;
  title: string;
  onClick: () => void;
};

const Tab: FC<TabProps> = ({ children, title }) => {

  return (
    <CardGrid>
        <TabTitle title={title} />
        {children}
    </CardGrid>
  );
};

export default Tab;