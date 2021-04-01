import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import DailyCard from '../components/DailyCard'
import DailyGoal from '../components/DailyGoal'
import GoalAchieved from '../components/GoalAchieved'


export default function HomePage({activities, user, updateScore, userScore}) {

    const [dailyGoal, setDailyGoal] = useState({})
    const [goalCompared, setGoalCompared] = useState(false)
    const [postedActivity, setPostedActivity] = useState({})
    const [goalAchieved, setGoalAchieved] = useState(false)


    const createDailyGoal = (goal) => {
        setDailyGoal(goal)
    }

    const postActivity = (workout) => {
        setPostedActivity(workout)
    }

    useEffect(() => {
        if(parseInt(dailyGoal.distance) <= (postedActivity.distance / 1609) || parseInt(dailyGoal.duration) <= (postedActivity.elapsed_time / 60)){
            handleToggle()
        } else { setGoalCompared(true) }
    }, [postedActivity])

    const handleToggle = () => {
        setGoalCompared(true)
        setGoalAchieved(true)
        handleUpdate()
    }

    const handleUpdate = () => {
        let newScore = Object.assign({}, userScore)
        newScore.score = userScore.score + 100 
        updateScore(newScore)
    }
 
    return (
        <View style={styles.homePageContainer}>   
            { goalCompared  && postedActivity.distance          
            ? <GoalAchieved setGoalCompared={setGoalCompared} goalAchieved={goalAchieved} setPostedActivity={setPostedActivity}/>
            : (
                <SafeAreaView style={styles.goalContainer}>
                    <DailyGoal  dailyGoal={dailyGoal} createDailyGoal={createDailyGoal} setDailyGoal={setDailyGoal}/>
                    <View style={styles.dailyCard}>
                        <Text style={styles.activityHeader}>Today's Activity</Text>
                            <DailyCard activities={activities} postActivity={postActivity}/>  
                    </View>
                </SafeAreaView>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    homePageContainer: {
        flex: 1,
        backgroundColor: "#b207ff"
    },
    goalContainer: {
        flex: 1,
        backgroundColor: "#61068a",
        marginTop: 50
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