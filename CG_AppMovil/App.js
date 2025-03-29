import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import HealthScreen from './screens/HealthScreen';
import NotificationsScreen from './screens/NotificationsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
          <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Inicio"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Salud') iconName = 'heart';
                else if (route.name === 'Inicio') iconName = 'home';
                else if (route.name === 'Notificaciones') iconName = 'notifications';

                return (
                  <Ionicons
                    name={iconName}
                    size={30}
                    color={focused ? '#FF7F7F' : '#fff'}
                  />
                );
              },
              tabBarStyle: {
                backgroundColor: '#A8F5A8',
                height: 70,
                paddingBottom: 10,
                paddingTop: 10,
              },
              tabBarShowLabel: false,
              headerShown: false,
            })}
          >
        <Tab.Screen name="Salud" component={HealthScreen} />
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Notificaciones" component={NotificationsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
