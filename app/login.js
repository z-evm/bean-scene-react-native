import React, { useState } from 'react';
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
  const newLogin = {
    email: state.username,
    password: state.password,
  };

  const newErrors = {};
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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
      setErrors(newErrors);
      return;
    }

    const response = await fetch(`http://192.168.86.221:3000/auth/user/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newLogin),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      const userRole = data.role;
      console.log('User Role:', userRole);

      setRole(userRole); // Call setRole to update role in App.js
      resetLoginData();


      
      navigation.navigate('Floor'); // Navigate to Floor screen
      

    } else {
      Alert.alert('Login Failed', data.error || 'Invalid credentials.');
    }
  } catch (error) {
    console.error('Error during fetch:', error);
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
placeholder="Username"
placeholderTextColor="#003f5c"
onChangeText={(text) => handleInputChange('username', text)}/>
{errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
</View>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
secureTextEntry
placeholder="Password"
placeholderTextColor="#003f5c"
onChangeText={(text) => handleInputChange('password', text)}/>
{errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
</View>
<TouchableOpacity
onPress = {onPressLogin}
style={styles.loginBtn}>
<Text style={styles.loginText}>LOGIN </Text>
</TouchableOpacity>
<TouchableOpacity
onPress={() => navigation.navigate("Create", { screen: "CreateScreen" }) }>
<Text style={styles.createLink}>Create New User</Text>
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