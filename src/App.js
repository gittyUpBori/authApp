import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBKbtwzGBjGDWy2lXtgsaog9rQBUwFae6w',
    authDomain: 'authentication-8eca0.firebaseapp.com',
    databaseURL: 'https://authentication-8eca0.firebaseio.com',
    storageBucket: 'authentication-8eca0.appspot.com',
    messagingSenderId: '324930337087'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
