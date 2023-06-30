import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';

type CardProps = {
    padding?: "0.5em" | "1em" | "1.5em" | "2em" | "2.5em" | "3em";
    margin?: "0.5em" | "1em" | "1.5em" | "2em" | "2.5em" | "3em";
}

const StyledCard = styled.div<CardProps>`
  width: 100%;
  padding: ${(props) => (props.padding)};
  margin: ${(props) => (props.margin)};
  background-color: white;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: black;
`;

type Props = {
    children: ReactNode;
    padding?: "0.5em" | "1em" | "1.5em" | "2em" | "2.5em" | "3em";
    margin?: "0.5em" | "1em" | "1.5em" | "2em" | "2.5em" | "3em";
};

const Card: FC<Props> = ({ children, padding, margin }) => {
    return(
        <StyledCard padding={padding} margin={margin}>
            {children}
        </StyledCard>
    )
}

export default Card