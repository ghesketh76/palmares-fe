import  React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './HomePage';
import StravaActivities from '../components/StravaActivities';
import Profile from './Profile';
import Leaderboard from './Leaderboard';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabContainer(props) {

  const clientID = '63132'
  const clientSecret = '107826ea161d3bfec4aff8a06ddf63b83827153f'
  const refreshURL = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${props.refreshToken}&grant_type=refresh_token`
  const activityURL = 'https://www.strava.com/api/v3/athlete/activities?access_token='

  const scoresURL = 'https://palmares-be.herokuapp.com/non_user_scores'

  const [activities, setActivities] = useState([])
  const [allScores, setAllScores] = useState([])
  const [leaderboardScores, setLeaderboardScores] = useState([])

  useEffect(() => {
    fetch(refreshURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    }
    }).then(response => response.json())
      .then(result => getActivities(result.access_token))


  },[refreshURL])

  useEffect(() => {
    
    fetch(scoresURL, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${props.authToken}`,
        'Content-type': 'application/json'
      }
    }).then(response => response.json())
      .then(scores => setAllScores(scores))
  },[activities])

  useEffect(() => {
    setLeaderboardScores([...allScores, {...props.userScore, user: props.user}])
  }, [allScores])

  const getActivities = (access) => {
      fetch(`${activityURL}${access}`)
      .then(response => response.json())
      .then(data => {
          !data.errors && setActivities(data) 
          })
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home-outline'               
            } else if (route.name === 'Profile') {
              iconName = 'settings-outline' 
            } else if (route.name == 'Activities'){
              iconName =  'bicycle-outline'
            } else if (route.name == 'Leaderboard'){
              iconName = 'list-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home">
            {() => <HomePage  refreshToken={props.refreshToken} user={props.user} activities={activities}/>}
        </Tab.Screen>
        <Tab.Screen name="Activities">
            {() => <StravaActivities  refreshToken={props.refreshToken} user={props.user} activities={activities}/>}
        </Tab.Screen>
        <Tab.Screen name="Leaderboard">
            {() => <Leaderboard user={props.user} leaderboardScores={leaderboardScores}/>}
        </Tab.Screen>
        <Tab.Screen name="Profile">
            {() => <Profile logOut={props.logOut} refreshToken={props.refreshToken} user={props.user}/>}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}