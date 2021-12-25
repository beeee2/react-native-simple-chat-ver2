import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';



const Stack = createStackNavigator();

const AuthStack = () => {
    const theme = useContext(ThemeContext);
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerTitleAlign:'center',
                cardStyle:{backgroundColor:theme.backgroundColor},
            }}
        >
            <Stack.Screen 
                name="Login" 
                component={Login} 
                options={{ headerShwon : false}}
            />
            <Stack.Screen name="Signup" component={Signup}/>
        </Stack.Navigator>
    );
};

export default AuthStack;