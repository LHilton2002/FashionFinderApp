import React from 'react'; 
import styled from 'styled-components/native'; 


const Card = props => ( 
  <Container>
    <Cover>
        <Image source={props.cardsrc} /> 
    </Cover> 
    <Content>
        <Title>{props.cardtitle}</Title>
    </Content> 
  </Container> 
); 
export default Card;

const Container = styled.View` 
    background: white; 
    height: 180px; 
    width: 100%; 
    border-radius: 24px; 
    margin: 35px; 
    margin-top: 30px;
    padding: 5px; 
    box-shadow: 0 10px 15px rgba(125, 0, 0, 0.6); 
`;

const Cover = styled.View` 
  width: 100%; 
  height: 120px; 
  border-top-left-radius: 14px; 
  border-top-right-radius: 14px; 
  overflow: hidden; 
`;

const Image = styled.Image` 
  width: 100%; 
  height: 100%; 
`;

const Content = styled.View` 
  padding-top: 10px; 
  flex-direction: column; 
  align-items: center; 
  height: 60px; 
`;

const Title = styled.Text` 
  color: black; 
  font-size: 15px; 
  font-weight: 800; 
  text-align:center;
  font-family: 'Helvetica'; 
`;
