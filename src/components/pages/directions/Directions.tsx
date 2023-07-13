import { FC } from 'react';
import styled from '@emotion/styled';
import StyledText from '../../common/Texts/StyledText';
import oldhamPremierInn from '../../../assets/venue/oldham-premer-inn.jpg';
import buryPremierInn from '../../../assets/venue/bury-premier-inn.jpg';
import buryTravelodge from '../../../assets/venue/bury-travelodge.jpg';
import oldham247Hotel from '../../../assets/venue/oldham-247hotel.jpg';

const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4em;
  padding: 2em;
  color: #333333;
  background-color: #f3f3f3;

  @media (max-width: 768px) {
    margin: 2em;
    padding: 1em;
  }

  & > * {
    margin-inline: 3em;
  }

  a {
    color: inherit;
    text-decoration: underline;
  }
`;

const VenuesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-inline: 0;
    margin-block: 2em;
  }

  & > * {
    margin-inline: 2em;
  }
`;

const VenueCard = styled.div`
  margin-bottom: 2em;
`;

const HotelsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const HotelCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  margin: 1em;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 1em;
  }
`;

const Directions: FC = () => {
  const venueData = {
    ceremony: {
      address: 'Bury Town Hall, Bury, BL9 0ST',
      street: 'Bury Town Hall',
      postcode: 'BL9 0ST',
    },
    reception: {
      address: 'The Empire Suite, Oldham, OL9 6BA',
      street: 'The Empire Suite',
      postcode: 'OL9 6BA',
    },
  };

  const hotelData = [
    {
      name: 'Premier Inn Oldham Broadway',
      address: 'The Broadway, Oldham OL9 8DW',
      bookingLink: 'https://www.premierinn.com/gb/en/hotels/england/greater-manchester/oldham/oldham-broadway.html',
      mainImg: oldhamPremierInn,
    },
    {
      name: 'Premier Inn Bury',
      address: 'Knowsley St, Bury BL9 0SW',
      bookingLink: 'https://www.premierinn.com/gb/en/hotels/england/greater-manchester/manchester/manchester-bury.html',
      mainImg: buryPremierInn,
    },
    {
      name: 'Travelodge Bury',
      address: 'Pilsworth Rd, Bury BL9 8RN',
      bookingLink: 'https://www.travelodge.co.uk/hotels/297/Bury-hotel',
      mainImg: buryTravelodge,
    },
    {
      name: '247Hotel Oldham',
      address: 'Manchester St, Oldham OL8 4AS',
      bookingLink: 'https://www.247hotel.com/',
      mainImg: oldham247Hotel,
    },
  ];

  const getDirectionsUrl = (address: string): string => {
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  };

  return (
    <LocationContainer>
      <StyledText type="header" size="3em">
        Venue Details
      </StyledText>
      <VenuesContainer>
      <VenueCard>
        <StyledText type="body" size="large" bold align="center">
          Ceremony
        </StyledText>
        <StyledText type="body" size="medium" align="center">
          {venueData.ceremony.street}
        </StyledText>
        <StyledText type="body" size="medium" align="center" marginBottom={1}>
          {venueData.ceremony.postcode}
        </StyledText>
        <a
          href={getDirectionsUrl(venueData.ceremony.address)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledText type="body" size="medium" italics align="center">Get directions</StyledText>
        </a>
      </VenueCard>
      <VenueCard>
        <StyledText type="body" size="large" bold align="center">
          Reception
        </StyledText>
        <StyledText type="body" size="medium" align="center">
          {venueData.reception.street}
        </StyledText>
        <StyledText type="body" size="medium" align="center" marginBottom={1}>
          {venueData.reception.postcode}
        </StyledText>
        <a
          href={getDirectionsUrl(venueData.ceremony.address)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledText type="body" size="medium" italics align="center">Get directions</StyledText>
        </a>
      </VenueCard>
      </VenuesContainer>

      <StyledText type="header" size="3em" marginTop={0.5}>
        Nearby Hotels
      </StyledText>
      <HotelsContainer>
        {hotelData.map((hotel, index) => (
          <HotelCard key={index}>
            <StyledText type="body" marginBottom={1}>{hotel.name}</StyledText>
            <StyledText type="body" size="medium" align="center" marginBottom={1}>
              {hotel.address}
            </StyledText>
            <a href={hotel.bookingLink} target="_blank" rel="noopener noreferrer">
              <StyledText type="body" size="medium" italics marginBottom={1}>Book Here</StyledText>
            </a>
            <img src={hotel.mainImg} alt={hotel.name} />
          </HotelCard>
        ))}
      </HotelsContainer>
      <a 
        href="https://www.booking.com/searchresults.en-gb.html?ss=Oldham&ssne=Oldham&ssne_untouched=Oldham&label=gen173nr-1BCAEoggI46AdIM1gEaFCIAQGYAQm4ARnIAQzYAQHoAQGIAgGoAgO4ArOpv6UGwAIB0gIkOGQ5OTRlNTktNDlmZi00ZjkyLTk0ZWYtMTllMzk4OWM2MTA22AIF4AIB&sid=fb91613c380ae8193a7637425bedb631&aid=304142&lang=en-gb&sb=1&src_elem=sb&src=index&dest_id=-2604617&dest_type=city&checkin=2023-08-26&checkout=2023-08-27&group_adults=2&no_rooms=1&group_children=0&sb_travel_purpose=leisure"
        target="_blank"
        rel="noopener noreferrer"
        >
          <StyledText type="body" size="large" italics marginBottom={1}>See more options...</StyledText>
        </a>
    </LocationContainer>
  );
};

export default Directions;