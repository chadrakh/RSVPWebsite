import styled from '@emotion/styled';
import { FC, ReactElement } from 'react';

const StyledCard = styled.div`
  text-align: center;
  justify-content: center;
  outline: solid white;
  color: grey;
  background: rgba(255, 255, 240, 0);
`;

type Props = {
    children: ReactElement;
  };

const Card: FC<Props> = () => {
    return(
        <StyledCard>
        </StyledCard>
    )
}

export default Card