import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';

const StyledCard = styled.div`
  width: 100%;
  padding: 4%;
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