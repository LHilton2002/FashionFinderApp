import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, TouchableOpacity, Switch } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import colours from '../components/Colours';

class SettingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWifiEnabled: true,
      isDarkEnabled: false,
      isAccessibleEnabled: false,
    };
  }


  //functions for switches.
  handleToggleWifi = () => {
    this.setState({ isWifiEnabled: !this.state.isWifiEnabled });
  };

  handleToggleDark = () => {
    this.setState({ isDarkEnabled: !this.state.isDarkEnabled });
  };

  handleToggleAccessible = () => {
    this.setState({ isAccessibleEnabled: !this.state.isAccessibleEnabled });
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Appearance</Text>
            <View style={styles.option}>
              <Text style={styles.optionText}>Enable Wifi</Text> 
              <Switch
                value={this.state.isWifiEnabled}
                onValueChange={this.handleToggleWifi}
              />
            </View>
            <View style={styles.option}>
              <Text style={styles.optionText}>Dark Mode</Text>
              <Switch
                value={this.state.isDarkEnabled}
                onValueChange={this.handleToggleDark}
              />
            </View>
            <View style={styles.option}>
              <Text style={styles.optionText}>Accessibility Mode</Text>
              <Switch
                value={this.state.isAccessibleEnabled}
                onValueChange={this.handleToggleAccessible}
              />
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Account</Text>
            <TouchableOpacity style={styles.option}>
              <FeatherIcon name="user" size={24} color="#777" />
              <Text style={styles.optionText}>Edit profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <FeatherIcon name="lock" size={24} color="#777" />
              <Text style={styles.optionText}>Change password</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('Login')} style={styles.option}>
              <FeatherIcon name="log-out" size={24} color="#777" />
              <Text style={styles.optionText}>Log out</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Help</Text>
            <TouchableOpacity
              style={styles.option}
              onPress={() => navigate('Contact')}>
              <FeatherIcon name="help-circle" size={24} color="#777" />
              <Text style={styles.optionText}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.option}
              onPress={() => navigate('Bug')}>
              <FeatherIcon name="alert-circle" size={24} color="#777" />
              <Text style={styles.optionText}>Report a bug</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Language</Text>
            <TouchableOpacity style={styles.option}>
            <FeatherIcon name="globe" size={24} color="#777" />
              <Text style={styles.optionText}>English</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Privacy</Text>
              <TouchableOpacity style={styles.option}>
              <FeatherIcon name="lock" size={24} color="#777" />
                <Text style={styles.optionText}>Privacy Policy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option}>
              <FeatherIcon name="file-text" size={24} color="#777" />
                <Text style={styles.optionText}>Terms & Conditions</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.section}>
              <Text style={styles.sectionTitle}>About</Text>
              <TouchableOpacity style={styles.option}>
              <FeatherIcon name="info" size={24} color="#777" />
              <Text style={styles.optionText}>About us</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option}>
              <FeatherIcon name="repeat" size={24} color="#777" />
              <Text style={styles.optionText}>App version</Text>
              <Text style={styles.optionText}>1.0.0</Text>
            </TouchableOpacity>
          </View>

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
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3C583',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
  },
  optionText: {
    fontSize: 15,
    marginLeft: 10,
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



export default SettingsPage;
