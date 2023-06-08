import styled from '@emotion/styled';
import { FC, ReactElement } from 'react';

const Container = styled.div`
  margin: 5%;
  justify-content: center;
  outline: solid white;
  background-color: transparent;
  flex: 1 1 auto;
`;


const CardContainer: FC<Props> = () => {
    return(
        <Container>
        </Container>
    )
}

type Props = {
  children: ReactElement;
};

export default CardContainer