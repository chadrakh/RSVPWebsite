import { FC } from "react";
import styled from "@emotion/styled";
 
const Display = styled.div<{ isDanger: boolean }>`
    padding: 1rem;
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-width: 3rem;
    height: 3rem;
    display: grid;
    place-items: center;
    word-break: break-word;
    font-weight: bold;
    font-size: 1em;
    color: ${props => (props.isDanger ? "red" : "white")};
`;

const StyledSpan = styled.span`
  margin: 1em 0 0 0;
`

const DateTimeDisplay: FC<Props> = ({ value, unit, isDanger }) => {
  
  return (
    <>
      <Display isDanger={isDanger} className="countdown">
        <p>{value}</p>
        <StyledSpan>{unit}</StyledSpan>
      </Display>
    </>
  );
};

type Props = {
  value: number;
  unit: "Days" | "Hours" | "Mins" | "Secs";
  isDanger: boolean;
};

export default DateTimeDisplay;