import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const StyledCardImg = styled(Card.Img)`
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 40vh;
  object-fit: cover;
}
   @media (min-width: 769px) {
    width: 100vw; 
  }

    @media (max-width: 480px) {
    width: 100vw;
  }
`;

export default StyledCardImg;