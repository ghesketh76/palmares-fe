import React from 'react'
import {View, Text, SafeAreaView, Button, StyleSheet, TouchableOpacity} from 'react-native'

export default function Profile({logOut, user}) {
    return (
        <SafeAreaView style={styles.pageContainer}>
                <Text style={styles.activityHeader}>Profile</Text>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Username: {user.username}</Text>
                    <Text style={styles.cardText}>Name: {user.first_name} {user.last_name}</Text>
                    <Text style={styles.cardText}>Age: {user.age}</Text>
                    <Text style={styles.cardText}>Email: {user.email}</Text>
                </View>
                <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={logOut}
                    >
                    <Text style={styles.textStyle}>Log Out</Text>
                </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: '#b207ff',
        alignItems: 'center'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        margin: 20,
        width: '50%',
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
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
    },
    card: {
        width: '85%',
        height: 270,
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        marginTop: 50,
        padding: 5,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    cardText: {
        fontSize: 20,
        padding: 5,
        textAlign: 'center'
    },
})