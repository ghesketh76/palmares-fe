import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from  'react-native'
import StravaCard from './StravaCard'



export default function StravaActivities({activities}) {

    const [totalDistance, setTotalDistance] = useState('')
    const [totalTime, setTotalTime] = useState('')

    const makeCards = () => {
        return activities.map((activity, i) => <StravaCard activity={activity} key={i}/>)
     }

    return (
        <SafeAreaView style={styles.pageContainer}>
            <Text style={styles.activityHeader}>All Activities</Text>
            <ScrollView  style={styles.cardContainer}>     
                {makeCards()}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    activityContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
    },
    pageContainer: {
        backgroundColor: '#b207ff',
        alignItems: 'center'
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