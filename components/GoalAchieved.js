import React from 'react'
import { View, Text, Button } from 'react-native'

export default function GoalAchieved({setGoalCompared, goalAchieved}) {
    return (
        <View>
            {goalAchieved
            ? <Text>You crushed it! +100 pts</Text>
            : <Text>Dang you were so close, gotta work harder next time</Text>
            }
            
            <Button title="return to home" onPress={() => setGoalCompared(false)}/>
        </View>
    )
}
