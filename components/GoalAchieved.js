import React from 'react'
import { View, Text, Button, Modal, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'

export default function GoalAchieved({setGoalCompared, goalAchieved}) {


   const image = {uri: 'https://i.redd.it/z57qrwt3nh001.png'}

    return (
        
                <View style={styles.container}>
                    <ImageBackground source={image} style={styles.image}>
                        <View style={styles.messageContainer}>
                            {goalAchieved
                            ? <Text style={styles.textStyle}>You crushed it! +100 pts</Text>
                            : <Text style={styles.textStyle2}>Dang you were so close, gotta work harder next time</Text>
                            }
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setGoalCompared(false)}
                                >
                                <Text style={styles.buttonTextStyle}>Return</Text>
                            </TouchableOpacity>
                            {/* <Button title="return to home" onPress={() => setGoalCompared(false)}/> */}
                        </View>
                    </ImageBackground>
                </View>

       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'black'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    textStyle: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 10,
        shadowColor: "#bfbdbf",
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    messageContainer: {
        alignItems: 'center'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        margin: 10,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    buttonTextStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
    },
    textStyle2: {
        color: 'white',
        textAlign: 'center',
        margin: 10,
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 10,
        shadowColor: "#bfbdbf",
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
})