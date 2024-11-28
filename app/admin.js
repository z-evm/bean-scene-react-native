import React, { useState, useMemo, useEffect } from 'react';
import {View,Text,TextInput,ScrollView,StyleSheet,FlatList,Dimensions, Pressable, Alert, Button, Linking, Platform} from 'react-native';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
/**
 * This shows the Admin screen for the app
 * 
 */
const AdminScreen = () => {
  const [menuItems, setMenuItems] = useState([]); // Store menu items fetched from backend
  const [errors, setErrors] = useState({});
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

/**
 * This function fetches the menu items from the database and display these in the Admin page
 */

  const fetchMenuItems = async () => {
    try {
      const response = await fetch('https://api.lizard.dev.thickets.onl/api/menu-items');
      if (response.ok) {
        const data = await response.json();
        setMenuItems(data);
      } else {
        console.error('Error fetching menu items:', response.statusText);
        Alert.alert('Error fetching menu items from server:')
      }
    } catch (error) {
      console.error('Error fetching menu items:', error);
      Alert.alert('Network','Error fetching menu items:', error)
    }
  };

/**
 * This function handles the selection of the menu item
 * @param {*} item // this parameter is for the menu item
 */

  const handleSelectItem = (item) => { // select item from list 
    setForm({
      ...item, 
      ingredients: item.ingredients.join(', '),
      dietary: item.dietary.join(', '),
    });
    setCurrentId(item._id);
    setIsEditing(true);
  };

/**
 * This function deletes the menu item from the menu item list based on id
 * @param {int} _id // id of the menu item
 */

  const handleDelete = async (_id) => {
    try {
      const response = await fetch(`https://api.lizard.dev.thickets.onl/api/menu-items/${_id}`, { 
              method: 'DELETE' 
             }); // search with Id
      if (response.ok) {
        setMenuItems(menuItems.filter((item) => item._id !== _id)); // updates the local state by filtering out the deleted item
        resetForm(); //reset input after the delete
      } else {
        console.error('Error deleting menu item:', response.statusText);
        Alert.alert("Error deleting  the menu item ")
      }
    } catch (error) {
      console.error('Error deleting menu item:', error);
    }
  };

/**
 * This function handles the submission of the menu item after details update or adding new menu item
 */

  
    const handleInputChange = (field, value) => {
      setForm({ ...form, [field]: value });
    
      // Clear the error for the specific field being modified
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[field]; // Remove the error for the current field
        return updatedErrors;
      });
    };
    

    const handleSubmit = async () => {
      const newErrors = {};
    
      if (!form.name.trim()) {
        newErrors.name = 'Name is required.';
      }
    
      if (!form.description.trim()) {
        newErrors.description = 'Description is required.';
      }
    
      if (!form.price || isNaN(form.price) || form.price <= 0 || !/^\d+(\.\d{1,2})?$/.test(form.price)) { // regular expressing 
        newErrors.price = 'Price must be a positive number with up to two decimal places ';
      }
      
    
      if (!allowedCategories.includes(form.category.toUpperCase())) {
        newErrors.category = 'Invalid category. Allowed: BREAKFAST, LUNCH, DINNER, BEVERAGE, DESSERT.';
      }
    
      const ingredientsArray = form.ingredients
        .split(',')
        .map((ingredient) => ingredient.trim())
        .filter((ingredient) => ingredient);
      if (ingredientsArray.length === 0) {
        newErrors.ingredients = 'Ingredients cannot be empty.';
      }
    
      const dietaryArray = form.dietary
        .split(',')
        .map((dietary) => dietary.trim())
        .filter((dietary) => dietary);
      if (dietaryArray.length === 0) {
        newErrors.dietary = 'Dietary information cannot be empty.';
      }
    
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors); // Set errors in state
        return; // Stop further execution
      }
    
      // No errors: Proceed to submit
      const newItem = {
        ...form,
        ingredients: ingredientsArray,
        dietary: dietaryArray,
      };
  
    try {
      let response;
      if (isEditing && currentId) { // if editing true and current id have update menu item 
        // Update existing item
        response = await fetch(`https://api.lizard.dev.thickets.onl/api/menu-items/${currentId}`, {
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
        else{
          console.error('Failed  to update menu item:', response.statusText);
          Alert.alert("Update Error","Failed  to update menu item ")
        }
      }
      // Add new item
       else {
        response = await fetch('https://api.lizard.dev.thickets.onl/api/menu-items', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newItem),
        });
  
        if (response.ok) {
          const savedItem = await response.json();
          setMenuItems((prevItems) => [...prevItems, savedItem]);
        }
        else{
          console.error('Failed  to add menu item:', response.statusText);
          Alert.alert("Add Error","Failed  to add menu item ")
        }
      }
  
      resetForm(); // reset 
    } catch (error) {
      console.error('Network','Error saving menu item:', error);
      Alert.alert('Network',"Error saving the menu item ")
    }
  };

