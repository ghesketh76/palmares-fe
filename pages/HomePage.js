import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import StravaActivities from '../components/StravaActivities'
import StravaCard from '../components/StravaCard'
import DailyCard from '../components/DailyCard'



export default function HomePage(props) {

    const clientID = '63132'
    const clientSecret = '107826ea161d3bfec4aff8a06ddf63b83827153f'
    const refreshURL = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${props.refreshToken}&grant_type=refresh_token`
    const activityURL = 'https://www.strava.com/api/v3/athlete/activities?access_token='
    
    const [activities, setActivities] = useState([])
    const [dailyGoal, setDailyGoal] = useState({})
    const [todaysActivity, setTodaysActivity] = useState({})
    

    useEffect(() => {
        fetch(refreshURL, {
        method: 'POST'
        }).then(response => response.json())
        .then(result => getActivities(result.access_token))
    },[refreshURL])

    const getActivities = (access) => {
        fetch(`${activityURL}${access}`)
        .then(response => response.json())
        .then(data => {
            !data.errors && setActivities(data) 
            })
    }
    
   
    const makeCards = () => {
       return activities.map(activity => <StravaCard activity={activity} key={activity.id}/>)
    }

    const today = new Date()
    const dateToday = today.getFullYear()+'-'+(today.getMonth()+1).toString().padStart(2, "0")+'-'+today.getDate().toString().padStart(2, "0")
    
    const todayActivity = () => {
        const workout = activities.find(activity => activity.start_date_local.slice(0,10) === dateToday) 
        setTodaysActivity(workout)
    }

    // todayActivity()
    // Need to figure out how to run this, or do i put it on the daily card component?
    

    return (
        <View style={styles.homePageContainer}>
            <Button title="Logout" onPress={props.logOut}/>
            <View style={styles.goalContainer}>
                <Text>Daily Goal</Text>
            </View>
            <View>
                <Text>Todays Activity:</Text>
                <Button title="Get Todays Activity" onPress={todayActivity}/>
            </View>
            <Text>Past Activity</Text>
            <ScrollView horizontal={true} style={styles.activityContainer}>
                
                {makeCards()}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    goalContainer: {
        flex: 1,
        height: 200,
        backgroundColor: 'blue'
    },
    activityContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center'
    },
    homePageContainer: {
        flex: 1
    }
})