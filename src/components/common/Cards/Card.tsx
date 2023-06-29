import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';

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
    children: ReactNode;
};

const Card: FC<Props> = ({children}) => {
    return(
        <StyledCard>
            {children}
        </StyledCard>
    )
}

export default Card