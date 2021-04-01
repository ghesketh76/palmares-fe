import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function BoardItem({listNum, score}) {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.listText}>{listNum}.   {score.user.first_name}</Text>
            <Text style={styles.scoreText}>{score.score}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        // backgroundColor: '#b207ff',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listText: {
        // backgroundColor: '#b207ff',
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