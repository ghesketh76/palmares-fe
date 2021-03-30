import  React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './HomePage';
import StravaActivities from '../components/StravaActivities';

const Tab = createBottomTabNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen name="Home" component={HomePage} /> */}
        <Tab.Screen name="Home">
            {() => <HomePage logOut={props.logOut} refreshToken={props.refreshToken} user={props.user}/>}
        </Tab.Screen>
        <Tab.Screen name="Activities" component={StravaActivities} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}