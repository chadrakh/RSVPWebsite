import { FC } from 'react';
import styled from '@emotion/styled';

interface ImageProps {
  src: string;
  alt: string;
}

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Image: FC<ImageProps> = ({ src, alt }) => {
  return <StyledImage src={src} alt={alt} />;
};

export default Image;