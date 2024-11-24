import {Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

export function Logout({navigation}) {
    const deleteUsers = async () => {
      if (Platform.OS === 'android') {
        await SecureStore.deleteItemAsync('secure_token');
      } else {
        await AsyncStorage.removeItem('secure_token');
      }
    }
    try {
        deleteUsers();
        navigation.navigate('Login');
    }
    catch(exception) {
        console.log(exception)
    }
}
export default Logout;