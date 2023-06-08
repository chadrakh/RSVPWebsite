import styled from '@emotion/styled';
import {FC, ReactElement} from 'react';

const Grid = styled.div`
  gap: 10%;
  padding: 3vh;
  display: grid;
  flex: 1 1 auto;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`;

type Props = {
    children: ReactElement;
};

const CardGrid: FC<Props> = ({ children }) => {
    return <Grid>{children}</Grid>;
};

export default CardGrid;
