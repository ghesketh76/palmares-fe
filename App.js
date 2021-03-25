
import React, { useState, useEffect } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomePage from './pages/HomePage';



const usersURL = 'https://palmares-be.herokuapp.com/users'
const loginURL = 'https://palmares-be.herokuapp.com/login'
const profileURL = 'https://palmares-be.herokuapp.com/profile'

export default function App() {

  const [errors, setErrors] = useState([])
  const [authToken, setAuthToken] = useState('')
  const [refreshToken, setRefreshToken] = useState('')
  const [user, setUser] = useState({})
  const [loginToggle, setLoginToggle] = useState(true)
  
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
  
  const signUp = () => {
    fetch(usersURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({user: {username, password, first_name, last_name, email, age}})
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
        }
      })
  }

  const logOut = () => {
    AsyncStorage.removeItem('token')
    setUser('')
    setRefreshToken('')
  }


   if(user.id){
    return <HomePage logOut={logOut} refreshToken={refreshToken}/>
   } else if (loginToggle){
     return <SignInPage login={login} errors={errors} setLoginToggle={setLoginToggle}/>
   } else {
      return <SignUpPage signUp={signUp} errors={errors} setLoginToggle={setLoginToggle}/>
   }
  

    // <NavigationContainer>
    //   <Stack.Navigator>
    //   {user.id
    //     ? (<Stack.Screen name="HomePage">
    //           {() => <HomePage logOut={logOut} refreshToken={refreshToken}/>}
    //         </Stack.Screen>)
    //     : (<> 
    //       <Stack.Screen name="Sign In">
    //         {() => <SignInPage login={login} errors={errors}/>}
    //       </Stack.Screen>
    //       <Stack.Screen name="Create a New Account">
    //         {() => <SignUpPage signUp={signUp} errors={errors}/>}
    //       </Stack.Screen> 
    //       </>)
    //   }
    //   </Stack.Navigator>
    // </NavigationContainer>
  // );
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
