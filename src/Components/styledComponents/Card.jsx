import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  background-color: #fff;
  min-width: 100px;
  max-width: 250px;
  min-height: 200px;
  max-height: 500px;
  border: 1px solid #000;
  border-radius: 6px;
  margin: 10px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
`;

const ImageContainer = styled.section`
  max-height: 250px;
  max-width: 250px;
`;

const Image = styled.img`
  height: auto;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Details = styled.section`
  padding: 10px;
`;

const Title = styled.h4`
  margin: 0;
`;

const Description = styled.p`
  color: #3e3e3e;
  margin-top: 4px;
  margin-bottom: 0;
  font-size: 14px;
`;

const Footer = styled.p`
  padding: 8px 10px;
  border-top: 1px solid #5f5f5f;
  font-size: 13px;
  color: #4e4e4e;
  margin: 0;
`;

const Card = props => (
  <Container>
    <ImageContainer>
      <Image
        src="http://placekitten.com/500/500"
        alt="placeholder"
        style={{height: 'auto', width: '100%'}}
      />
    </ImageContainer>
    <Details>
      <Title>Card Title</Title>
      <Description>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel vitae
        optio ducimus mollitia velit est dolorum earum praesentium ipsam.
      </Description>
    </Details>
    <Footer>More info...</Footer>
  </Container>
);

export default Card;
