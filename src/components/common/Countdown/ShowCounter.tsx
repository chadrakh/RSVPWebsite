import { FC } from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import styled from '@emotion/styled';

const StyledWrapper = styled.div`
    margin: 2em 0 2em 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;
  
const ShowCounter: FC<Props> = ({
    days,
    hours,
    minutes,
    seconds,
  }) => {

    const isDanger = days <= 3;

    return (
        <StyledWrapper>
            {days > 0 && <DateTimeDisplay value={days} unit='Days' isDanger={isDanger} />}
            {(days > 0 && hours > 0) && <DateTimeDisplay value={hours} unit='Hours' isDanger={isDanger} />}
            {(days > 0 && hours > 0 && minutes > 0)  && <DateTimeDisplay value={minutes} unit='Mins' isDanger={isDanger} />}
            <DateTimeDisplay value={seconds} unit='Secs' isDanger={isDanger} />
        </StyledWrapper>
    );
  };

type Props = {
   days: number;
   hours: number;
   minutes: number;
  seconds: number;
};

export default ShowCounter;