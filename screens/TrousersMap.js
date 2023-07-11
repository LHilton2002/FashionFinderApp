import React from 'react'
import { View, SafeAreaView, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native';
import colours from '../components/Colours';
import screenSize from '../components/ScreenSize';
import MapView, {Marker} from 'react-native-maps';


class TrousersMap extends React.Component {
  render() {
const { navigate } = this.props.navigation;
    return (
      <Container>
       
       <MapViewContainer>
       <MapView style={{ flex: 1 }}
    initialRegion={{
    latitude: 53.22505,
    longitude: -0.53641,
    latitudeDelta: 0.025,
    longitudeDelta: 0.025,
  }}>
      <Marker
        coordinate={{ latitude: 53.22814, longitude: -0.54049 }}
    title={"Crew Clothing"}
    description={"Crew Clothing, Lincoln, UK. Unisex Store. Formal & Casual Wear."}
    pinColor='blue'
  />
        <Marker
        coordinate={{ latitude: 53.22525, longitude: -0.53799 }}
    title={"Dollar Jeans"}
    description={"Dollar Jeans, Lincoln, UK. Men's Store. Casual Wear."}
    pinColor='blue'
  />
          <Marker
        coordinate={{ latitude: 53.22880, longitude: -0.53914 }}
    title={"H&M"}
    description={"H&M, Lincoln, UK. Unisex Store. Casual Wear."}
    pinColor='blue'
  />
            <Marker
        coordinate={{ latitude: 53.22870, longitude: -0.53878 }}
    title={"Next"}
    description={"Next, Lincoln, UK. Unisex Store. Casual Wear."}
    pinColor='blue'
  />
              <Marker
        coordinate={{ latitude: 53.22781, longitude: -0.54106 }}
    title={"River Island"}
    description={"River Island, Lincoln, UK. Unisex Store. Casual Wear."}
    pinColor='blue'
  />
                <Marker
        coordinate={{ latitude: 53.22744, longitude: -0.53987 }}
    title={"Superdry"}
    description={"River Island, Lincoln, UK. Unisex Store. Casual Wear."}
    pinColor='blue'
  />
                  <Marker
        coordinate={{ latitude: 53.22531, longitude: -0.53829 }}
    title={"Total Workwear"}
    description={"Total Workwear, Lincoln, UK. Unisex Store. Work Wear."}
    pinColor='blue'
  />
                    <Marker
        coordinate={{ latitude: 53.22884, longitude: -0.53877 }}
    title={"Tresspass"}
    description={"Tresspass, Lincoln, UK. Unisex Store. Outdoor Wear."}
    pinColor='blue'
  />
                      <Marker
        coordinate={{ latitude: 53.23529, longitude: -0.53857 }}
    title={"Oui"}
    description={"Oui, Lincoln, UK. Unisex Store. Formal Wear."}
    pinColor='blue'
  />
                        <Marker
        coordinate={{ latitude: 53.23090, longitude: -0.53966 }}
    title={"Gere Menswear"}
    description={"Gere Menswear, Lincoln, UK. Men's Store. Formal Wear."}
    pinColor='blue'
  />

</MapView>
</MapViewContainer>


        <Body>
          <TagContainer>
          </TagContainer>
          <HeaderText>Displaying Results for Trousers Shops</HeaderText>
          <BodyText>
            Click on a marker for more information
          </BodyText>

          <Divide />
          <RowStyle>
            <View style={{ paddingLeft: '5%' }}>
              <RowStyle >

                <TagBody style={{ backgroundColor: colours.blue }}>
                  <TouchableOpacity onPress={() => navigate('Home')}>
                  <TagText>Back</TagText>
                  </TouchableOpacity>
                </TagBody>
              </RowStyle>
            </View>

          </RowStyle>
        </Body>
      </Container>
    )
  }
}

export default TrousersMap;


const Container = styled.View`
  flex: 1;
  background: ${colours.background}
`
const Body = styled.ScrollView`
  background: ${colours.background};
  height: 65%;
  width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 30px;
  position: absolute;
  top: ${screenSize.height * 0.67}px
`
const TagContainer = styled.View`
  flex-direction: row;
  width: 100%;
  margin-left: 8%;
  margin-top: 8%};
`
const TagBody = styled.View`
  height: auto;
  width: 50%;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  margin-right: 500px;
  padding:10px;
`
const TagText = styled.Text`
  color: white;
  font-size: 44px;
`
const HeaderText = styled.Text`
  color: white;
  font-size: 20px;
  margin-top: 5%;
  margin-left: 20px;
  font-weight: bold;
`
const BodyText = styled.Text`
  color: white;
  font-size: 15px;
  margin: 20px 20px;
`
const RowStyle = styled.View`
  flex-direction: row;
  width:100%;
`
const Divide = styled.View`
  background: ${colours.blue};
  height: 1px;
  margin: 10px 20px;
  align-items: center;
`
const MapViewContainer = styled.View`
  flex: 1;
  height: 55%;
  width: 100%;
  `
