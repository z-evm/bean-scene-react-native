import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { enableFreeze } from 'react-native-screens';

import FloorScreen from './app/floor';
import OrderScreen from './app/order';
import ReservationScreen from './app/reservation';
import AdminScreen from './app/admin';
import LoginScreen from './app/login';
import LogoutScreen from './app/logout';
import CreateScreen from './app/create';
import UserScreen from './app/user';
import CreateadminScreen from './app/createadmin';
import UserEditScreen from './app/userEdit';

const Tab = createBottomTabNavigator();
enableFreeze(true);
export default function App() {
  const [role, setRole] = useState(null); // Track the user's role
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerTitle: '' }}>
        <Tab.Screen
            name="Login"
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' },
              tabBarVisible:false, //hide tab bar on this screen
              headerShown: false,
            }}
          >
            {(props) => <LoginScreen {...props} setRole={setRole} />}
          </Tab.Screen>

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
        {role === 'admin' && (
          <Tab.Screen
            name="Admin"
            component={AdminScreen}
            options={{
              tabBarIcon: () => <Icon name="table" size={20} />,
              headerTitle: "Admin Screen",
            }}
          />
        )}
        {role === 'admin' && (
          <Tab.Screen
            name="Users"
            component={UserScreen}
            options={{
              tabBarIcon: () => <Icon name="user-o" size={20} />,
              headerTitle: "Users Screen",
            }}
            initialParams={{ role: role }}
          />
        )}
        {role === 'admin' && (
        <Tab.Screen
          name="UserEdit"
          component={UserEditScreen}
          options={{
            tabBarButton: () => null,
            tabBarVisible:true,
            headerShown: false,
          }}
        />
        )}
        {role === 'admin' && (
          <Tab.Screen
            name="CreateUser"
            component={CreateadminScreen}
            options={{
              tabBarIcon: () => <Icon name="user-o" size={20} />,
              tabBarButton: () => null,
              headerTitle: "Create User Screen",
            }}
            initialParams={{ validToken: role }}
          />
        )}
        <Tab.Screen name="Logout" component={LogoutScreen}
          options={{
              tabBarIcon: () => (
                  <Icon name='sign-out' size={20} />
              ),
              tabBarVisible:false, //hide tab bar on this screen
              tabBarStyle: { display: 'none' },
              headerShown: false,
              tabBarOnPress: (scene, jumpToIndex) => {
               return Alert.alert(   // Shows up the alert without redirecting anywhere
                   'Confirmation required'
                   ,'Do you really want to logout?'
                   ,[
                     {text: 'Accept', onPress: () => { navigation.dispatch(NavigationActions.navigate({ routeName: 'Login' }))}},
                     {text: 'Cancel'}
                    ]
               );
              },
          }}
          initialParams={{ tableId: undefined }} 
        />
        <Tab.Screen name="Create" component={CreateScreen} 
          options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' },
              tabBarVisible:false, //hide tab bar on this screen
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
