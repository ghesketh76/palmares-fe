
import React, { useState, useEffect } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomePage from './pages/HomePage';
import TabContainer from './pages/TabContainer'
import { useReducer } from 'react';



const usersURL = 'https://palmares-be.herokuapp.com/users'
const loginURL = 'https://palmares-be.herokuapp.com/login'
const profileURL = 'https://palmares-be.herokuapp.com/profile'
const scoresURL = 'https://palmares-be.herokuapp.com/non_user_scores'
export default function App() {

  const [errors, setErrors] = useState([])
  const [authToken, setAuthToken] = useState('')
  const [refreshToken, setRefreshToken] = useState('')
  const [user, setUser] = useState({})
  const [loginToggle, setLoginToggle] = useState(true)
  const [userScore, setUserScore] = useState({})
  const [allScores, setAllScores] = useState([])
  
  const getData = async () => {
    try{
      const value = await AsyncStorage.getItem('token')
      if(value !== null){
        authorizeUser(value)
      }
    } catch(e){
      console.log(e)
    }
  }

  const authorizeUser = (token) => {
    fetch(profileURL, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then(response => response.json())
      .then(data => {
        setUser(data.user)
        setRefreshToken(data.refresh_token.refresh_token)
      })
      
  }

  useEffect(() => {
    getData()
  },[])

  // useEffect(() => {
  //   console.log(authToken)
  //   if(authToken){

  //     fetch(scoresURL, {
  //       method: 'GET',
  //       headers: {
  //         "Authorization": `Bearer ${authToken}`,
  //         'Content-type': 'application/json'
  //       }
  //     }).then(response => response.json())
  //       .then(scores => setAllScores(scores))
  //       .catch(console.error)
  //   }
  // },[authToken])
  
  const signUp = (newUser) => {
    fetch(usersURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({user: newUser})
    })
      .then(response => response.json())
      .then(data => {
        if(data.errors){
            setErrors(data.errors)
        } else {
          AsyncStorage.setItem('token', data.token)
          setAuthToken(data.token)
          setUser(data.user)
      }
    })
  }

  const login = (user) => {
    fetch(loginURL, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => response.json())
      .then(data => {
        if(data.errors){
          setErrors(data.errors)
        } else {
          AsyncStorage.setItem('token', data.token)
          setUser(data.user)
          setAuthToken(data.token)
          setRefreshToken(data.refresh_token.refresh_token)
          setUserScore(data.score)
        }
      })
  }

  const logOut = () => {
    AsyncStorage.removeItem('token')
    setUser('')
    setRefreshToken('')
  }


   if(user){
    return <TabContainer logOut={logOut} refreshToken={refreshToken} user={user} authToken={authToken} userScore={userScore}/>
   } else if (loginToggle){
     return <SignInPage login={login} errors={errors} setLoginToggle={setLoginToggle}/>
   } else {
      return <SignUpPage signUp={signUp} errors={errors} setLoginToggle={setLoginToggle}/>
   }
  

  
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
