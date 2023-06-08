import styled from '@emotion/styled';
import { FC } from "react";

const StyledPrimary = styled.h1`
  font-size: 6em;
  font-family: "Tangerine", sans-serif;
  font-weight: normal;
  margin-bottom: 0.5em;
`;

const StyledSecondary = styled.h2`
  font-size: 3em;
  font-family: "Tangerine", sans-serif;
  margin-bottom: 0.5em;
`;

const StyledBody = styled.p<{ bold?: boolean, italics?: boolean, padding?: number, size?: string }>`
  font-size: ${(props) => (props.size ?? "large")};
  margin-top: ${(props) => props.padding}em;
  font-style: ${(props) => (props.italics ? "italic" : "normal")};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
`;

const StyledText: FC<Props> = ({ type, children, bold, italics, padding, size }) => {
  return (
    <>
      {type === "body" && (
        <StyledBody bold={bold} italics={italics} padding={padding} size={size}>
          {children}
        </StyledBody>
      )}
      {type === "header" && <StyledPrimary>{children}</StyledPrimary>}
      {type === "subheader" && <StyledSecondary>{children}</StyledSecondary>}
    </>
  );
};

type Props = {
  children: string;
  type?: "header" | "subheader" | "body";
  bold?: boolean;
  italics?: boolean;
  padding?: number;
  size?: "xx-small" | "x-small" | "small" | "medium" | "large" | "x-large" | "xx-large";
};

export default StyledText;
