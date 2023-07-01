import styled from '@emotion/styled';
import StyledText from '../../common/Texts/StyledText';
import img1 from '../../../assets/WeddingTeam/IMG-01.jpeg';
import img2 from '../../../assets/WeddingTeam/IMG-02.jpeg';
import img3 from '../../../assets/WeddingTeam/IMG-03.jpeg';
import img4 from '../../../assets/WeddingTeam/IMG-04.jpeg';
import img5 from '../../../assets/WeddingTeam/IMG-05.jpeg';

const DisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 4em 2em;

  @media (max-width: 660px) {
    align-items: center;
    margin: 0em 2em;
  }
`;

const ContentGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2em;
  justify-items: center;

  @media (min-width: 660px) {
    grid-gap: 5em;
  }
`;

const LabelCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #000000;
  border: 0.5em solid #ffffff;
  background-color: #ffffff; 
`;

const StyledImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const WeddingTeam = () => {
  return (
    <DisplayWrapper>
      <StyledText type="subheader" size="3em">Bridesmaids</StyledText>
      <ContentGroup>
        <LabelCard>
          <StyledImage src={img3} alt="" />
          <StyledText type="body">Belinda</StyledText>
        </LabelCard>
        <LabelCard>
          <StyledImage src={img1} alt="" />
          <StyledText type="body">Keke</StyledText>
        </LabelCard>
        <LabelCard>
          <StyledImage src={img2} alt="" />
          <StyledText type="body">Maria</StyledText>
        </LabelCard>
        <LabelCard>
          <StyledImage src={img4} alt="" />
          <StyledText type="body">Rosie</StyledText>
        </LabelCard>
        <LabelCard>
          <StyledImage src={img5} alt="" />
          <StyledText type="body">Ruth</StyledText>
        </LabelCard>
      </ContentGroup>
    </DisplayWrapper>
  );
};

export default WeddingTeam;