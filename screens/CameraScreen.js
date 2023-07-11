import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';
import styled from 'styled-components';
import colours from '../components/Colours';
import { Ionicons } from '@expo/vector-icons';

class CameraScreen extends Component {
  state = {
    hasPermission: null,
    type: Camera.Constants.Type.back,
    capturedImage: null,
  };

  async componentDidMount() {
    const { status } = await Camera.requestCameraPermissionsAsync();
    this.setState({ hasPermission: status === 'granted' });
  }

  handleCameraFlip = () => {
    this.setState({
      type:
        this.state.type === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back,
    });
  };

  handleCapture = async () => {
    if (this.cameraRef) {
      const photo = await this.cameraRef.takePictureAsync();
      this.setState({ capturedImage: photo.uri });
    }
  };

  render() {
    const { hasPermission, type, capturedImage } = this.state;
    const { navigate } = this.props.navigation;

    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.cameraContainer}>
          <Camera
            style={styles.camera}
            type={type}
            ref={(ref) => {
              this.cameraRef = ref;
            }}
          >
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={this.handleCameraFlip}>
                <Text style={styles.text}> Flip Camera </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={this.handleCapture}>
                <Text style={styles.text}> Capture </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
        {capturedImage && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: capturedImage }} style={styles.image} />
          </View>
        )}
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
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F3C583',
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  camera: {
    flex: 1,
    aspectRatio: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  button: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    marginTop: '10%',
  },
  image: {
    width: 300,
    height: 300,
  },
});

const NavigationBar = styled.View`
position: absolute;
bottom: 0;
width: 100%;
height: 10%;
background-color: white;
flex-direction: row;
justify-content: space-around;
align-items: center;
padding: 10px;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.1); `;


export default CameraScreen;
