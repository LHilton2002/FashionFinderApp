import React from 'react'
import { View, SafeAreaView, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native';
import colours from '../components/Colours';
import screenSize from '../components/ScreenSize';
import MapView, {Marker} from 'react-native-maps';

class ShirtMap extends React.Component {
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
        coordinate={{ latitude: 53.22416, longitude: -0.53302 }}
    title={"Clothing Creations"}
    description={"Clothing Creations, Lincoln, UK. Unisex Store. Formal & Casual Wear."}
  />
        <Marker
        coordinate={{ latitude: 53.23134, longitude: -0.53990 }}
    title={"Todd's Menswear"}
    description={"Todd's Menswear, Lincoln, UK. Men's Store. Formal Wear."}
  />
          <Marker
        coordinate={{ latitude: 53.22880, longitude: -0.53914 }}
    title={"H&M"}
    description={"H&M, Lincoln, UK. Unisex Store. Casual Wear."}
  />
            <Marker
        coordinate={{ latitude: 53.22870, longitude: -0.53878 }}
    title={"Next"}
    description={"Next, Lincoln, UK. Unisex Store. Casual Wear."}
  />
              <Marker
        coordinate={{ latitude: 53.22781, longitude: -0.54106 }}
    title={"River Island"}
    description={"River Island, Lincoln, UK. Unisex Store. Casual Wear."}
  />
                <Marker
        coordinate={{ latitude: 53.22743, longitude: -0.53985 }}
    title={"Superdry"}
    description={"River Island, Lincoln, UK. Unisex Store. Casual Wear."}
  />

</MapView>
</MapViewContainer>


        <Body>
          <TagContainer>
          </TagContainer>
          <HeaderText>Displaying Results for Shirt Shops</HeaderText>
          <BodyText>
            Click on a marker for more information
          </BodyText>

          <Divide />
          <RowStyle>
            <View style={{ paddingLeft: '5%' }}>
              <RowStyle >

                <TagBody style={{ backgroundColor: colours.red }}>
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

export default ShirtMap;


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
  background: ${colours.red};
  height: 1px;
  margin: 10px 20px;
  align-items: center;
`
const MapViewContainer = styled.View`
  flex: 1;
  height: 55%;
  width: 100%;
  `