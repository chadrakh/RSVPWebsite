import React from 'react';
import useCountdown from '../../../hooks/useCountdown';
import ExpiredNotice from './ExpiredNotice';
import ShowCounter from './ShowCounter';

const CountdownTimer: React.FC<Props> = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

    return (
        <>
        {
            (days + hours + minutes + seconds) <= 0  
            ? <ExpiredNotice /> 
            : <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds}/>
        }
        </>
    );
};

type Props = {
  targetDate: string;
};

export default CountdownTimer;
