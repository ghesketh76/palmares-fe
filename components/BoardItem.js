import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function BoardItem({listNum, score}) {
    return (
        <View style={{flexDirection: 'row', 
                      justifyContent: 'space-between', 
                      backgroundColor: listNum % 2 == 0 ? '#d9d7d7' : 'white',
                      borderRadius: 20,
                      padding: 5,
                      paddingLeft: 20,
                      paddingRight: 20
                      }}>
            <Text style={styles.listText}>{listNum}.   {score.user.first_name}</Text>
            <Text style={styles.scoreText}>{score.score}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listText: {
        fontSize: 30,
        color: 'black',
        paddingRight: 90,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    scoreText: {
        textAlign: 'right',
        fontSize: 30,
        color: 'black',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    }
})