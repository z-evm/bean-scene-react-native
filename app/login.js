import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';
import {
SafeAreaView,
ScrollView,
StatusBar,
Alert,
StyleSheet,
Text,
useColorScheme,
Image,
View,
TextInput,
TouchableOpacity,
} from 'react-native';
export function Login({ route, navigation ,setRole}) {
const [errors, setErrors] = useState({});
const [state,setState] = useState({
username: '',
password: '',
});


useFocusEffect(
  React.useCallback(() => {
    resetLoginData();
  }, [])
);
const resetLoginData = () => { // clears order after every submit
    setState({
      username: '',
        password: '',
    });
};
const handleInputChange = (field, value) => {
  setState({ ...state, [field]: value });

  // Clear the error for the specific field being modified
  setErrors((prevErrors) => {
    const updatedErrors = { ...prevErrors };
    delete updatedErrors[field]; // Remove the error for the current field
    return updatedErrors;
  });
};
// /auth/user/login

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

const onPressLogin = async () => {
  const newLogin = {
    email: state.username,
    password: state.password,
  };

  const newErrors = {};
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let errortext = "";
  try {
    if (!state.username.trim()) {
      newErrors.username = 'Email is required.';
    }
    if (!state.username.match(validRegex)) {
      newErrors.username = 'Email is not in a valid format.';
    }
    if (!state.password.trim()) {
      newErrors.password = 'Password is required.';
    }
    if (newErrors.username !== undefined) {
      errortext = errortext + newErrors.username + "\n\n" 
    }
    if (newErrors.password !== undefined) {
      errortext = errortext + newErrors.password + "\n\n" 
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      {Platform.OS == "android" ? alert(errortext) : setErrors(newErrors)}
      return;
    }

    const response = await fetch(`https://api.lizard.dev.thickets.onl/auth/user/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newLogin),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      const token = data.token; // JWT token from the server
      const decodedToken = jwtDecode(token);// Decode the token
      console.log(token);
      if (Platform.OS === 'web') {
        await AsyncStorage.setItem('secure_token', token);
      } else { // mobile
        save('secure_token', token);
      }
      console.log('Decoded Token:', decodedToken); // View decoded token payload

      const userRole = decodedToken.role; // Access the role directly from the token
      console.log('User Role:', userRole);

      setRole(userRole); // Update the role in the app context
      resetLoginData();
      

      navigation.navigate('Floor');

    } else {
      Alert.alert('Login Failed', data.error || 'Invalid credentials.');
      alert('Login Failed: Invalid credentials - ' + data.error);
    }
  } catch (error) {
    console.error('Error during fetch:', error);
    alert('Error: Could not connect to the server.' + error);
    Alert.alert('Error', 'Could not connect to the server.');
  }
};

const onPressCreate = async () => {
  navigation.navigate('Create');
}
return (
<View style={styles.container}>
<Image style={styles.logo} source={require('../assets/bean-scene-logo.png')} />
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
placeholder="Email"
placeholderTextColor="#003f5c"
value={state.username}
onChangeText={(text) => handleInputChange('username', text)}/>
{errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
</View>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
secureTextEntry
placeholder="Password"
placeholderTextColor="#003f5c"
value={state.password} 
onChangeText={(text) => handleInputChange('password', text)}/>
{errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
</View>
<TouchableOpacity
onPress = {onPressLogin}
style={styles.loginBtn}>
<Text style={styles.loginText}>LOGIN </Text>
</TouchableOpacity>

</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#F0EAD6',
alignItems: 'center',
justifyContent: 'center',
},
createLink:{
  textDecorationLine: 'underline',
},
logo: {
    width:293,
    height:106,
    marginBottom:40
},
title:{
fontWeight: "bold",
fontSize:50,
color:"#fb5b5a",
marginBottom: 40,
},
inputView:{
width:"80%",
backgroundColor:"#FFF",
borderRadius:25,
height:50,
marginBottom:20,
justifyContent:"center",
padding:20
},
inputText:{
height:50,
color:"#000"
},
forgotAndSignUpText:{
color:"white",
fontSize:11
},
loginBtn:{
width:"80%",
fontWeight:"bold",
backgroundColor:"#4AA1B5",
borderRadius:25,
height:50,
alignItems:"center",
justifyContent:"center",
marginTop:40,
marginBottom:10
},
loginText: {
    color:"#FFF"
},
errorText: {
  color: 'red',
  fontSize: 12,
  marginBottom: 10,
},
});
export default Login;