import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StravaActivities from '../components/StravaActivities'
import DailyCard from '../components/DailyCard'
import DailyGoal from '../components/DailyGoal'
import GoalAchieved from '../components/GoalAchieved'


const Tab = createBottomTabNavigator()


export default function HomePage(props) {

    const clientID = '63132'
    const clientSecret = '107826ea161d3bfec4aff8a06ddf63b83827153f'
    const refreshURL = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${props.refreshToken}&grant_type=refresh_token`
    const activityURL = 'https://www.strava.com/api/v3/athlete/activities?access_token='
    
    const [activities, setActivities] = useState([])
    const [dailyGoal, setDailyGoal] = useState({})
    const [goalCompared, setGoalCompared] = useState(false)
    const [postedActivity, setPostedActivity] = useState({})
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

    const postActivity = (workout) => {
        setPostedActivity(workout)
        if(parseInt(dailyGoal.distance) <= (postedActivity.distance / 1609) || parseInt(dailyGoal.duration) <= (postedActivity.elapsed_time / 60)){
            setGoalAchieved(true)
            
            handleAchievment()
        } else { setGoalCompared(true) }
    }

    const handleToggle = () => {
        setGoalAchieved(true)
        handleAchievment()
    }

    const handleAchievment = () => {
        setGoalCompared(true)
    }

    return (
        <SafeAreaView style={styles.homePageContainer}>
            <Button title="Logout" onPress={props.logOut}/>
            
            { goalCompared            
            ? <GoalAchieved setGoalCompared={setGoalCompared} goalAchieved={goalAchieved} />
            : (
                <View style={styles.goalContainer}>
                    <DailyGoal  dailyGoal={dailyGoal} createDailyGoal={createDailyGoal} setDailyGoal={setDailyGoal}/>
                    <View style={styles.dailyCard}>
                        <Text style={styles.activityHeader}>Today's Activity</Text>
                            <DailyCard activities={activities} postActivity={postActivity}/>  
                    </View>
                    {/* <Text>Past Activity</Text> */}
                    {/* <StravaActivities activities={activities}/> */}
                </View>
            )
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    homePageContainer: {
        flex: 1
    },
    goalContainer: {
        flex: 1,
        backgroundColor: "#61068a"
    },
    dailyCard: {
        flex: 1.25,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    activityHeader: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    }

})