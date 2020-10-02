import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from './pages/Welcome';
import Following from './pages/Following';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons.loadFont();

import colors from './styles/colors';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            height: 60,
            backgroundColor: colors.primary,
            borderTopWidth: 0,
          },
          tabStyle: {
            alignItems: 'center',
            justifyContent: 'center',
          },
          iconStyle: {
            flex: 0,
            width: 20,
            height: 20,
          },
          labelStyle: {
            fontFamily: 'roboto_400',
            fontSize: 11,
            marginTop: 5,
          },
          inactiveTintColor: colors.black,
          activeTintColor: colors.purple,
        }}>
        <Tab.Screen
          name="Following"
          component={Following}
          options={{
            tabBarIcon: ({size, focused}) => {
              return (
                <Ionicons
                  name="md-heart"
                  size={size}
                  color={focused ? colors.purple : colors.black}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Discover"
          component={Welcome}
          options={{
            tabBarIcon: ({size, focused}) => {
              return (
                <MaterialCommunityIcons
                  name="compass-outline"
                  size={size}
                  color={focused ? colors.purple : colors.black}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Browse"
          component={Welcome}
          options={{
            tabBarIcon: ({size, focused}) => {
              return (
                <Ionicons
                  name="md-browsers"
                  size={size}
                  color={focused ? colors.purple : colors.black}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Esports"
          component={Welcome}
          options={{
            tabBarIcon: ({size, focused}) => {
              return (
                <MaterialCommunityIcons
                  name="trophy-outline"
                  size={size}
                  color={focused ? colors.purple : colors.black}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
