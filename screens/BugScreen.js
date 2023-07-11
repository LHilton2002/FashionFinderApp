import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Animated, SafeAreaView } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bugTitle: '',
      bugDescription: '',
      buttonAnimation: new Animated.Value(1),
    };
  }

  handleReport = () => {
        const { navigate } = this.props.navigation;
        navigate('Settings', { username: this.state.username });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Fashion Finder</Text>
        <Text style={styles.title}>Report A Bug</Text>
        <TextInput
          style={styles.input}
          placeholder="Bug Title"
          onChangeText={(bugTitle) => this.setState({bugTitle})}
          value={this.state.bugTitle}
        />
        <TextInput
          style={styles.input2}
          placeholder="Description of Bug"
          onChangeText={(bugDescription) => this.setState({bugDescription})}
          value={this.state.bugDescription}
          multiline={true}
          numberOfLines={4}
        />
        <Animated.View style={[styles.buttonContainer, { opacity: this.state.buttonAnimation }]}>
          <TouchableOpacity style={styles.button} onPress={this.handleReport}>
            <Text style={styles.buttonText}>Report Bug</Text>
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
    fontSize: 48,
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
    color: 'white',
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
  input2: {
    width: '90%',
    height: 200,
    padding: 10,
    borderWidth: 2,
    borderColor: '#fff',
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
