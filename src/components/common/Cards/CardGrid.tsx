import styled from '@emotion/styled';
import {FC, ReactNode} from 'react';

const Grid = styled.div`
margin: 10%;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
grid-gap: 20px;
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