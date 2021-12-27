import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile, ChannelList } from '../screens';

const Tab = createBottomTabNavigator();

const MainTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Channel List" 
                component={ChannelList} 
                options={{headerShown:false}}
            />
            <Tab.Screen name="Profile" component={Profile}  options={{headerShown:false}}/>
        </Tab.Navigator>
    );
};

export default MainTab;