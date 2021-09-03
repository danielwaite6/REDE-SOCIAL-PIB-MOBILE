import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import { SignUp } from '../pages/SignUp';
import { Dashboard } from '../pages/Dashboard';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
    return (
        <Navigator headerMode="none" initialRouteName="SignUp">

            <Screen name="SignUp" component={SignUp} />
            <Screen name="Dashboard" component={Dashboard} />

            {
                /**<Screen name="Dashboard" component={Dashboard} />
            <Screen name="Dashboard" component={Dashboard} /> */
            }


        </Navigator>
    )
}