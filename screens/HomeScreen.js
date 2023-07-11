import Card from '../components/Card'; 
import Categories from '../components/Categories'; 
import colours from '../components/Colours';
import { Ionicons } from '@expo/vector-icons';
import { picList } from '../components/data'; 
import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

const items = [ 
  { text: 'Style' }, 
  { text: 'Made' }, 
  { text: 'Simple' }, 
  ];

export default class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    const username = this.props.navigation.getParam('username', 'x');
      return (
        <Container>
          <ScrollView>
            <Titlebar>
            <Avatar source={require('../assets/avatarnew.jpg')}/>
            <Title>Welcome,</Title>
              <Name>{ username }</Name>
              <MainTitle>Fashion Finder</MainTitle>
          </Titlebar>
          <ScrollView 
            horizontal={true}
            style={{ 
              padding: 10, 
              paddingLeft: 90, 
              paddingTop: 0, 
              flexDirection: 'row', 
            }}>
            { 
              items.map((category, index) => ( 
                  <Categories name={category.text} key={index} /> 
              ))
            }
          </ScrollView>
          <Subtitle> Choose A Clothing Type</Subtitle>
          <ItemsLayout> 
            {picList.map((pic, index) => ( 
                <TouchableOpacity key={index} onPress={() => navigate(pic.navigation)}>
                    <Card key={pic.title} cardtitle={pic.title} cardstrength={pic.strength} cardsrc={pic.file} />
                </TouchableOpacity>
            ))} 
          </ItemsLayout>
          </ScrollView>


          <NavigationBar>
          <TouchableOpacity onPress={() => navigate('Home')}>
          <Ionicons name="home-outline" size={36} color={colours.black} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Social')}>
          <Ionicons name="share-social-outline" size={36} color={colours.black} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Camera')}>
          <Ionicons name="camera-outline" size={36} color={colours.black} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Settings')}>
          <Ionicons name="settings-outline" size={36} color={colours.black} />
          </TouchableOpacity>
          </NavigationBar>


       </Container>

);}}

const Container = styled.View`
flex: 1;
    background-color: ${colours.background};
    justify-content: center;
    align-items: center;
`;
const Titlebar = styled.View`
    width: 100%;
    margin-top: 15%;
    padding-left: 15%;
`;
const Avatar = styled.Image`
    width: 15%;
    height: 40%;
    background: black;
    border-radius: 20px;
    position: absolute;
`;
const Title = styled.Text`
    font-size: 25px;
    font-weight: 500;
    color: ${colours.black}
`;
const MainTitle = styled.Text`
    font-size: 45px;
    font-weight: 500;
    font-family: 'Helvetica';
    color: ${colours.white};
    margin-left: -10%;
`;
const Name = styled.Text`
    font-size: 20px;
    color: ${colours.black};
    font-weight: bold;
`;

const Subtitle = styled.Text` 
  font-size: 20px; 
  color: ${colours.red}; 
  font-weight: 500; 
  font-family: 'Futura'; 
  margin-left: 10%; 
  text-transform: uppercase; 
`;

const ItemsLayout = styled.View` 
  flex-direction: row; 
    flex: 1; 
    flex-wrap: wrap; 
    align-items: center; 
    justify-content: space-evenly; 
    width: 90%; 
    margin: 0; 
    margin-left: -4%;
    `;

const NavigationBar = styled.View`
position: absolute;
bottom: 0;
width: 105%;
height: 10%;
background-color: ${colours.white};
flex-direction: row;
justify-content: space-around;
align-items: center;
padding: 10px;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.1); `;