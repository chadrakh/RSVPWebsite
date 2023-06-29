import styled from '@emotion/styled';
import {FC, ReactNode} from 'react';

const Grid = styled.div`
  margin: 5%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15vw, 1fr));
  grid-gap: 5vw;
  text-align: center;
  align-items: center;
  justify-items: center;
`;

type Props = {
  children: ReactNode;
}

const CardGrid: FC<Props> = ( {children} ) => {
    return (
        <Grid>
          {children}
        </Grid>
    );
};

export default CardGrid;