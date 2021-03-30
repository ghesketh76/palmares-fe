import  React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './HomePage';
import StravaActivities from '../components/StravaActivities';
import Settings from './settings';

const Tab = createBottomTabNavigator();

export default function TabContainer(props) {

  const clientID = '63132'
  const clientSecret = '107826ea161d3bfec4aff8a06ddf63b83827153f'
  const refreshURL = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${props.refreshToken}&grant_type=refresh_token`
  const activityURL = 'https://www.strava.com/api/v3/athlete/activities?access_token='

  const [activities, setActivities] = useState([])

  useEffect(() => {
    fetch(refreshURL, {
    method: 'POST'
    }).then(response => response.json())
      .then(result => getActivities(result.access_token))
  },[refreshURL])


  const getActivities = (access) => {
      fetch(`${activityURL}${access}`)
      .then(response => response.json())
      .then(data => {
          !data.errors && setActivities(data) 
          })
  }


  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home">
            {() => <HomePage logOut={props.logOut} refreshToken={props.refreshToken} user={props.user} activities={activities}/>}
        </Tab.Screen>
        <Tab.Screen name="Activities">
            {() => <StravaActivities logOut={props.logOut} refreshToken={props.refreshToken} user={props.user} activities={activities}/>}
        </Tab.Screen>
        <Tab.Screen name="Settings">
            {() => <Settings logOut={props.logOut} refreshToken={props.refreshToken} user={props.user}/>}
        </Tab.Screen>
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}