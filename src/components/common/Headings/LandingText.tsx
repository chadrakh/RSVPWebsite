import styled from '@emotion/styled';
import {FC} from "react";

const StyledPrimary = styled.h1`
  font-size: 6em;
  font-family: "Tangerine",sans-serif;
  font-weight: normal;
  margin-bottom: 0.5em;
`;

const StyledSecondary = styled.h2`
  font-size: 3em;
  font-family: "Tangerine",sans-serif;
  //font-weight: normal;
  margin-bottom: 0.5em;
`;

const StyledBody = styled.p`
  font-size: 1.1em;
  margin-top: 1em;
`;

type Props = {
    children: string;
    type?: string;
};

const LandingText : FC<Props> = ({ type, children }) => {
    return(
        <>
            {type === "body" && <StyledBody>{children}</StyledBody>}
            {type === "primary" && <StyledPrimary>{children}</StyledPrimary>}
            {type === "secondary" && <StyledSecondary>{children}</StyledSecondary>}
        </>

    )
}

export default LandingText;