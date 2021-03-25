import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default function StravaCard({activity}) {

    const duration = (activity.elapsed_time / 60).toFixed(0)
    const distance = (activity.distance / 1609).toFixed(1)
    const heartRate = activity.average_heartrate.toFixed(0)
    const power = activity.average_watts.toFixed(0)
    const date = activity.start_date_local.slice(0,10)

   

    return (
        <View style={styles.card}>
            <Text numberOfLines={1} style={styles.nameText}>{activity.name}</Text>
            <Text style={styles.cardText}>Duration: {duration} mins</Text>
            <Text style={styles.cardText}>Type: {activity.type}</Text>
            <Text style={styles.cardText}>Distance: {distance} mi</Text>
            <Text style={styles.cardText}>Average HR: {heartRate}</Text>
            {activity.average_watts ? <Text style={styles.cardText}>Average Power: {power} W</Text> : null}
            <Text style={styles.cardText}>Completed on: {date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 180,
        backgroundColor: 'orange',
        borderRadius: 8,
        marginHorizontal: 20,
        padding: 5,
        
    },
    cardText: {
        fontSize: 17,
        padding: 1,
        textAlign: 'center'
    },
    nameText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
})