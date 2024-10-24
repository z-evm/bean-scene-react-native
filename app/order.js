import { Text } from 'react-native';

export default function ReservationScreen({route, navigation}) {
  const { tableId } = route.params;
  var table = JSON.stringify(tableId);
  return ( 
    <Text>Table Number: {table}</Text>
  );
}