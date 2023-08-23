import { FC } from 'react';
import styled from '@emotion/styled';
import itinerary from '../../../assets/Wedding-Itinerary.jpg';

const ItineraryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4em;
  padding: 2em;

  @media (max-width: 768px) {
    margin: 2em;
    padding: 1em;
  }
`;

const StyledImage = styled.img`
  width: 500px;

  @media (max-width: 768px) {
    width: 400px;
  }
`;

type ItineraryProps = React.HTMLAttributes<HTMLDivElement> & {
  onClick?: () => void;
};

const Itinerary: FC<ItineraryProps> = () => {
  return (
    <ItineraryContainer>
      <StyledImage src={itinerary} alt="Wedding Itinerary" />
    </ItineraryContainer>
  );
};

export default Itinerary;
