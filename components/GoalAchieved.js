import React from 'react'
import { View, Text, Button, Modal, StyleSheet, ImageBackground } from 'react-native'

export default function GoalAchieved({setGoalCompared, goalAchieved}) {


   const image = {uri: 'https://i.redd.it/z57qrwt3nh001.png'}

    return (
        
                <View style={styles.container}>
                    <ImageBackground source={image} style={styles.image}>
                        {goalAchieved
                        ? <Text style={styles.textStyle}>You crushed it! +100 pts</Text>
                        : <Text style={styles.textStyle}>Dang you were so close, gotta work harder next time</Text>
                        }
                        
                        <Button title="return to home" onPress={() => setGoalCompared(false)}/>
                    </ImageBackground>
                </View>

       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    textStyle: {
        color: 'white'
    }
})