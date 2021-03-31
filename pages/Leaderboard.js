import React, {useState, useEffect} from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'

export default function Leaderboard({leaderboardScores}) {

    const [sortedScores, setSortedScores] = useState([])

   const compare = (a,b) => {
        const scoreA = a.score
        const scoreB = b.score

        let comparison = 0
        if(scoreA > scoreB){
            comparison = -1
        } else if (scoreA < scoreB){
            comparison = 1
        }
        return comparison
   }

    useEffect(() => {
        const sorting = leaderboardScores.sort(compare)
        setSortedScores(sorting)
    }, [leaderboardScores])

    return (
        <SafeAreaView style={styles.pageContainer}>
            <Text style={styles.activityHeader}>Leaderboard</Text>
            <View>
               {/* {
                   leaderboardScores.map((l, i) => (
                       <ListItem key={i} bottomDivider style={}>
                           <ListItem.Content>
                               <ListItem.Title>{l.user.username}</ListItem.Title>
                               <ListItem.Subtitle>{l.score}</ListItem.Subtitle>
                           </ListItem.Content>
                       </ListItem>
                   ))
               } */}
               
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
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