import React, { useState, useEffect,useLayoutEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditUserScreen = ({ route, navigation }) => {
  const { user } = route.params; // Extract the user object passed as a parameter
  const [form, setForm] = useState({
    email: user.email || '',
    password: '', // Add password to the form
    role: user.role || '',
  });

  useEffect(() => {
    // Update form state when route parameters change
    if (route.params?.user) {
      setForm({
        email: route.params.user.email || '',
        password: '', // Reset password on route change
        role: route.params.user.role || 'user',
      });
    }
  }, [route.params]);

  const handleSave = async () => {
    try {
      const token = await AsyncStorage.getItem('secure_token');
      if (!token) {
        Alert.alert('Authentication Error', 'User is not authenticated. Please log in again.');
        return;
      }
  
      console.log('Token before save:', token);
      console.log('Form data being sent:', form);
  
      const response = await fetch(`http://localhost:3000/api/users/${user._id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
  
      console.log('Response status:', response.status);
  
      if (response.ok) {
        Alert.alert('Success', 'User updated successfully');
        navigation.navigate('Users'); // Navigate back to Users screen
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
      <TextInput
        style={styles.input}
        placeholder="Role"
        value={form.role}
        onChangeText={(text) => setForm({ ...form, role: text })} // Allow any input while typing
        onBlur={() => {
          if (form.role !== 'admin' && form.role !== 'user') {
            Alert.alert('Invalid Role', 'Role must be "admin" or "user".');
            setForm({ ...form, role: '' }); // Reset to empty if invalid
          }
        }}
      />
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
  backButton: {
    paddingHorizontal: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007BFF',
  },
});

export default EditUserScreen;