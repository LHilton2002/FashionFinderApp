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
      duration: 800,
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
        navigate('Home', { username: this.state.username });
      });
    });
  }

  handleRegister = () => {
    const { navigate } = this.props.navigation;
    navigate('Register');
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Fashion Finder</Text>
        <Text style={styles.subtitle}>Login Page</Text>
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
        <View style={styles.buttonRow}>
          <Animated.View style={[styles.buttonContainer, { opacity: this.state.buttonAnimation }]}>
            <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </Animated.View>
          <TouchableOpacity style={styles.button} onPress={this.handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Arial',
    color: 'black',
  },
  subtitle: {
    fontSize: 34,
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
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  buttonContainer: {
    width: '45%',
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

