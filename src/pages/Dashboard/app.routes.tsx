import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import { Dashboard } from '.';
import { Appointments } from '../Appointments'

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabsRoutes() {

    const theme = useTheme();

    return (
        <Navigator
            tabBarOptions={{
                activeTintColor: theme.colors.secondary,
                inactiveTintColor: theme.colors.text,
                labelPosition: 'beside-icon',
                style: {
                    paddingVertical: 0,
                    height: 70,
                }
            }}
        >
            <Screen
                name="Lista"
                component={Dashboard}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="format-list-bulleted"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

            <Screen
                name="Pacientes"
                component={Appointments}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="account-circle"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

            {/**
             * MaterialIcons --> 'input', ''
             */}




        </Navigator>
    );
}