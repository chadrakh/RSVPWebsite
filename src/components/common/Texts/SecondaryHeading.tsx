import styled from '@emotion/styled';
import {FC} from "react";

const Heading = styled.p`
  font-size: 3em;
  font-family: "Parisienne",sans-serif;
`;

const SecondaryHeading : FC<Props> = ({ children }) => {
    return(
        <Heading>{children}</Heading>
    )
}

type Props = {
    children: string;
};

export default SecondaryHeading;