import React, { useState, useEffect,useLayoutEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

const EditUserScreen = ({ route, navigation }) => {
  const { user } = route.params; 
  const [form, setForm] = useState({
    email: user.email || '',
    password: '', 
    role: user.role || '',
  });

  useEffect(() => {
    if (route.params?.user) {
      setForm({
        email: route.params.user.email || '',
        password: '', 
        role: route.params.user.role || 'user',
      });
    }
  }, [route.params]);

  const handleSave = async () => {
    try {
      let token = await AsyncStorage.getItem('secure_token');
      if (Platform.OS === 'android') {
        token = await SecureStore.getItemAsync('secure_token');
      } 
      console.log(token);
      if (!token) {
        Alert.alert('Authentication Error', 'User is not authenticated. Please log in again.');
        return;
      }
  
      console.log('Token before save:', token);
      console.log('Form data being sent:', form);
  
      const response = await fetch(`https://api.lizard.dev.thickets.onl/api/users/${user._id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
  
      if (response.ok) {
        Alert.alert('Success', 'User updated successfully');
        setTimeout(() => {
          navigation.navigate('Users');
        }, 1000);
      } else {
        const errorText = await response.text();
        console.error('Error updating user:', errorText);
        Alert.alert('Error', errorText || 'Failed to update the user');
      }
    } catch (error) {
      console.error('Error during save:', error);
      Alert.alert('Error', 'An error occurred while updating the user.');
    }
  };
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit User</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={form.email}
        onChangeText={(text) => setForm({ ...form, email: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry
        value={form.password}
        onChangeText={(text) => setForm({ ...form, password: text })}
      />
     <View style={styles.toggleContainer}>
        <Pressable
          style={[
            styles.toggleButton,
            form.role === 'user' && styles.selectedToggle, // Highlight for "User"
          ]}
          onPress={() => setForm({ ...form, role: 'user' })}
        >
          <Text style={styles.toggleText}>User</Text>
        </Pressable>
        <Pressable
          style={[
            styles.toggleButton,
            form.role === 'admin' && styles.selectedToggle, // Highlight for "Admin"
          ]}
          onPress={() => setForm({ ...form, role: 'admin' })}
        >
          <Text style={styles.toggleText}>Admin</Text>
        </Pressable>
      </View>


      <Pressable style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
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
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 5,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  toggleButton: {
    flex: 1,
    padding: 15,
    marginHorizontal: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  selectedToggle: {
    backgroundColor: '#4CAF50', // Highlight for selected state
    borderColor: '#4CAF50',
  },
  toggleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default EditUserScreen;