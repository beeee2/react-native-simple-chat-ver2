import React, {useContext, useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile, ChannelList } from '../screens';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components/native';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({ focused, name }) => {
    const theme = useContext(ThemeContext);
    return (
        <MaterialIcons
            name={name}
            size={26}
            color={focused ? theme.tabActiveColor : theme.tabInactiveColor}
        />
    );
};

const MainTab = ({ navigation, route}) => {
    const theme = useContext(ThemeContext);

    useEffect(() => {
        const titles = route.state?.routeNames || ['Channels'];
        const index = route.state?.index || 0;
        navigation.setOptions({ 
            headerTitle: titles[index], 
            headerRight : () => 
                index === 0 && (
                    <MaterialIcons
                        name="add"
                        size={26}
                        style={{ margin : 10 }}
                        opPress={() => navigation.navigate('Channel Creation')}
                        />
                ),
        });
    }, [route]);

    return (
        <Tab.Navigator
            TabBarOptions={{
                activeTintColor : theme.tabActiveColor,
                tabInactiveColor : theme.tabInactiveColor,
            }}
        >
            <Tab.Screen 
                name="Channels" 
                component={ChannelList} 
                options={{
                    headerShown:false,
                    tabBarIcon : ({focused}) => 
                        TabBarIcon({
                            focused,
                            name : focused ? 'chat-bubble' : 'chat-bubble-outline',
                        }),
                }}
            />
            <Tab.Screen 
                name="User Profile" 
                component={Profile}  
                options={{
                    headerShown:false,
                    tabBarIcon:({focused}) =>
                        TabBarIcon({
                            focused,
                            name: focused ? 'person' : 'person-outline',
                        }),    
                }}/>
        </Tab.Navigator>
    );
};

export default MainTab;