/**
 * This function resets the Add Menu item form
 */

const allowedCategories = ['BREAKFAST', 'LUNCH', 'DINNER', 'BEVERAGE', 'DESSERT'];

const handleCategoryChange = (text) => {
  // Update the category in form
  setForm({ ...form, category: text });


  // Validate input and set error message if invalid
  if (!allowedCategories.includes(text.toUpperCase())) {
    setError('Allowed categories: BREAKFAST, LUNCH, DINNER, BEVERAGE, DESSERT');
  } else {
    setError(''); // Clear error if valid
  }
};


  const resetForm = () => {
    setForm({ name: '', description: '', price: '', category: '', ingredients: '', dietary: '' });
    setIsEditing(false);  // editting false when we choose item will be true .
    setCurrentId(null);
  };

  const createPdf = async () => {
    const html = `
      <html>
      <head>
      <style>
      body{
      font-family:Arial;
      }
      .logo {
        width:600px;
        height:auto;
        display:block;
        margin:0 auto;
      }
      h1 { text-align:center; }
      table {
        width:100%;
      }
      table thead tr td, table tbody tr td{
        text-align:center;
      }
      table, th, td {
        border: 1px solid black;
      }
      table thead td {
        font-weight:bold;
      }
      </style>
      </head>
      <body>
      <img class="logo" src="../assets/bean-scene-logo.png" />
      <h1>Menu</h1>
      <table>
      <thead>
      <tr><td>Menu Item</td><td>Price ($)</td></tr>
      </thead>
      <tbody>
      ${menuItems.map(item => ` <tr><td>${item.name}</td><td>${item.price}</td></tr>`).join('')}
      </tbody>
      </table>
      </body>
      </html>
    `;
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({ html });
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  };
  
  const pdfUrl ='../assets/bean-scene-menu.pdf';
  return (
    <View style={styles.container}> 
      <View style={styles.formSection}> 
        <Text style={styles.header}>Menu Item Details</Text>
        <ScrollView>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={form.name}
            onChangeText={(text) => handleInputChange('name', text)}
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Description"
            value={form.description}
            onChangeText={(text) => handleInputChange('description', text)}
          />
          {errors.description && <Text style={styles.errorText}>{errors.description}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Price"
            value={form.price ? form.price.toString() : ''}
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange('price', text)}
          />
          {errors.price && <Text style={styles.errorText}>{errors.price}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Category"
            value={form.category}
            onChangeText={(text) => handleInputChange('category', text)} // Corrected key: 'category'
          />
          {errors.category && <Text style={styles.errorText}>{errors.category}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Ingredients (comma separated)"
            value={form.ingredients}
            onChangeText={(text) => handleInputChange('ingredients', text)} // Corrected key: 'ingredients'
          />
          {errors.ingredients && <Text style={styles.errorText}>{errors.ingredients}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Dietary (comma separated)"
            value={form.dietary}
            onChangeText={(text) => handleInputChange('dietary', text)} // Corrected key: 'dietary'
          />
          {errors.dietary && <Text style={styles.errorText}>{errors.dietary}</Text>}
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
            <View style={styles.listItemContainer}>
              <View style={styles.listItem}>
                <Text onPress={() => handleSelectItem(item)} style={styles.itemText}>
                  {item.name} - ${item.price}
                </Text>
                <Pressable style={styles.deleteButton} onPress={() => handleDelete(item._id)}>
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
          extraData={menuItems} 
        />
        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
        <Button  title='Download Menu Pdf' onPress={Platform.OS == "web" ? () => Linking.openURL(pdfUrl) : createPdf}/>
        </View>
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
      borderRadius: 10, borderWidth: 1, borderColor: '#000', marginBottom: 20
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
      padding: 15,           
      paddingBottom: 20,     
      borderRadius: 8,       
      fontSize: 16,          
      width: '100%',        
      backgroundColor: '#f9f9f9', 
    }
    ,
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
    listItemContainer: {
      marginBottom: 10, 
      padding: 10, 
      backgroundColor: '#f9f9f9', 
      borderRadius: 10,
      shadowColor: '#000', 
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 3, 
    },
    listItem: {
      flexDirection: 'row', 
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10, 
      borderRadius: 10, 
      borderWidth: 2, 
      borderColor: '#000', 
    },
    itemText: {
      flex: 1,
    },
    deleteButton: {
      backgroundColor: '#ff6347',
      padding: 5,
      borderRadius: 5,
    },
    pdfButton: {
      backgroundColor: '#ff6347',
      padding: 5,
      borderRadius: 5,
    },
    deleteButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    errorText: {
      color: 'red',
      fontSize: 12,
      marginBottom: 10,
    },
    
  });

export default AdminScreen;
