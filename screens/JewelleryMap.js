import React from 'react'
import { View, SafeAreaView, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native';
import colours from '../components/Colours';
import screenSize from '../components/ScreenSize';
import MapView, {Marker} from 'react-native-maps';


class JewelleryMap extends React.Component {
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
        coordinate={{ latitude: 53.22842, longitude: -0.54040 }}
    title={"Ernest Jones"}
    description={"Ernest Jones, Lincoln, UK. Jewellery Store."}
    pinColor='pink'
  />
        <Marker
        coordinate={{ latitude: 53.23654, longitude: -0.53836 }}
    title={"Arc Jewellables"}
    description={"Arc Jewellables, Lincoln, UK. Jewellery Store."}
    pinColor='pink'
  />
          <Marker
        coordinate={{ latitude: 53.22892, longitude: -0.54037 }}
    title={"H. Samuel"}
    description={"H. Samuel, Lincoln, UK. Jewellery Store."}
    pinColor='pink'
  />
            <Marker
        coordinate={{ latitude: 53.22935, longitude: -0.54037 }}
    title={"Warren James Jewellers"}
    description={"Warren James Jewellers, Lincoln, UK. Jewellery Store."}
    pinColor='pink'
  />
              <Marker
        coordinate={{ latitude: 53.22922, longitude: -0.54042 }}
    title={"Guildhall Jewellers Ltd"}
    description={"Guildhall Jewellers Ltd, Lincoln, UK. Jewellery Store."}
    pinColor='pink'
  />
                <Marker
        coordinate={{ latitude: 53.22744, longitude: -0.53864 }}
    title={"Smiths The Jewellers"}
    description={"Smiths The Jewellers, Lincoln, UK. Jewellery Store."}
    pinColor='pink'
  />


</MapView>
</MapViewContainer>


        <Body>
          <TagContainer>
          </TagContainer>
          <HeaderText>Displaying Results for Jewellery Shops</HeaderText>
          <BodyText>
            Click on a marker for more information
          </BodyText>

          <Divide />
          <RowStyle>
            <View style={{ paddingLeft: '5%' }}>
              <RowStyle >

                <TagBody style={{ backgroundColor: colours.pink }}>
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

export default JewelleryMap;


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
  font-size: 18px;
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
  background: ${colours.pink};
  height: 1px;
  margin: 10px 20px;
  align-items: center;
`
const MapViewContainer = styled.View`
  flex: 1;
  height: 55%;
  width: 100%;
  `