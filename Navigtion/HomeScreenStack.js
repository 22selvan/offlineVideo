import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screen.js/HomeScreen";
import LeaveReport from "../Screen.js/LeaveReport";
import UpcomingHoliday from "../Component/UpcomingHoliday";
import ApplyLeave from "../Screen.js/ApplyLeave";
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
// import ShowMedicanList from "../Screen.js/ShowMedicanList";
import DiagnosisResult from "../Screen.js/DiagnosisResult";
const image9 = require('../assets/images/boss.png');

const stack = createStackNavigator();

const HomeScreenStack=()=>{
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

        <stack.Navigator initialRouteName='Home'  >
            <stack.Screen options={{ headerTitle: "Learning App",headerLeft: () => (
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
    ) }} name="HomeScreen" component={HomeScreen}/>
            <stack.Screen options={{ headerTitle: "Diagnosis Result" }} name="DiagnosisResult" component={DiagnosisResult} />
            {/* <stack.Screen options={{ headerTitle: "Upcoming Leave" }}  name="upcomingLeave" component={UpcomingHoliday} />
            <stack.Screen options={{ headerTitle: "Apply Leave" }}  name="ApplyLeave" component={ApplyLeave} /> */}
        </stack.Navigator>
    
    )
}


export default HomeScreenStack;