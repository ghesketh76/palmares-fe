import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'


export default function DailyCard({activities, postActivity}) {

    const [todaysActivity, setTodaysActivity] = useState({})

    const today = new Date()
    const dateToday = today.getFullYear()+'-'+(today.getMonth()+1).toString().padStart(2, "0")+'-'+today.getDate().toString().padStart(2, "0")
    
    
      const getToday = () => {
            const workout = activities.find(activity => activity.start_date_local.slice(0,10) === dateToday) 
            workout ? setTodaysActivity(workout) : null
        }
    
    const handleSubmit = () => {
        postActivity(todaysActivity)
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
            <TouchableOpacity
                        style={[styles.button, styles.buttonClose]}
                        onPress={handleSubmit}
                        >
                            <Text style={styles.goalButtonText}>Submit</Text>
            </TouchableOpacity>
            {/* <Button title="Submit this workout" onPress={handleSubmit}/> */}
        </View> 
       )
   } else{
       return (
        <View style={styles.card}>
            <Text style={styles.promptText}>No Workouts Today yet!</Text>
            <TouchableOpacity
                        style={[styles.button, styles.buttonClose]}
                        onPress={getToday}
                        >
                            <Text style={styles.goalButtonText}>Check for Activity</Text>
            </TouchableOpacity>
            {/* <Button title="Refresh" onPress={getToday}/> */}
        </View>
       )
   }
}

const styles = StyleSheet.create({
    card: {
        width: '85%',
        height: 270,
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        marginTop: 50,
        padding: 5,
        justifyContent: 'center',
        
    },
    cardText: {
        fontSize: 17,
        padding: 2,
        paddingLeft: 15,
        textAlign: 'left'
    },
    nameText: {
        textAlign: 'center',
        fontSize: 20,
        padding: 2,
        paddingBottom: 10,
        fontWeight: 'bold'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        marginTop: 20,
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
    goalButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
    },
    promptText: {
        textAlign: 'center',
        fontSize: 30
    }
})