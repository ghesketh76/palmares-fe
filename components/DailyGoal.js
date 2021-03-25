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
                
                            <Text>Set Workout Type</Text>
                            <View style={styles.inputView}>
                                <TextInput 
                                    style={styles.textInput} 
                                    placeholder="Workout Type"
                                    onChangeText={workoutType => setWorkoutType(workoutType)}
                                />
                            </View>
                            <Text>Set Workout Duration Goal</Text>
                            <View style={styles.inputView}>
                                <TextInput 
                                    style={styles.textInput} 
                                    placeholder="Workout Duration"
                                    onChangeText={duration => setDuration(duration)}
                                />
                            </View>
                            <Text>Set Workout Distance Goal</Text>
                            <View style={styles.inputView}>
                                <TextInput 
                                    style={styles.textInput} 
                                    placeholder="Workout Distance"
                                    onChangeText={distance => setDistance(distance)}
                                />
                            </View>
                            <TouchableOpacity
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={handleSubmit}
                            >
                            <Text style={styles.textStyle}>Set Daily Goal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <Text>Daily Goal</Text>
                {dailyGoal.duration 
                    ? (
                        <View>
                            <Text>Todays Goal:</Text>
                            <Text>Workout Type: {dailyGoal.workoutType}</Text>
                            <Text>Workout Duration: {dailyGoal.duration} mins</Text> 
                            <Text>Workout Distance: {dailyGoal.distance} miles</Text>
                            <Text>You can achieve it!</Text>
                            <Button title="Reset Goal" onPress={() => setDailyGoal(!dailyGoal)}/>
                        </View>
                    ) 
                    : <Button title="Create a goal for today" onPress={() => setModalVisible(!modalVisible)}/>
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
        backgroundColor: 'green'
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
        width: "80%",
        height: 45,
        marginBottom: 20,
        
        alignItems: "center",
    },    
    textInput: {
        height: 50,
        textAlign: 'center',
        flex: 1,
        padding: 10,
    },
    goalContainer: {
        flex: 1,
        height: 200,
        backgroundColor: '#2acaea'
    },
})