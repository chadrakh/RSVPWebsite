import styled from '@emotion/styled';
import { FC } from 'react';

const StyledCard = styled.div`
  width: 100%;
  padding-bottom: 100%; /* Sets aspect ratio for fixed size */
  background-color: white;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: black;
`;

type Props = {
    text: string;
};

const Card: FC<Props> = ({text}) => {
    return(
        <StyledCard>
            {text}
        </StyledCard>
    )
}

export default Card