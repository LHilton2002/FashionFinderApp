import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import colours from '../components/Colours';
import { Ionicons } from '@expo/vector-icons';

const USERS = [
  { id: 1, name: 'Deacon Baldwin', avatar: require('../assets/guy1.png') },
  { id: 2, name: 'Megan Ortega', avatar: require('../assets/girl1.png') },
  { id: 3, name: 'Lori Payne', avatar: require('../assets/girl2.png') },
  { id: 4, name: 'Edgar Bass', avatar: require('../assets/guy2.png') },
  { id: 5, name: 'Gabrielle Vaughn', avatar: require('../assets/girl3.png') },
];

const POSTS = [
  { id: 1, image: require('../assets/Socialhat.jpg'), text: 'Just bought this new hat! Check it out' },
  { id: 2, image: require('../assets/Sunnyclothes.jpg'), text: 'Chilling in the sun with my new clothes!' },
  { id: 3, image: require('../assets/Winterclothing.jpg'), text: 'This will keep me warm in winter' },
  { id: 4, image: require('../assets/Newshoes.jpg'), text: 'How cool are these new shoes I bought?!' },
  { id: 5, image: require('../assets/Newtrousers.jpg'), text: 'These new trousers are awesome. Well worth the money!!' },
];

export default class SocialPage extends Component {
  renderPostItem = ({ item }) => {

    const handleLikeAlert = () => {
      alert('You liked this post!');
    };

    return (
      <View style={styles.postItem}>
        <View style={styles.userItem}>
          <Image style={styles.avatar} source={USERS[item.id - 1].avatar} />
          <Text style={styles.username}>{USERS[item.id - 1].name}</Text>
        </View>
        <Image style={styles.postImage} source={item.image} />
        <Text style={styles.postText}>{item.text}</Text>
        <TouchableOpacity onPress={handleLikeAlert}>
          <Ionicons
            name="heart-outline"
            size={20}
            color="red"
          />
        </TouchableOpacity>
        <Text style={styles.likeText}> Tap heart to like post! </Text>
      </View>
    );
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Fashion Finder Social</Text>
        <FlatList
          data={POSTS}
          renderItem={this.renderPostItem}
          style={styles.postList}
        />

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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3C583',
    padding: 10,
  },
  userList: {
    marginTop: 10,
  },
  userItem: {
    alignItems: 'center',
    marginRight: 10,
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 0,
    paddingTop: 50,
    fontFamily: 'Avenir',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  username: {
    marginTop: 5,
  },
  postList: {
    marginTop: 30,
  },
  postItem: {
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  postImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  postText: {
    fontSize: 16,
  },
  likeText: {
    fontSize: 8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const NavigationBar = styled.View`
position: absolute;
bottom: 0;
width: 105%;
height: 10%;
background-color: ${colours.white};
flex-direction: row;
justify-content: space-around;
align-items: center;
padding: 10px;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.1); `;