import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native'


import StravaActivities from '../components/StravaActivities'
import DailyCard from '../components/DailyCard'
import DailyGoal from '../components/DailyGoal'
import GoalAchieved from '../components/GoalAchieved'





export default function HomePage({activities, user, logOut}) {

    const [dailyGoal, setDailyGoal] = useState({})
    const [goalCompared, setGoalCompared] = useState(false)
    const [postedActivity, setPostedActivity] = useState({})
    const [goalAchieved, setGoalAchieved] = useState(false)


    const createDailyGoal = (goal) => {
        setDailyGoal(goal)
    }

    const postActivity = (workout) => {
        setPostedActivity(workout)
        // if(parseInt(dailyGoal.distance) <= (postedActivity.distance / 1609) || parseInt(dailyGoal.duration) <= (postedActivity.elapsed_time / 60)){
        //     handleToggle()
        // } else { setGoalCompared(true) }
    }

    useEffect(() => {
        if(parseInt(dailyGoal.distance) <= (postedActivity.distance / 1609) || parseInt(dailyGoal.duration) <= (postedActivity.elapsed_time / 60)){
            handleToggle()
        } else { setGoalCompared(true) }
    }, [postedActivity])

    const handleToggle = () => {
        setGoalCompared(true)
        setGoalAchieved(true)
    }

    

    return (
        <SafeAreaView style={styles.homePageContainer}>
            {/* <Button title="Logout" onPress={logOut}/> */}
            
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