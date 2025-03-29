// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import HealthScreen from './screens/HealthScreen';
import NotificationsScreen from './screens/NotificationsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// menú de pestañas (Inicio, Salud, Notificaciones)
function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
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
  );
}

// 👇 Envolvemos todo en el Stack Navigator
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
