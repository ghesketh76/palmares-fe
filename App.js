import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import AsyncStorage from '@react-native-async-storage/async-storage';


const usersURL = 'https://palmares-be.herokuapp.com/users'
const loginURL = 'https://palmares-be.herokuapp.com/login'


export default function App() {

  const [errors, setErrors] = useState([])
  const [user, setUser] = useState({})
  
  const login = ({username, password}) => {
    fetch(loginURL, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({username, password})
    }).then(response => response.json())
      .then(data => {
        if(data.errors){
          setErrors(data.errors)
        } else {
          AsyncStorage.setItem('token', data.token)
          setUser(data.user)
        }
      })
  }

  const consolePress = () => {
    console.log('user', user)
    console.log('token', AsyncStorage.getItem('token'))
  }

  return (
    <View style={styles.container}>
      {/* <SignUpPage /> */}
      <SignInPage login={login} errors={errors}/>
      <Button onPress={consolePress}title="consolelog"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
