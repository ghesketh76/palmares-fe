import React, {useState, useEffect} from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import BoardItem from '../components/BoardItem'

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

    const makeLeaderBoardList = () => {
        return sortedScores.map((score, i) => <BoardItem score={score} listNum={i + 1} key={i + 1}/>)
    }

    return (
        <SafeAreaView style={styles.pageContainer}>
                <Text style={styles.activityHeader}>Leaderboard</Text>
            <View style={styles.boardContainer}>
                <ScrollView style={styles.listContainer}>
                {makeLeaderBoardList()}
                </ScrollView>
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
        color: '#f2f2f2',
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    listContainer: {
        paddingTop: 20,

    },
    boardContainer: {
        backgroundColor: 'white',
        width: '90%',
        height: '80%',
        // backgroundColor: '#f2f2f2',
        borderRadius: 8,
        marginHorizontal: 20,
        padding: 5,
        alignItems: 'center',
        margin: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    }
})