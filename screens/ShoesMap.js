import React from 'react'
import { View, SafeAreaView, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native';
import colours from '../components/Colours';
import screenSize from '../components/ScreenSize';
import MapView, {Marker} from 'react-native-maps';


class ShoesMap extends React.Component {
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
        coordinate={{ latitude: 53.22876, longitude: -0.54040 }}
    title={"OFFICE"}
    description={"OFFICE, Lincoln, UK. Unisex Store. Formal & Casual Wear."}
    pinColor='orange'
  />
        <Marker
        coordinate={{ latitude: 53.22878, longitude: -0.54074 }}
    title={"Clarks"}
    description={"Clarks, Lincoln, UK. Unisex Store. Casual Wear."}
    pinColor='orange'
  />
          <Marker
        coordinate={{ latitude: 53.22857, longitude: -0.53949 }}
    title={"Skechers"}
    description={"Skechers, Lincoln, UK. Unisex Store. Casual Wear."}
    pinColor='orange'
  />
            <Marker
        coordinate={{ latitude: 53.22592, longitude: -0.54233 }}
    title={"Shoe Zone"}
    description={"Shoe Zone, Lincoln, UK. Unisex Store. Casual Wear."}
    pinColor='orange'
  />
              <Marker
        coordinate={{ latitude: 53.22545, longitude: -0.54296 }}
    title={"JD Sports"}
    description={"JD Sports, Lincoln, UK. Unisex Store. Casual Wear."}
    pinColor='orange'
  />
               <Marker
        coordinate={{ latitude: 53.23770, longitude: -0.53847 }}
    title={"Happy Soles"}
    description={"Happy Soles, Lincoln, UK. Unisex Store. Casual Wear."}
    pinColor='orange'
  />

</MapView>
</MapViewContainer>


        <Body>
          <TagContainer>
          </TagContainer>
          <HeaderText>Displaying Results for Shoe Shops</HeaderText>
          <BodyText>
            Click on a marker for more information
          </BodyText>

          <Divide />
          <RowStyle>
            <View style={{ paddingLeft: '5%' }}>
              <RowStyle >

                <TagBody style={{ backgroundColor: colours.orange }}>
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

export default ShoesMap;


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
  background: ${colours.orange};
  height: 1px;
  margin: 10px 20px;
  align-items: center;
`
const MapViewContainer = styled.View`
  flex: 1;
  height: 55%;
  width: 100%;
  `