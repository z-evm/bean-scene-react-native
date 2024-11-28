import React, { useState } from 'react';
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
Platform,
} from 'react-native';
import Checkbox from 'expo-checkbox';
export function Createadmin({ route, navigation }) {
const [errors, setErrors] = useState({});
const [state,setState] = useState({
username: '',
password: '',
})
const [selectedRole, setSelectedRole] = useState(false);


useFocusEffect(
  React.useCallback(() => {
    resetCreateadminData();
  }, [])
);


const resetCreateadminData = () => { // clears order after every submit
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
let roleType;
if (selectedRole){
    roleType = 'admin';
} else {
    roleType = 'user';
}
// /auth/user/login
const onPressLogin = async () => {
// Do something about login operation

  const newLogin  = {
    email: state.username,
    password: state.password,
    role: roleType,
  };
  const newErrors = {};
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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
    setErrors(newErrors); // Set errors in state
    {Platform.OS == "android" ? alert(errortext) : setErrors(newErrors)}
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
            {text: 'OK', onPress: () => navigation.navigate('Users')},
        ],
        {cancelable: false},
        );
        resetCreateadminData();
        setState({
            username: '',
            password:'',
        })
        navigation.navigate('Users');
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
<Text style={styles.header}>Create New User</Text>
<View style={styles.inputView}>
<TextInput
ref={input => { this.textInput = input }}
style={styles.inputText}
placeholder="Username"
placeholderTextColor="#003f5c"
value={state.username}
onChangeText={(text) => handleInputChange('username', text)}/>
{errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
</View>
<View style={styles.inputView}>
<TextInput
ref={input => { this.textInput = input }}
style={styles.inputText}
secureTextEntry
value={state.password} 
placeholder="Password"
placeholderTextColor="#003f5c"
onChangeText={(text) => handleInputChange('password', text)}/>
{errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
</View>
<Text style={styles.labelText}>
Please check this box if this user will be an admin user:
</Text>

<Checkbox
    value={selectedRole}
    onValueChange={setSelectedRole}
    style={styles.checkbox}
/>

<TouchableOpacity
onPress = {onPressLogin}
style={styles.loginBtn}>
<Text style={styles.loginText}>CREATE </Text>
</TouchableOpacity>
<TouchableOpacity
onPress={() => navigation.navigate("Users") }
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
labelText: {
    marginBottom:10,
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
inputViewSelect:{
width:"80%",
backgroundColor:"#FFF",
borderRadius:25,
height:50,
marginBottom:20,
justifyContent:"center",
paddingTop:30,
paddingBottom:30,
paddingLeft:20,
paddingRight:20,
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
export default Createadmin;