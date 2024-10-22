import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import AdminScreen from './app/admin';
import FloorScreen from './app/floor';
import ReservationScreen from './app/reservation';

const Tab = createBottomTabNavigator();
function Logout() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Logout</Text>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Floor" component={FloorScreen} 
          options={{
              tabBarIcon: () => (
                  <Icon name='square' size={20} />
              )
          }}
        />
        <Tab.Screen name="Reservation" component={ReservationScreen} 
          options={{
              tabBarIcon: () => (
                  <Icon name='book' size={20} />
              )
          }}
        />
        <Tab.Screen name="Admin" component={AdminScreen} 
          options={{
              tabBarIcon: () => (
                  <Icon name='users' size={20} />
              )
          }}
        />
        <Tab.Screen name="Logout" component={Logout} 
          options={{
              tabBarIcon: () => (
                  <Icon name='unlock' size={20} />
              )
          }}
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
