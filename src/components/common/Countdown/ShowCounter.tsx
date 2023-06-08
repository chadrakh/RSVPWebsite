import { FC } from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import styled from "@emotion/styled";

const StyledWrapper = styled.div`
    margin: 2em 0 2em 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

type Props = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  
  const ShowCounter: FC<Props> = ({
    days,
    hours,
    minutes,
    seconds,
  }) => {
    return (
        <StyledWrapper>
            <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
            <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
            <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
            <DateTimeDisplay value={seconds} type={'Secs'} isDanger={false} />
        </StyledWrapper>
    );
  };

export default ShowCounter;