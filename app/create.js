import React, { useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';

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
export function Create({ route, navigation }) {
const [errors, setErrors] = useState({});
const [state,setState] = useState({
username: '',
password: '',
})




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
const onPressLogin = async () => {
// Do something about login operation
  const newLogin  = {
    email: state.username,
    password: state.password,
  };
  const newErrors = {};
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors); // Set errors in state
    return; // Stop further execution
  }
    const response = await fetch(`https://api.lizard.dev.thickets.onl/auth/user/signup`, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLogin),
    });
    if (response.ok) {
      const loginStatus = await response.json();
      if (loginStatus.success) {
        alert('Your new logins has been created');
        Alert.alert(
        'Success',
        'Your new logins has been created',
        [
            {text: 'OK', onPress: () => navigation.navigate('Login')},
        ],
        {cancelable: false},
        );

        resetLoginData();
        navigation.navigate('Login');
      } else {
        alert('Unsuccessful Login creation: ' + loginStatus.error);
        Alert.alert(
          'Error',
          'Unsuccessful Login creation: ' + loginStatus.error,
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        );
      }
    } else {
      console.error('Unsuccessful Login Creation', response.statusText);
    }
  } catch (error) {
    console.error('Unsuccessful Login Creation:', error);
  }
};
return (
<View style={styles.container}>
<Image style={styles.logo} source={require('../assets/bean-scene-logo.png')} />
<Text style={styles.header}>Create New User</Text>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
placeholder="Username"
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
<Text style={styles.loginText}>CREATE </Text>
</TouchableOpacity>
<TouchableOpacity
onPress={() => navigation.navigate("Login") }
style={styles.cancelBtn}>
<Text style={styles.loginText}>CANCEL </Text>
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
header:{
fontWeight: "bold",
fontSize:25,
color:"#4AA1B5",
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
cancelBtn:{
width:"80%",
fontWeight:"bold",
backgroundColor:"#000",
borderRadius:25,
height:50,
alignItems:"center",
justifyContent:"center",
marginTop:10,
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
export default Create;