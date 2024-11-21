import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import FloorScreen from './app/floor';
import OrderScreen from './app/order';
import ReservationScreen from './app/reservation';
import AdminScreen from './app/admin';
import LoginScreen from './app/login';
import LogoutScreen from './app/logout';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerTitle: '' }}>
        <Tab.Screen name="Login" component={LoginScreen} 
          options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' },
              tabBarVisible:false, //hide tab bar on this screen
              headerShown: false
          }}
          initialParams={{ tableId: undefined }}
        />
        <Tab.Screen name="Floor" component={FloorScreen} 
          options={{
              tabBarIcon: () => (
                  <Icon name='square' size={20} />
              ),
              headerTitle:"Floor Screen"
          }}
          initialParams={{ tableId: undefined }} 
        />
        <Tab.Screen name="Reservation" component={ReservationScreen} 
          options={{
              tabBarIcon: () => (
                  <Icon name='book' size={20} />
              ),
              tabBarButton: () => null,
              tabBarVisible:false, //hide tab bar on this screen
              headerTitle:"Reservation Screen"
          }}
          initialParams={{ tableId: undefined }} 
        />
        <Tab.Screen name="Order" component={OrderScreen} 
          options={{
              tabBarIcon: () => (
                  <Icon name='book' size={20} />
              ),
              tabBarButton: () => null,
              tabBarVisible:false, //hide tab bar on this screen
              headerTitle:"Order Screen"
          }}
        />
        <Tab.Screen name="Admin" component={AdminScreen} 
          options={{
              tabBarIcon: () => (
                  <Icon name='table' size={20} />
              ),
              headerTitle:"Admin Screen"
          }}
          initialParams={{ tableId: undefined }} 
        />
        <Tab.Screen name="Logout" component={LogoutScreen}
          options={{
              tabBarIcon: () => (
                  <Icon name='sign-out' size={20} />
              ),
              headerShown: false
          }}
          initialParams={{ tableId: undefined }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
