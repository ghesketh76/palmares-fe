import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default function DailyCard({activity}) {

    // const duration = (activity.elapsed_time / 60).toFixed(2)
    // const distance = (activity.distance / 1609).toFixed(2)

    console.log(activity)

    return (
        // {activity === undefined
        // ?  ( 
        //     <View style={styles.card}>
        //         <Text>{activity.name}</Text>
        //         <Text style={styles.cardText}>Duration: {duration} mins</Text>
        //         <Text style={styles.cardText}>Type: {activity.type}</Text>
        //         <Text style={styles.cardText}>Distance: {distance} mi</Text>
        //         <Text style={styles.cardText}>Average HR: {activity.average_heartrate}</Text>
        //         {activity.average_watts ? <Text style={styles.cardText}>Average Power: {activity.average_watts} W</Text> : null}
        //     </View> 
        //     )
        // : (
            <View style={styles.card}>
                <Text>No Workouts Today yet!</Text>
            </View>
        //     )
        // }
    )
}

const styles = StyleSheet.create({
    card: {
        width: '40%',
        height: 100,
        backgroundColor: 'orange',
        borderRadius: 8,
        margin: 10,
        padding: 5,
        justifyContent: 'center'
    },
    cardText: {
        fontSize: 10,
    }
})