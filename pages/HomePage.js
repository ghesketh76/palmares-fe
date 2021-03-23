import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import StravaActivities from '../components/StravaActivities'



export default function HomePage(props) {

    const clientID = '63132'
    const clientSecret = '107826ea161d3bfec4aff8a06ddf63b83827153f'
    const refreshURL = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${props.refreshToken}&grant_type=refresh_token`
    const activityURL = 'https://www.strava.com/api/v3/athlete/activities?access_token='
    
    const [activities, setActivities] = useState([])

    useEffect(() => {
        fetch(refreshURL, {
        method: 'POST'
        }).then(response => response.json())
        .then(result => getActivities(result.access_token))
    }, [refreshURL])

    const getActivities = (access) => {
        fetch(`${activityURL}${access}`)
        .then(response => response.json())
        .then(data => setActivities(data))
    }
    
    
    const handlePress = () => {
        console.log(props.refreshToken)
    }

    const handleLogout = () => {
        props.logOut()
    }

    return (
        <View>
            <View>
                <Text style={styles.goalContainer}>Daily Goal</Text>
            </View>
            <StravaActivities />
        </View>
    )
}

const styles = StyleSheet.create({
    goalContainer: {
        backgroundColor: 'blue'
    }
})