import React, { useState } from 'react'
import { Text, View, Modal, TextInput, TouchableOpacity, Button ,StyleSheet} from 'react-native'

export default function DailyGoal({dailyGoal, createDailyGoal, setDailyGoal}) {

    const [modalVisible, setModalVisible] = useState(false)
    const [workoutType, setWorkoutType] = useState('')
    const [duration, setDuration] = useState('')
    const [distance, setDistance] = useState('')

    const handleSubmit = () => {
        createDailyGoal({workoutType, duration, distance})
        setModalVisible(!modalVisible)
    }

    return (
        <View style={styles.goalContainer}>
                <Modal animationType="slide" transparent={true} visible={modalVisible}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                
                            <Text style={styles.modalTitles}>Set Workout Type</Text>
                            <View style={styles.inputView}>
                                <TextInput 
                                    style={styles.textInput} 
                                    placeholder="Workout Type"
                                    onChangeText={workoutType => setWorkoutType(workoutType)}
                                />
                            </View>
                            <Text style={styles.modalTitles}>Set Time Goal (mins)</Text>
                            <View style={styles.inputView}>
                                <TextInput 
                                    style={styles.textInput} 
                                    placeholder="Workout Duration"
                                    onChangeText={duration => setDuration(duration)}
                                />
                            </View>
                            <Text style={styles.modalTitles}>Set Distance Goal (miles)</Text>
                            <View style={styles.inputView}>
                                <TextInput 
                                    style={styles.textInput} 
                                    placeholder="Workout Distance"
                                    onChangeText={distance => setDistance(distance)}
                                />
                            </View>
                            <TouchableOpacity
                                    style={[styles.setGoalButton, styles.buttonClose]}
                                    onPress={handleSubmit}
                            >
                            <Text style={styles.goalButtonText}>Set Daily Goal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <Text style={styles.headerText}>Daily Goal</Text>
                {dailyGoal.duration 
                    ? (
                        <View style={styles.goalCard}>
                            <Text style={styles.goalTextHeader}>Todays Goal:</Text>
                            <Text style={styles.goalText}>Workout Type: {dailyGoal.workoutType}</Text>
                            <Text style={styles.goalText}>Workout Duration: {dailyGoal.duration} mins</Text> 
                            <Text style={styles.goalText}>Workout Distance: {dailyGoal.distance} miles</Text>
                            <Text style={styles.goalText}>You can achieve it!</Text>
                           
                            <Button title="Reset Goal" onPress={() => setDailyGoal(!dailyGoal)}/>
                        </View>
                    ) 
                    : (
                        <TouchableOpacity
                        style={[styles.goalButton, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.plusButtonText}>+</Text>
                        </TouchableOpacity>
                    )
                    
                    // <Button title="Create a goal for today" onPress={() => setModalVisible(!modalVisible)}/>
                }
            </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        width: '80%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: '#d4ced6'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    inputView: {
        backgroundColor: "white",
        borderRadius: 30,
        width: "85%",
        height: 45,
        marginBottom: 20,
        margin: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },    
    textInput: {
        height: 50,
        width: 170,
        textAlign: 'center',
        flex: 1,
        padding: 10,
        // backgroundColor: '#d4ced6',
        borderRadius: 30,
        fontSize: 18
    },
    goalContainer: {
        flex: 1,
        height: 200,
        backgroundColor: "#b207ff",
        alignItems: "center",
        // justifyContent: "center",    
    },
    headerText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    goalButton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 50,
        width: 80
    },
    plusButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 50
    },
    goalCard: {
        width: '85%',
        height: 170,
        backgroundColor: 'orange',
        borderRadius: 8,
        margin: 10,
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
    goalText: {
        fontSize: 17,
        padding: 1,
        textAlign: 'center'
    },
    goalTextHeader:{
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 2,
        padding: 1,
        textAlign: 'center'
    },
    modalTitles: {
        padding: 2,
        fontSize: 20
    },
    setGoalButton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    goalButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        padding: 5,
        width: 170
    }
})