import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Channel, ChannelCreation } from '../screens';

const Stack = createStackNavigator();

const MainStack = () => {
    const theme = useContext(ThemeContext);

    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign : 'center',
                headerTintColor : theme.headerTintColor,
                cardStyle : { backgroundColor : theme.backgroundColor },
                headerBackTitleVisible : false,
            }}
        >
            <Stack.Screen name="channel Creation" component={ChannelCreation} />
            <Stack.Screen name="Channel" component={Channel} />
        </Stack.Navigator>
    );
};

export default MainStack;