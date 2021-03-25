import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


export default function DailyCard({activities}) {

    const [todaysActivity, setTodaysActivity] = useState({})

    const today = new Date()
    const dateToday = today.getFullYear()+'-'+(today.getMonth()+1).toString().padStart(2, "0")+'-'+today.getDate().toString().padStart(2, "0")
    
    
      const getToday = () => {
            const workout = activities.find(activity => activity.start_date_local.slice(0,10) === '2021-03-24') 
            setTodaysActivity(workout)
        }
    
    
    

    if(todaysActivity.id){
        
        const duration = (todaysActivity.elapsed_time / 60).toFixed(0)
        const distance = (todaysActivity.distance / 1609).toFixed(1)
        const heartRate = todaysActivity.average_heartrate.toFixed(0)
        const power = todaysActivity.average_watts.toFixed(0)
        const date = todaysActivity.start_date_local.slice(0,10)
    
       return(
        <View style={styles.card}>
            <Text numberOfLines={1} style={styles.nameText}>{todaysActivity.name}</Text>
            <Text style={styles.cardText}>Duration: {duration} mins</Text>
            <Text style={styles.cardText}>Type: {todaysActivity.type}</Text>
            <Text style={styles.cardText}>Distance: {distance} mi</Text>
            <Text style={styles.cardText}>Average HR: {heartRate}</Text>
            {todaysActivity.average_watts ? <Text style={styles.cardText}>Average Power: {power} W</Text> : null}
            <Text style={styles.cardText}>Completed on: {date}</Text>
        </View> 
       )
   } else{
       return (
        <View style={styles.card}>
            <Text>No Workouts Today yet!</Text>
            <Button title="Refresh" onPress={getToday}/>
        </View>
       )
   }
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