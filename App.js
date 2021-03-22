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
  const [auhtToken, setAuthToken] = useState({})
  
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
          setAuthToken(data.token)  // is this the best way to do this? Secure store?
        }
      })
  }

  const signUp = (user) => {
    fetch(usersURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({user})
    })
      .then(response => response.json())
      .then(data => {
        if(data.errors){
          setErrors(data.errors)
        } else {
          AsyncStorage.setItem('token', data.token)
          setUser(data.user)
          setAuthToken(data.token)  // is this the best way to do this? Secure store?
        }
      })
  }

  const consolePress = () => {
    console.log('user', user)
    // console.log('token', AsyncStorage.getItem('token'))
    AsyncStorage.getItem('token')
      .then(token => console.log('async token' ,token))
    console.log('state token', auhtToken)
  }

  const logOut = () => {
    AsyncStorage.removeItem('token')
    setUser('')
    setAuthToken('')
  }

  return (
    <View style={styles.container}>
      <SignUpPage signUp={signUp}/>
      {/* <SignInPage login={login} errors={errors}/> */}
      <Button style={styles.consoleButton} onPress={consolePress}title="consolelog"/>
      <Button style={styles.consoleButton} onPress={logOut} title="logout"/>
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
  consoleButton: {
    padding: 100,
    margin: 100
  }
});
