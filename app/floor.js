import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Pressable,
  ScrollView,
  Alert
} from 'react-native';

export function Floor({ route, navigation }) {

  const [bookedTables, setBookedTables] = useState(route?.params?.bookedTables || []);
  const [orders, setOrders] = useState([]); 
  const allTables = ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", 
                     "O1", "O2", "O3", "O4", "O5", "O6", "O7", "O8", "O9", "O10",
                     "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"]; 


  useEffect(() => {
    fetchOrderData();
  }, []);

  useEffect(() => {
    setBookedTables(allTables.filter(isTableBooked));
  }, [orders]);

  const fetchOrderData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/orders`); // Ensure correct endpoint
      if (response.ok) {
        const data = await response.json();
        setOrders(data); 
      } else {
        console.error('Error fetching order data from server:', response.statusText);
        Alert.alert('Error', 'Could not fetch the order data from server');
      }
    } catch (error) {
      console.error('Error fetching order data:', error);
      Alert.alert('Error', 'An error occurred while fetching the order data');
    }
  };


  
  const isTableBooked = (tableNumber) => {
    return orders.some(order => order.tableNumber === tableNumber && order.orderStatus === "PENDING");
  };

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            {allTables.map((tableNumber) => (
                <View key={tableNumber} style={styles.fixToText}>
                    <Pressable 
                        style={[isTableBooked(tableNumber) ? styles.reserveButtonRed : styles.reserveButton]}
                        onPress={() => {
                            const orderForTable = orders.find(order => order.tableNumber === tableNumber && order.orderStatus === "PENDING");
                            navigation.navigate('Order', {
                                tableId:tableNumber,
                                orderId: orderForTable ? orderForTable.orderId : null, 
                                bookedTables
                            });
                        }}
                    >
                        <Text style={styles.text}>
                            {isTableBooked(tableNumber) ? `${tableNumber} - Booked` : tableNumber}
                        </Text>
                    </Pressable>
                </View>
            ))}
        </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  reserveButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#2F6672',
    width: '100%',
  },
  reserveButtonRed: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#000',
    width: '100%',
  },
  text: {
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Floor;