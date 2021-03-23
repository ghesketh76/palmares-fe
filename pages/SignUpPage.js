import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function SignUpPage(props) {  

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')


   

    const handleSignUp = () => {
        props.signUp({user: {username, password, first_name, last_name, email, age}})
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Create a New Account</Text>
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Username' 
                    // value={username} 
                    onChangeText={username => setUsername(username)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Password' 
                    // value={password} 
                    onChangeText={password => setPassword(password)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='First Name' 
                    // value={first_name} 
                    onChangeText={first_name => setFirstName(first_name)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Last Name' 
                    // value={last_name} 
                    onChangeText={last_name => setLastName(last_name)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Email' 
                    // value={email} 
                    onChangeText={email => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Age' 
                    // value={age} 
                    onChangeText={age => setAge(age)}
                />
            </View>
            {props.errors 
                ? <Text>{props.errors}</Text>
                : null
            }
            
            <TouchableOpacity style={styles.loginBtn} onPress={handleSignUp}>
                <Text style={styles.loginText}>Create a New Account</Text>
            </TouchableOpacity>
            <Button title="I already have an account" onPress={() => props.navigation.navigate('Sign In')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: "#b207ff",
        alignItems: "center",
        justifyContent: "center",
    },
    inputView: {
        backgroundColor: "white",
        borderRadius: 30,
        width: "80%",
        height: 45,
        marginBottom: 20,
     
        alignItems: "center",
    },    
    textInput: {
        height: 50,
        textAlign: 'center',
        flex: 1,
        padding: 10,
        // marginLeft: 20,
    },
    headerText: {
        color: 'white',
        marginBottom: 50,
        fontSize: 30,
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
    },


})