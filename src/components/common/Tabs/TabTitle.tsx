import { FC } from 'react';
import StyledText from '../Texts/StyledText';

type TabTitleProps = {
  title: string;
};

const TabTitle: FC<TabTitleProps> = ({ title }) => {
  return (
    <StyledText>
      {title}
    </StyledText>
  );
};

export default TabTitle;
