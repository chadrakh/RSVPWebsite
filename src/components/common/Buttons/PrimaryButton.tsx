import styled from '@emotion/styled';
import {FC} from "react";

const StyledButton = styled.button`
  padding: 15px 50px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  border: 1px solid #ffffff;
  color: #ffffff;
  font-size: 16px;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 3em;

  &:hover {
    transform: scale(1.1);
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

type Props = {
    children: string;
};

const PrimaryButton : FC<Props> = ({ children }) => {
    return(
        <>
            <StyledButton>{children}</StyledButton>
        </>
    )
}

export default PrimaryButton;