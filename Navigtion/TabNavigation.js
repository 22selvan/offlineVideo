import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from './Profile';
import Service from './Service';
import Login from '../Screen.js/Login';
import { NavigationContainer } from "@react-navigation/native";
import HomeScreenStack from './HomeScreenStack';
import { ServicesStack } from './ServicesStack';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import Downloads from '../Screen.js/Downloads';
const image9 = require('../assets/images/boss.png');
const logOut = require('../assets/images/logout.png');



const Tab = createBottomTabNavigator(); 

const MyTabs =()=> {
  
    return (
      <NavigationContainer>
      <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }

          return <Ionicons name={iconName} size={23} color={color} />;
        },
      })}

      >
        <Tab.Screen name="downloaded" component={Downloads}  options={{ title:"Downloads",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-dashboard" size={size} color={color} />
          ),
          headerShown: true,
 
        }}/>
        
        <Tab.Screen name="Home" component={HomeScreenStack} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" options={{
           headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
          title:"Profile"
        }} component={Profile} />
      </Tab.Navigator>
      </NavigationContainer>
    );
  }
  export default MyTabs;


  
