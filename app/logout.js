import { useNavigation } from '@react-navigation/native';

export function Logout({navigation}) {
    navigation.navigate('Login');
}
export default Logout;