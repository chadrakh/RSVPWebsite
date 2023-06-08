import { FC } from "react";
import styled from "@emotion/styled";

type Props = {
    value: number;
    type: string;
    isDanger: boolean;
  };
  
const Display = styled.div<{ isDanger: boolean }>`
    padding: 1rem;
    margin: 1rem;
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
    color: ${props => (props.isDanger ? "red" : "white")};
`;

const DateTimeDisplay: FC<Props> = ({ value, type, isDanger }) => {
  return (
    <>
      <Display isDanger={isDanger} className="countdown">
        <p>{value}</p>
        <span>{type}</span>
      </Display>
    </>
  );
};

export default DateTimeDisplay;