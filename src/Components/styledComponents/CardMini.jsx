import React, {memo} from 'react';
import styled from 'styled-components/macro';
import PokeGrass_1 from '../../assets/pokeGrass_1.jpg';
// import PokeGrass_2 from '../../assets/pokeGrass_2.png';

const Container = styled.div`
  background-color: #fff;
  min-width: 100px;
  max-width: 175px;
  min-height: 100px;
  max-height: 500px;
  border: 1px solid #000;
  border-radius: 6px;
  margin: 10px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
`;

const ImageContainer = styled.section`
  max-height: 175px;
  max-width: 175px;
  background: url(${PokeGrass_1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
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

const Card = memo(({name = 'Pokemon name', url}) => {
  // Extract ID from the URL with RegEx
  const pokeID = url
    .match(/\d/g)
    .splice(1)
    .join('');
  // UpperCase name first letter
  const nameUp = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <Container>
      <ImageContainer>
        {/* <Image
          src="http://placekitten.com/500/500"
          alt="placeholder"
          style={{height: 'auto', width: '100%'}}
        /> */}
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`}
          alt="placeholder"
          style={{height: 'auto', width: '100%'}}
        />
      </ImageContainer>
      <Details>
        <Title>
          {pokeID} - {nameUp}
        </Title>
        <Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel vitae
          optio ducimus mollitia velit est dolorum earum praesentium ipsam.
        </Description>
      </Details>
      <Footer>More info...</Footer>
    </Container>
  );
});

export default Card;
