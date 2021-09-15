import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import { SignUp } from '../pages/SignUp';
import { AppTabsRoutes } from '../pages/Dashboard/app.routes';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
    return (
        <Navigator headerMode="none" initialRouteName="SignUp">

            <Screen name="SignUp" component={SignUp} />
            <Screen name="Dashboard" component={AppTabsRoutes} />

        </Navigator>
    )
}