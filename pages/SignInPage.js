import React, {useState} from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'

export default function SignInPage(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handlePress = (event) => {
       let user = ({
           username, password
       })
       props.login(user)
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.inputView}
                    placeholder="Username"
                    onChangeText={username => setUsername(username)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.inputView}
                    placeholder="Password"
                    onChangeText={password => setPassword(password)}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={handlePress}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            {props.errors 
                ? <Text>{props.errors}</Text>
                : null
            }

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