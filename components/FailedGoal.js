import React from 'react'
import { View, Text, Button } from 'react-native'

export default function FailedGoal({setGoalAchieved}) {
    return (
        <View>
            <Text>You crushed it! +100 pts</Text>
            <Button title="return to home" onPress={() => setGoalAchieved(false)}/>
        </View>
    )
}