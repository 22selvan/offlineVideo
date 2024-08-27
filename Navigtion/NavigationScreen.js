

import { createStackNavigator } from '@react-navigation/stack';
import Login from "../Screen.js/Login";
import Registeration from "../Screen.js/Registeration";
import HomeScreen from "../Screen.js/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';




const stack = createStackNavigator();

const AuthuStack=()=>{
    return(
        <NavigationContainer>
        <stack.Navigator initialRouteName='Login' >
            <stack.Screen options={{ headerShown: false }} name="Login" component={Login}/>
            <stack.Screen options={{ headerShown: false }} name="Register" component={Registeration} />
        </stack.Navigator>
        </NavigationContainer>
    )
}


export default AuthuStack;
