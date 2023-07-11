import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Animated, Easing, SafeAreaView } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      buttonAnimation: new Animated.Value(1),
    };
  }

  handleLogin = () => {
    Animated.timing(this.state.buttonAnimation, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {

      Animated.timing(this.state.buttonAnimation, {
        toValue: 1,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(() => {
        const { navigate } = this.props.navigation;
        navigate('Login', { username: this.state.username });
      });
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Fashion Finder</Text>
        <Text style={styles.subtitle}>Register Account Page</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Animated.View style={[styles.buttonContainer, { opacity: this.state.buttonAnimation }]}>
          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <Text style={styles.buttonText}>Register Account</Text>
          </TouchableOpacity>
        </Animated.View>
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
  input: {
    width: '90%',
    height: 50,
    padding: 10,
    borderWidth: 2,
    borderColor: 'white',
    marginBottom: 20,
    borderRadius: 10,
    color: 'black',
    fontSize: 16,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});