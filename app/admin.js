import React, { useState, useMemo, useEffect } from 'react';
import {View,Text,TextInput,ScrollView,TouchableOpacity,StyleSheet,FlatList,Dimensions, Pressable,} from 'react-native';

const AdminScreen = () => {
  const [menuItems, setMenuItems] = useState([]); // Store menu items fetched from backend
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    ingredients: '',
    dietary: '',
  });

  const [isEditing, setIsEditing] = useState(false); // Track if editing mode is on
  const [currentId, setCurrentId] = useState(null); // Track _id for the item being edited



  const windowWidth = Dimensions.get('window').width; // get screen width 
  const isTablet = windowWidth >= 768; // table size 
  const styles = useMemo(() => createStyles(isTablet), [isTablet]); // 


 

  useEffect(() => {
    fetchMenuItems(); // Fetch items on initial load
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await fetch('http://192.168.57.221:3000/api/menuItems');
      if (response.ok) {
        const data = await response.json();
        setMenuItems(data);
      } else {
        console.error('Error fetching menu items:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching menu items:', error);
    }
  };

  const handleSelectItem = (item) => { // select item from list 
    setForm({
      ...item, 
      ingredients: item.ingredients.join(', '),
      dietary: item.dietary.join(', '),
    });
    setCurrentId(item._id);
    setIsEditing(true);
  };

  const handleDelete = async (_id) => {
    try {
      const response = await fetch(`http://192.168.57.221:3000/api/menuItems/${_id}`, { 
              method: 'DELETE' 
             }); // search with Id
      if (response.ok) {
        setMenuItems(menuItems.filter((item) => item._id !== _id)); // updates the local state by filtering out the deleted item
        resetForm(); //reset input after the delete
      } else {
        console.error('Error deleting menu item:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting menu item:', error);
    }
  };

  const handleSubmit = async () => {
    const newItem = {
      ...form,
      ingredients: form.ingredients.split(',').map((ingredient) => ingredient.trim()), // stoare as array
      dietary: form.dietary.split(',').map((diet) => diet.trim()), // stoare as array
    };
  
    try {
      let response;
      if (isEditing && currentId) { // if editing true and current id have update menu item 
        // Update existing item
        response = await fetch(`http://192.168.57.221:3000/api/menuItems/${currentId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newItem),
        });
  
        if (response.ok) {
          const updatedItem = await response.json();
          setMenuItems((prevItems) =>
            prevItems.map((item) => (item._id === currentId ? updatedItem : item))
          );
        }
      }
      // Add new item
       else {
        response = await fetch('http://192.168.57.221:3000/api/menuItems', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newItem),
        });
  
        if (response.ok) {
          const savedItem = await response.json();
          setMenuItems((prevItems) => [...prevItems, savedItem]);
        }
      }
  
      resetForm(); // reset 
    } catch (error) {
      console.error('Error saving menu item:', error);
    }
  };

  const resetForm = () => {
    setForm({ name: '', description: '', price: '', category: '', ingredients: '', dietary: '' });
    setIsEditing(false);  // editting false when we choose item will be true .
    setCurrentId(null);
  };

  return (
    <View style={styles.container}> 
      <View style={styles.formSection}> 
        <Text style={styles.header}>Menu Item Details</Text>
        <ScrollView> 
          <TextInput style={styles.input} placeholder="Name" value={form.name} onChangeText={(text) => setForm({ ...form, name: text })} />
          <TextInput style={styles.input} placeholder="Description" value={form.description} onChangeText={(text) => setForm({ ...form, description: text })} />
          <TextInput
            style={styles.input}
            placeholder="Price"
            value={form.price ? form.price.toString() : ''} 
            keyboardType="numeric"                         
            onChangeText={(number) => setForm({ ...form, price: Number(number) })} />       
          <TextInput style={styles.input} placeholder="Category" value={form.category} onChangeText={(text) => setForm({ ...form, category: text })} />
          <TextInput style={styles.input} placeholder="Ingredients (comma separated)" value={form.ingredients} onChangeText={(text) => setForm({ ...form, ingredients: text })} />
          <TextInput style={styles.input} placeholder="Dietary (comma separated)" value={form.dietary} onChangeText={(text) => setForm({ ...form, dietary: text })} />
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>{isEditing ? 'Update' : 'Add'}</Text>
          </Pressable>
        </ScrollView>
      </View>
      <View style={styles.listSection}>
        <Text style={styles.header}>Menu Items</Text>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item._id.toString()} // get item with _Id
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text onPress={() => handleSelectItem(item)} style={styles.itemText}>
                {item.name} - ${item.price}
              </Text>
              <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item._id)}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
          extraData={menuItems} // Force FlatList to re-render when menuItems changes
        />
      </View>
    </View>
  );
};

const createStyles = (isTablet) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: isTablet ? 'row' : 'column',
      padding: 20,
      backgroundColor: '#fff',
    },
    formSection: {
      flex: 1,
      marginRight: isTablet ? 20 : 0,
      marginBottom: isTablet ? 0 : 20,
    },
    listSection: {
      flex: 1,
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    input: {
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#cccccc',
      padding: 10,
      borderRadius: 5,
    },
    button: {
      backgroundColor: '#4CAF50',
      padding: 10,
      alignItems: 'center',
      borderRadius: 5,
      marginVertical: 5,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    listItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#f0f0f0',
      marginBottom: 5,
      borderRadius: 5,
    },
    itemText: {
      flex: 1,
    },
    deleteButton: {
      backgroundColor: '#ff6347',
      padding: 5,
      borderRadius: 5,
    },
    deleteButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });

export default AdminScreen;
