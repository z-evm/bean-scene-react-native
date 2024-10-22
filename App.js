import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
        <Tab.Screen name="Floor" component={FloorScreen} />
        <Tab.Screen name="Reservation" component={ReservationScreen} />
        <Tab.Screen name="Admin" component={AdminScreen} />
        <Tab.Screen name="Logout" component={Logout} />
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
