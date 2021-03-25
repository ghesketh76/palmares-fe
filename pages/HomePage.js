import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import StravaActivities from '../components/StravaActivities'
import DailyCard from '../components/DailyCard'
import DailyGoal from '../components/DailyGoal'




export default function HomePage(props) {

    const clientID = '63132'
    const clientSecret = '107826ea161d3bfec4aff8a06ddf63b83827153f'
    const refreshURL = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${props.refreshToken}&grant_type=refresh_token`
    const activityURL = 'https://www.strava.com/api/v3/athlete/activities?access_token='
    
    const [activities, setActivities] = useState([])
    const [dailyGoal, setDailyGoal] = useState({})
    const [goalAchieved, setGoalAchieved] = useState(false)

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

    const createDailyGoal = (goal) => {
        setDailyGoal(goal)
    }

    

    return (
        <View style={styles.homePageContainer}>
            <Button title="Logout" onPress={props.logOut}/>
            <DailyGoal dailyGoal={dailyGoal} createDailyGoal={createDailyGoal}/>
            <View>
                <Text>Todays Activity:</Text>
                <DailyCard activities={activities}/>
                
            </View>
            <Text>Past Activity</Text>
            <StravaActivities activities={activities}/>
        </View>
    )
}

const styles = StyleSheet.create({
    homePageContainer: {
        flex: 1
    },

})