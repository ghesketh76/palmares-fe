import React from 'react'
import { View, Text } from  'react-native'
import StravaCard from './StravaCard'



export default function StravaActivities({activities}) {
 
    const makeCard = () =>  {
       return activities.map(activity => <StravaCard key={activity.id} activity={activity}/>)    
    }

    console.log(activities)

    return (
        <View>
            {/* {makeCard()} */}
        </View>
    )
}
