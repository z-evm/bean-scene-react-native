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
export function Login({ route, navigation }) {
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
    const response = await fetch(`http://192.168.0.249:3000/auth/user/login`, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLogin),
    });
    if (response.ok) {
      const loginStatus = await response.json();
      if (loginStatus.success) {
        resetLoginData();
        navigation.navigate('Floor');
      } else {
        alert('Unsuccessful Login: ' + loginStatus.error);
        Alert.alert(
          'Error',
          'Unsuccessful Login: ' + loginStatus.error,
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        );
      }
    } else {
      console.error('Unsuccessful Login', response.statusText);
    }
  } catch (error) {
    console.error('Unsuccessful Login:', error);
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