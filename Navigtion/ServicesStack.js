import { createStackNavigator } from "@react-navigation/stack";
import Service from "./Service";
import LeaveTracker from "../ServiceScreen/LeaveTracker";
import Tasks from "../ServiceScreen/Tasks";
import Travel from '../ServiceScreen/Travel'
import TimeTracker from "../ServiceScreen/TimeTracker";
import Attendence from "../ServiceScreen/Attendence";
import Files from "../ServiceScreen/Files";
import Organization from "../ServiceScreen/Organization";
import Announcement from "../ServiceScreen/Announcement";
import LMS from "../ServiceScreen/LMS";
import Hrletter from "../ServiceScreen/Hrletter";
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import AdminHomeScreen from "../Admin/AdminHomeScreen";
import AddEmplyes from "../Admin/AddEmplyes";
import EditEmployee from "../Admin/EditEmployee";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from "react";
const image9 = require('../assets/images/boss.png');

const stack = createStackNavigator();



export const ServicesStack=()=>{
    const navigate = useNavigation()
    const [profileImageUri, setProfileImageUri] = useState(null);

    useEffect(() => {
      const getProfileImageUri = async () => {
        try {
          const crn = await AsyncStorage.getItem('CRN');
          const uri = await AsyncStorage.getItem(`${crn}`);
          if (uri !== null) {
            setProfileImageUri(uri);
          }
        } catch (error) {
          console.error('Error retrieving profile image URI:', error);
        }
      };
  
      getProfileImageUri();
    }, []);
    return(
        //LeaveTracker,Tasks TimeTracker Attendence Files Organization Announcement LMS HrLeter Travel

        <stack.Navigator initialRouteName='Home'  >
         
            <stack.Screen options={{ headerTitle: "Service",headerLeft: () => (
        <TouchableOpacity onPress={()=>navigate.navigate("Profile")}>
      <View style={{ marginLeft: 10 }}>
      <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
          source={profileImageUri ? { uri: profileImageUri } : image9}
        />
      </View>
      </TouchableOpacity>
    ) }} name="ServiceScreen" component={Service}/>
            <stack.Screen options={{ headerTitle: "Leave Tracker" }} name="LeaveTracker" component={LeaveTracker} />
            <stack.Screen options={{ headerTitle: "Tasks" }} name="Tasks" component={Tasks} />
            <stack.Screen options={{ headerTitle: "TimeTracker" }} name="TimeTracker" component={TimeTracker} />
            <stack.Screen options={{ headerTitle: "Attendence" }} name="Attendence" component={Attendence} />
            <stack.Screen options={{ headerTitle: "Files" }} name="Files" component={Files} />
            <stack.Screen options={{ headerTitle: "Organizations" }} name="Organization" component={Organization} />
            <stack.Screen options={{ headerTitle: "Announcements" }} name="Announcement" component={Announcement} />
            <stack.Screen options={{ headerTitle: "L M S" }} name="LMS" component={LMS} />
            <stack.Screen options={{ headerTitle: "Hr Letter" }} name="HrLeter" component={Hrletter} />
            <stack.Screen options={{ headerTitle: "Travel " }} name="Travel" component={Travel} />
            <stack.Screen options={{ headerTitle: "Admin" }} name="AdminHome" component={AdminHomeScreen} />
            <stack.Screen options={{ headerTitle: "Add Emplyes " }} name="AddEmplye" component={AddEmplyes} />
            <stack.Screen options={{ headerTitle: "Edit Employee" }} name="EditEmploye" component={EditEmployee} />
        
            
        </stack.Navigator>
    
    )
}

