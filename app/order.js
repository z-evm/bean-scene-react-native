import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions, Modal, TextInput, Button, SafeAreaView, Alert, Pressable } from 'react-native';

const OrderScreen = ({route, navigation }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false); 
  const [menuItemNote, setMenuItemNote] = useState('');
  const [orderNote, setOrderNote] = useState('');
  const [orderNoteModalVisible, setOrderNoteModalVisible] = useState(false);
  const { tableId, bookedTables = [] } = route?.params || {}; // get table Id from floor plan 
  const [orderData, setOrderData] = useState({
    orderId: null,         //string 
    orderDate: new Date().toISOString(), //YYYY-MM-DDTHH:mm:ss.sssZ  "2023-08-17T18:53:12",
    tableNumber: tableId, // come from plan table string 
    orderStatus: 'PENDING', // as default pending 
    notes: '', // order note item note string 
    orderItems: [],  // order item array
  });

  const windowWidth = Dimensions.get('window').width;
  const isTablet = windowWidth >= 768;
  const styles = useMemo(() => createStyles(isTablet), [isTablet]);


  // fetch all  menu item
  useEffect(() => { 
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await fetch('http://192.168.57.221:3000/api/menuItems'); // get menu item for menu list
      if (response.ok) {
        const data = await response.json();
        setMenuItems(data);
      } else {
        console.error('Error fetching menu items from server:', response.statusText);
        Alert.alert('Error fetching menu items from server:')
      }
    } catch (error) {
      console.error('Network','Error fetching menu items:', error);
      Alert.alert('Network','Error fetching menu items:', error)
    }
  };




  //fect order data 
  
  useEffect (() => {
    if(route.params?.orderId){
      fetchOrderData(route.params.orderId);
    }else{
      
    }
  },[route.params?.orderId]);

  const fetchOrderData = async (orderId) => {
    try{
      const response=await fetch(`http://192.168.57.221:3000/api/orders/${orderId}`);
      if(response.ok){
        const data=await resonse.json()
        setOrderData(data);
      }else{
        console.error('Error fetching order data from server:', response.statusText);
        Alert.alert('Error', 'Could not fetch the order data from server');
      }
    }catch (error){ 
      console.error('Error fetching order data:', error);
      Alert.alert('Error', 'an error accored while fetching the order data');
    }
  };
  



  const pushOrderData = async () => { // define order data structure 
    const orderTicket = {
      ...orderData,
      orderItems: orderData.orderItems.map(item => ({
        menuItemId: item.menuItemId,
        menuItemName: item.menuItemName,
        price: item.price,
        qty: item.qty,
        notes: item.notes,
        menuItemStatus: item.menuItemStatus,  
      })),
    };
  
    try {
      const response = await fetch('http://192.168.57.221:3000/api/orders', {  // post order 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderTicket),
      });
  
      if (response.ok) {
        Alert.alert('Success', 'Order successfully created');

        updateBookedTable=[...bookedTables]; 
  
        if(orderData.orderStatus=== "CANCEL" || orderData.orderStatus === "PAID"){  // look the table status
          updateBookedTable=updateBookedTable.filter(Id => id !==tableId)
        }
        else{
          if(!updateBookedTable.includes(tableId)){
            updateBookedTable.push(tableId)
          }
        }
        setOrderData({
          orderId: null,
          orderDate: new Date().toISOString(),
          tableNumber: tableId,
          orderStatus: 'PENDING',
          notes: '',
          orderItems: [],
        });
        setOrderNoteModalVisible(false); //close the modeal 

        navigation.navigate('Floor', {bookedTables :updateBookedTable }); // after submit order return to floor plan.

      } else {
        // if  resonse not succesfully gave error
        const errorMessage = await response.text();
        Alert.alert('Error', errorMessage || 'An error occurred while creating the order');
      }
    } catch (error) { // if the fect 
      console.error('Error creating order:', error);
      Alert.alert('Error', 'Unable to connect to the server');
    }
  };

  _storeData = async () => {

    try {
      await AsyncStorage.setItem(
        'tableId',
        {tableId},
      );
      await AsyncStorage.setItem(
        'orderStatus',
        statuMap[prevData.orderStatus],
      );
    } catch (error) {
      // Error saving data
    }
  };




  const UpdateOrderData = async () =>{ // updating order
    if(!orderData.orderId){
      console.error("Order Id missing");
      return;
    }

    const orderTicket = {
      ...orderData,
      orderItems: orderData.orderItems.map(item => ({
        menuItemId: item.menuItemId,
        menuItemName: item.menuItemName,
        price: item.price,
        qty: item.qty,
        notes: item.notes,
        menuItemStatus: item.menuItemStatus,  
      })),
    };

    try {
      const response = await fetch(`http://192.168.57.221:3000/api/orders/${orderData.orderId}`, {  // post order 
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderTicket),
      });
      if(response.ok){
        Alert.alert("Order updated succesfully")
        orderNoteModalVisible(false);
        navigation.navigate('Floor', {bookedTables :updateBookedTable });
      }else{
        const errorMessage=await response.text();
        console.error('Error updating order:', errorMessage);
        alert.alert('Error', 'Unable to update the order');
      }
      
    } catch (error) {
       consolelog('error updating order ;',error)
       Alert.alert('Error', 'An error occurred while updating the order');
    }
  };




  const handleSelectItem = (item) => {
    setSelectedItem(item); // choose item 
    setMenuItemNote(''); // create note 
    setModalVisible(true); // modal open
  };

  const handleConfirmOrder = () => {
    const existingItemIndex = orderData.orderItems.findIndex(item => item.menuItemId === selectedItem.id); // if item have in  order list 
    const updatedOrderItems = [...orderData.orderItems];  // add order item 

    if (existingItemIndex !== -1) {  // push inside  [] if existing 
      updatedOrderItems[existingItemIndex] = {
        ...updatedOrderItems[existingItemIndex],
        qty: updatedOrderItems[existingItemIndex].qty + 1,
        notes: menuItemNote,
      };
    } else { // if not existing push 
      updatedOrderItems.push({
        menuItemId: selectedItem.id,
        menuItemName: selectedItem.name,
        price: selectedItem.price,
        qty: 1,
        notes: menuItemNote,
        menuItemStatus: 'ORDERED',
      });
    }

    setOrderData(prevData => ({
      ...prevData,
      orderItems: updatedOrderItems,
      notes: orderNote
    }));
    setModalVisible(false);
  };

  const incrementOrderQty = (menuItemId) => {
    setOrderData(prevData => ({
      ...prevData,
      orderItems: prevData.orderItems.map(item =>
        item.menuItemId === menuItemId ? { ...item, qty: item.qty + 1 } : item
      ),
    }));
  };

  const decrementOrderQty = (menuItemId) => {
    setOrderData(prevData => ({
      ...prevData,
      orderItems: prevData.orderItems
        .map(item => (item.menuItemId === menuItemId ? { ...item, qty: item.qty - 1 } : item))
        .filter(item => item.qty > 0), // if item is zero delete
    }));
  };

  const handleDeleteOrderItem = (menuItemId) => { // delete order with  button
    setOrderData(prevData => ({
      ...prevData,
      orderItems: prevData.orderItems.filter(item => item.menuItemId !== menuItemId),
    }));
  };
  
  const statuMap={
    PENDING: 'PAID',
    PAID: 'CANCEL',
    CANCEL: 'PENDING',
  }

  const toggleOrderStatus = () => { // set up for order status
    setOrderData(prevData => ({
      ...prevData,
      orderStatus: statuMap[prevData.orderStatus],
    }));
    if (orderData.orderStatus === "PENDING") {
      bookedTables.push(tableId);
      navigation.navigate('Floor', {
        bookedTables: bookedTables,
      });
    } else {
      navigation.navigate('Floor', {
        bookedTables: bookedTables,
      });
    }
  };

  return (
    <View style={styles.container}>{/* all screen container  */}

      {/* Modal for item notes */}
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add a note for {selectedItem?.name}</Text>
            <TextInput style={styles.noteInput} placeholder="Enter your note" value={menuItemNote} onChangeText={setMenuItemNote}/>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{ marginRight: 10 }}>
                <Button title="Confirm Order" onPress={handleConfirmOrder}/>
              </View>
              <View style={{ marginLeft: 10 }}>
                <Button title="Cancel" onPress={() => setModalVisible(false)}/>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal for Order notes */}
      <Modal animationType="slide" transparent={true} visible={orderNoteModalVisible} onRequestClose={() => setOrderNoteModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add a note for the entire order</Text>
            <TextInput style={styles.noteInput} placeholder="Order note" value={orderNote} onChangeText={setOrderNote} />
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal: 10}}>
              <View style={{marginRight:10}}>
                <Button title="Submit Order" onPress={async () => {
                    if (orderData?.orderItems?.length > 0) {
                      await pushOrderData();
                    } else {
                      Alert.alert('Error', 'No items in the order');
                    }}}/>
            </View>
            <View style={{marginRight:10}}>
              <Button title="Cancel" onPress={() => setOrderNoteModalVisible(false)} />
            </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* Menu Section */}
      <View style={styles.menuSection}>{/* menu container */}
        <Text style={styles.header}>Menu Items</Text>
        <ScrollView style={styles.menuList}>
          {menuItems.map((item) => ( 
            <Pressable
              key={item._id}
              style={styles.item}
              onPress={() => handleSelectItem(item)} >
              <View style={styles.itemContent}>
                <Text style={styles.itemName}>{item.name}</Text>{/* item name*/}
                <Text style={styles.itemPrice}>{/* item price */}
                  ${typeof item.price === 'number' ? item.price.toFixed(2) : 'N/A'}{/* 12.00 */}
                </Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>

        {/* Manage Button */}
        <Pressable style={styles.manageButton} onPress={() => navigation.navigate('Admin')}>{/* navigation to admin screen */}
          <Text style={styles.manageButtonText}>Manage Menu Items</Text>
        </Pressable>
      </View>

      {/* Order Summary Section */}
      <View style={styles.orderSection}>
        <Text style={styles.header}>Current Order</Text>
        <Text>Table ID:{tableId}</Text> 
        <ScrollView>
          {orderData?.orderItems?.map((orderItem, index) => (
            <View key={index} style={styles.orderItem}>
              <Text>{orderItem.menuItemName} x {orderItem.qty}</Text>
              {orderItem.notes ? <Text style={styles.noteText}>Note: {orderItem.notes}</Text> : null}
              <View style={styles.buttons}>
                <Pressable style={styles.button} onPress={() => incrementOrderQty(orderItem.menuItemId)}>
                  <Text style={styles.buttonText}>+</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => decrementOrderQty(orderItem.menuItemId)}>
                  <Text style={styles.buttonText}>-</Text>
                </Pressable>
                <Pressable style={styles.deleteButton} onPress={() => handleDeleteOrderItem(orderItem.menuItemId)}>
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </Pressable>
              </View>
            </View>))}
        </ScrollView>

        {/* Order Summary */}
        <SafeAreaView>
          <View style={styles.orderSummary}>
            <Text style={styles.orderSummaryText}>Status: {orderData.orderStatus}</Text>

            <Pressable onPress={toggleOrderStatus} style={styles.statusToggleButton}>
            <Text style={styles.statusToggleButtonText}>
              Toggle to {statuMap[orderData.orderStatus]}
              </Text>
            </Pressable>
            <Text style={styles.orderSummaryText}>Total Items: {orderData.orderItems.reduce((total, item) => total + item.qty, 0)}</Text>{/* calculate item  */}
            <Text style={styles.orderSummaryText}>Total Cost: ${orderData.orderItems.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2)}</Text>{/* calculate price  */}
          </View>
        </SafeAreaView>

        {/* Submit Button */}
        <View style={styles.submitContainer}>
          <Pressable onPress={() => setOrderNoteModalVisible(true)} style={styles.submitButton}>{/* open order modal*/} 
            <Text style={styles.submitButtonText}>Submit Order</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const createStyles = (isTablet) => StyleSheet.create({
  container: { flex: 1, flexDirection: isTablet ? 'row' : 'column', padding: 10, justifyContent: 'center' },
  
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  
  modalView: { width: '80%', backgroundColor: 'white', borderRadius: 10, padding: 20, alignItems: 'center' },
  
  modalText: { marginBottom: 15, textAlign: 'center', fontSize: 18 },
  
  noteInput: { height: 40, borderColor: '#ccc', borderWidth: 1, paddingHorizontal: 10, backgroundColor: '#fff', marginBottom: 20, width: '100%' },
  
  menuSection: { width: isTablet ? '70%' : '100%', height: isTablet ? '100%' : '50%', padding: 10, backgroundColor: '#fff', borderRadius: 10, borderWidth: 1, borderColor: '#000', marginBottom: 20 },
 
  menuList: { flex: 1 },
 
  orderSection: { width: isTablet ? '30%' : '100%', height: isTablet ? '100%' : '50%', padding: 10, backgroundColor: '#fff', borderRadius: 10, borderWidth: 1, borderColor: '#000' },
  
  header: { fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  
  item: { padding: 10, marginVertical: 4, backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#cccccc', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  
  buttons: { flexDirection: 'row', alignItems: 'center' },
  
  button: { marginHorizontal: 5, padding: 5, backgroundColor: '#ddd', borderRadius: 5 },
  
  buttonText: { fontSize: 18 },
  
  deleteButton: { padding: 5, backgroundColor: '#ff6347', borderRadius: 5 },
  
  deleteButtonText: { color: '#fff', fontWeight: 'bold' },
  
  orderItem: { padding: 10, marginVertical: 4, backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#cccccc', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  
  noteText: { fontSize: 14, color: '#888', fontStyle: 'italic' },
  
  orderSummary: { marginTop: 10, padding: 10 },
  
  orderSummaryText: { fontSize: 16, fontWeight: 'bold' },
  
  statusToggleButton: { padding: 10, backgroundColor: '#2196F3', borderRadius: 5, marginTop: 10 },
  
  statusToggleButtonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
  
  submitContainer: { marginTop: 20, alignItems: 'center' },
  
  submitButton: { paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#4CAF50', borderRadius: 5 },
  
  submitButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  
  manageButton: { marginTop: 10, padding: 10, backgroundColor: '#1E90FF', borderRadius: 5, alignItems: 'center' },
  
  manageButtonText: { color: '#fff', fontWeight: 'bold' },
});

export default OrderScreen;