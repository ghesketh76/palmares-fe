import React from 'react'
import {View, Text, SafeAreaView, Button} from 'react-native'

export default function Settings({logOut}) {
    return (
        <SafeAreaView>
            <View>
            
            <Button title="Logout" onPress={logOut}/>
            </View>
        </SafeAreaView>
    )
}
