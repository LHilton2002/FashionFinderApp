import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

export default class ContactUs extends Component {
  handlePress = () => {
    const { navigate } = this.props.navigation;
    navigate('Settings');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Contact Us!</Text>
        <Text style={styles.text}>Email: contactus@fashionfinder.com</Text>
        <Text style={styles.text}>Phone number: 00000 000 000</Text>
        <TouchableOpacity style={styles.button} onPress={this.handlePress}>
          <Text style={styles.buttonText}>Return to Settings</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3C583',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Arial',
    color: 'black',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    fontFamily: 'Arial',
    color: 'red',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginTop: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});