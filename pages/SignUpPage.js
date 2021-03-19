import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Text } from 'react-native'



export default function SignUpPage() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')

    const handlePress = () => {
        console.log({username, password})
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
            <Button title="Create a new Account" onPress={handlePress}/>

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
    }

})