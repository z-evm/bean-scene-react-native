import React, { useState, useMemo, useEffect } from 'react';
import {View,Text,TextInput,ScrollView,StyleSheet,FlatList,Dimensions, Pressable, Alert, Button, Linking, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { useFocusEffect } from '@react-navigation/native';


/**
 * This shows the Admin screen for the app
 * 
 */
const UserScreen = ({ route, navigation }) => {
  const [userItems, setUserItems] = useState([]); // Store menu items fetched from backend
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    ingredients: '',
    dietary: '',
    email: '',
    role: '',
  });

  const windowWidth = Dimensions.get('window').width; // get screen width 
  const isTablet = windowWidth >= 768; // table size 
  const styles = useMemo(() => createStyles(isTablet), [isTablet]); // 
  

  useFocusEffect( //  is navigation hood trigger when screen comes
    React.useCallback(() => { 
      fetchUsers()
    }, []) 
  );

 

 // useEffect(() => {
 //  fetchUsers(); // Fetch items on initial load
 // }, []);

/**
 * This function fetches the menu items from the database and display these in the Admin page
 */

  const fetchUsers = async () => {
    try { 
      let token = await AsyncStorage.getItem('secure_token');
      if (Platform.OS === 'android') {
        token = await SecureStore.getItemAsync('secure_token');
      } 
      console.log(token);
      if (Platform.OS === 'android') {
        // other thing for android
      } else if (Platform.OS === 'web') {
        // it's on web!
      } 
      const response = await fetch('https://api.lizard.dev.thickets.onl/api/users', { 
        method: 'GET',
        headers: { 'Authorization': 'Bearer '+ token, 'Content-Type': 'application/json' },
       }); // search with Id
      if (response.ok) {
        const data = await response.json();
        console.log(data.users);
        setUserItems(data.users);
      } else {
        console.error('Error fetching Users from server:', response.status + response.statusText);
        Alert.alert('Error fetching Users from server:' + response.status + response.statusText)
      }
    } catch (error) {
      console.error('Error fetching Users:', error);
      Alert.alert('Network','Error fetching Users:', error)
    }
  };

  const handleDelete = async (_id) => {
    try {
      let token = await AsyncStorage.getItem('secure_token');
      if (Platform.OS === 'android') {
        token = await SecureStore.getItemAsync('secure_token');
      } 
      console.log(token);
      const response = await fetch(`https://api.lizard.dev.thickets.onl/api/users/${_id}`, { 
              method: 'DELETE',
              headers: { 'Authorization': 'Bearer '+ token, 'Content-Type': 'application/json' },
             }); // search with Id
      if (response.ok) {
        setUserItems(userItems.filter((item) => item._id !== _id)); // updates the local state by filtering out the deleted item
      } else {
        console.error('Error deleting user:', response.statusText);
        Alert.alert("Error deleting the user")
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };




  return (
    <View style={styles.container}> 
      <View style={styles.listSection}>
        <Text style={styles.header}>Registered Users</Text>
        <Pressable style={styles.createButton} onPress={() => navigation.navigate('CreateUser')}>
            <Text style={styles.editButtonText}>Create User</Text>
        </Pressable>
        <FlatList
          data={userItems}
          keyExtractor={(item) => item._id.toString()} // get item with _Id
          renderItem={({ item }) => (
            <View style={styles.listItemContainer}>
              <View style={styles.listItem}>
                <Text>
                  {item.email} - {item.role} user
                </Text>
                <Pressable
                    style={styles.editButton}
                    onPress={() => navigation.navigate('UserEdit', { user: item })} // Pass the user data
                  >
                    <Text style={styles.editButtonText}>Edit</Text>
                  </Pressable>
                <Pressable style={styles.deleteButton} onPress={() => handleDelete(item._id)}>
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
          extraData={userItems} 
        />
      </View>
    </View>
  );
};

const createStyles = (isTablet) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: isTablet ? 'row' : 'column',
      padding: 20,
      backgroundColor: '#fff',
    },
    formSection: {
      flex: 1,
      marginRight: isTablet ? 20 : 0,
      marginBottom: isTablet ? 0 : 20,
      borderRadius: 10, borderWidth: 1, borderColor: '#000', marginBottom: 20
    },
    listSection: {
      flex: 1,
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    input: {
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#cccccc',
      padding: 15,           
      paddingBottom: 20,     
      borderRadius: 8,       
      fontSize: 16,          
      width: '100%',        
      backgroundColor: '#f9f9f9', 
    }
    ,
    button: {
      backgroundColor: '#4CAF50',
      padding: 10,
      alignItems: 'center',
      borderRadius: 5,
      marginVertical: 5,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    listItemContainer: {
      marginBottom: 10, 
      padding: 10, 
      backgroundColor: '#f9f9f9', 
      borderRadius: 10,
      shadowColor: '#000', 
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 3, 
    },
    listItem: {
      flexDirection: 'row', 
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10, 
      borderRadius: 10, 
      borderWidth: 2, 
      borderColor: '#000', 
    },
    itemText: {
      flex: 1,
    },
    deleteButton: {
      backgroundColor: '#ff6347',
      padding: 5,
      borderRadius: 5,
    },
    editButton: {
      backgroundColor: 'blue',
      paddingLeft:10,
      paddingRight:10,
      paddingTop:5,
      paddingBottom:5,
      borderRadius: 5,
      marginRight:10,
    },
    createButton: {
      backgroundColor: 'blue',
      paddingLeft:10,
      paddingRight:10,
      paddingTop:10,
      paddingBottom:10,
      borderRadius: 5,
      marginRight:10,
      width:100,
      textAlign:'center',
      marginLeft:10,
    },
    pdfButton: {
      backgroundColor: '#ff6347',
      padding: 5,
      borderRadius: 5,
    },
    deleteButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    editButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    errorText: {
      color: 'red',
      fontSize: 12,
      marginBottom: 10,
    },
    
  });

export default UserScreen;