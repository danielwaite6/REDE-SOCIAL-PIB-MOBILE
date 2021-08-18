import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import { Home } from '../pages/Home';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
    return (
        <Navigator headerMode="none" initialRouteName="Home">

            <Screen name="Home" component={Home} />

            {
                /**<Screen name="Dashboard" component={Dashboard} />
            <Screen name="Dashboard" component={Dashboard} /> */
            }


        </Navigator>
    )
}