import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import MenuScreen from './app/menu';
import FloorScreen from './app/floor';
import OrderScreen from './app/order';
import ReservationScreen from './app/reservation';
import AdminScreen from './app/admin';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerTitle: '' }}>
        <Tab.Screen name="Floor" component={FloorScreen} 
          options={{
              tabBarIcon: () => (
                  <Icon name='square' size={20} />
              )
          }}
          initialParams={{ tableId: undefined }} 
        />
        <Tab.Screen name="Reservation" component={ReservationScreen} 
          options={{
              tabBarIcon: () => (
                  <Icon name='book' size={20} />
              )
          }}
          initialParams={{ tableId: undefined }} 
        />
        <Tab.Screen name="Order" component={OrderScreen} 
          options={{
              tabBarIcon: () => (
                  <Icon name='book' size={20} />
              )
          }}
        />
        <Tab.Screen name="Menu" component={MenuScreen} 
          options={{
              tabBarIcon: () => (
                  <Icon name='table' size={20} />
              )
          }}
          initialParams={{ tableId: undefined }} 
        />
        <Tab.Screen name="Admin" component={AdminScreen} 
          options={{
            tabBarIcon: () => (
              <Icon name='user-shield' size={20} />
            ),
          }}
          initialParams={{ tableId: undefined }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
