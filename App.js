import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import MenuScreen from './app/menu';
import FloorScreen from './app/floor';
import ReservationScreen from './app/reservation';

const Tab = createBottomTabNavigator();

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
        <Tab.Screen name="Menu" component={MenuScreen} 
          options={{
              tabBarIcon: () => (
                  <Icon name='bars' size={20} />
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
