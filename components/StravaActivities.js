import React from 'react'
import { View, Text, ScrollView, StyleSheet } from  'react-native'
import StravaCard from './StravaCard'



export default function StravaActivities({activities}) {


    const makeCards = () => {
        return activities.map(activity => <StravaCard activity={activity} key={activity.id}/>)
     }

    return (
        <ScrollView horizontal={true} style={styles.activityContainer}>     
            {makeCards()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    activityContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center'
    },
})