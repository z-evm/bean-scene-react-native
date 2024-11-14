**Show Menu Items**
----
  Returns json data about all Menu Items.

* **URL**

  /menu-items

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[
    {
        "_id": "673196de98465359253af226",
        "name": "Avocado Toast",
        "description": "...",
        "price": 12.5,
        "category": "BREAKFAST",
        "ingredients": [
            "sourdough",
            "avocado",
            "eggs"
        ],
        "dietary": [
            "vegetarian"
        ],
        "available": true,
        "__v": 0,
        "createdAt": "2024-11-11T05:32:14.958Z",
        "updatedAt": "2024-11-11T05:32:14.958Z"
    },
    {
        "_id": "673196de98465359253af228",
        "name": "Caesar Salad",
        "description": "...",
        "price": 18,
        "category": "LUNCH",
        "ingredients": [
            "lettuce",
            "chicken",
            "parmesan",
            "croutons"
        ],
        "dietary": [
            "gluten-free"
        ],
        "available": true,
        "__v": 0,
        "createdAt": "2024-11-11T05:32:14.958Z",
        "updatedAt": "2024-11-11T05:32:14.958Z"
    },
    {
        "_id": "673196de98465359253af229",
        "name": "Grilled Chicken Wrap",
        "description": "...",
        "price": 12.9,
        "category": "LUNCH",
        "ingredients": [
            "wholemeal wrap",
            "chicken",
            "salad"
        ],
        "dietary": [
            "dairy-free"
        ],
        "available": true,
        "__v": 0,
        "createdAt": "2024-11-11T05:32:14.959Z",
        "updatedAt": "2024-11-11T05:32:14.959Z"
    },
    {
        "_id": "673196de98465359253af227",
        "name": "Pancakes with Maple Syrup",
        "description": "...",
        "price": 14,
        "category": "BREAKFAST",
        "ingredients": [
            "flour",
            "eggs",
            "milk",
            "maple syrup"
        ],
        "dietary": [
            "vegetarian"
        ],
        "available": true,
        "__v": 0,
        "createdAt": "2024-11-11T05:32:14.958Z",
        "updatedAt": "2024-11-11T05:32:14.958Z"
    },
    {
        "_id": "673196de98465359253af22b",
        "name": "Spaghetti Carbonara",
        "description": "...",
        "price": 22.5,
        "category": "DINNER",
        "ingredients": [
            "spaghetti",
            "egg yolk",
            "parmesan",
            "pancetta"
        ],
        "dietary": [
            "gluten"
        ],
        "available": true,
        "__v": 0,
        "createdAt": "2024-11-11T05:32:14.960Z",
        "updatedAt": "2024-11-11T05:32:14.960Z"
    },
    {
        "_id": "673196de98465359253af22a",
        "name": "Steak with Garlic Butter",
        "description": "...",
        "price": 29.9,
        "category": "DINNER",
        "ingredients": [
            "beef steak",
            "butter",
            "herbs"
        ],
        "dietary": [
            "gluten-free"
        ],
        "available": true,
        "__v": 0,
        "createdAt": "2024-11-11T05:32:14.960Z",
        "updatedAt": "2024-11-11T05:32:14.960Z"
    }
]`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Cannot GET /api/menu-items" }`


* **Sample Call:**

  ```javascript
    const fetchMenuItems = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/menu-items');
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

**Show Order**
----
  Returns json data an order based on order id.

* **URL**

  /orders/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "_id": "673196de98465359253af230",
    "orderId": 56,
    "tableNumber": "5",
    "orderStatus": "PAID",
    "notes": "Used for additional information about the order.",
    "orderItems": [
        {
            "menuItemId": {
                "_id": "673196de98465359253af226",
                "name": "Avocado Toast",
                "description": "...",
                "price": 12.5,
                "category": "BREAKFAST",
                "ingredients": [
                    "sourdough",
                    "avocado",
                    "eggs"
                ],
                "dietary": [
                    "vegetarian"
                ],
                "available": true,
                "__v": 0,
                "createdAt": "2024-11-11T05:32:14.958Z",
                "updatedAt": "2024-11-11T05:32:14.958Z",
                "orderItems": []
            },
            "menuItemName": "Avocado Toast",
            "price": 12.5,
            "qty": 2,
            "notes": "Remove avocado",
            "menuItemStatus": "SERVED",
            "_id": "673196de98465359253af231",
            "orderItems": []
        },
        {
            "menuItemId": {
                "_id": "673196de98465359253af227",
                "name": "Pancakes with Maple Syrup",
                "description": "...",
                "price": 14,
                "category": "BREAKFAST",
                "ingredients": [
                    "flour",
                    "eggs",
                    "milk",
                    "maple syrup"
                ],
                "dietary": [
                    "vegetarian"
                ],
                "available": true,
                "__v": 0,
                "createdAt": "2024-11-11T05:32:14.958Z",
                "updatedAt": "2024-11-11T05:32:14.958Z",
                "orderItems": []
            },
            "menuItemName": "Pancakes with Maple Syrup",
            "price": 14,
            "qty": 1,
            "menuItemStatus": "CANCELLED",
            "_id": "673196de98465359253af232",
            "orderItems": []
        }
    ],
    "orderDate": "2024-11-11T05:32:14.988Z",
    "__v": 0,
    "createdAt": "2024-11-11T05:32:14.991Z",
    "updatedAt": "2024-11-11T05:32:14.991Z"
}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** '{ "error": "Order not found."}'


* **Sample Call:**

  ```javascript
    const fetchOrderData = async (orderId) => {
    try{
      const response=await fetch(`http://localhost:3000/api/orders/${orderId}`);
      if(response.ok){
        const data=await response.json()
        setOrderData(data);
        setOrderNote(data.notes || ''); 
      }else{
        console.error('Error fetching order data from server:', response.statusText);
        Alert.alert('Error', 'Could not fetch the order data from server');
      }
    }catch (error){ 
      console.error('Error fetching order data:', error);
      Alert.alert('Error', 'an error accored while fetching the order data');
    }
  };

**Create Order**
----
  Creates order 

* **URL**

  /orders

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** '{ "success": "Order successfully created"}'
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** '{ "error": "Error creating order"}'


* **Sample Call:**

  ```javascript
    const pushOrderData = async () => { // define order data structure 
    const orderTicket = {
      orderDate: orderData.orderDate,
      orderStatus: orderData.orderStatus,
      tableNumber: orderData.tableNumber,
      notes: orderNote || '', // Directly use `orderNote`
      orderItems: orderData.orderItems.map(item => ({
        menuItemId: item.menuItemId,
        menuItemName: item.menuItemName,
        price: item.price,
        qty: item.qty,
        notes: item.notes || '', // Item-specific notes
        menuItemStatus: item.menuItemStatus,
      })),
    };
  
    try {
      const response = await fetch('http://localhost:3000/api/orders', {  // post order 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderTicket),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        Alert.alert('Success', 'Order successfully created');
        resetOrderData();
      
        setOrderData(prevData => ({
          ...prevData,
          orderId: responseData.orderId // Use parsed response to set `orderId`
        }));

       
        setOrderNoteModalVisible(false); //close the modeal 

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

**Add New Menu Item**
----
  Adding a new menu item to the app

* **URL**

  /menu-items

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   NONE

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** '{ "success": "Menu Item successfully added"}'
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** '{ "error": "Failed  to add menu item"}'

* **Sample Call:**

  ```javascript
    response = await fetch('http://192.168.0.249:3000/api/menu-items', {
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


**Update Menu Item**
----
  Update details of a menu item

* **URL**

  /menu-items/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
 `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** '{
    "_id": "6733e3a6b9ec9a3b4903696e",
    "name": "Steak with Garlic Butter",
    "description": "...",
    "price": 29.9,
    "category": "DINNER",
    "ingredients": [
        "beef steak",
        "butter",
        "herbs"
    ],
    "dietary": [
        "gluten-free"
    ],
    "available": true,
    "__v": 0,
    "createdAt": "2024-11-12T23:24:22.093Z",
    "updatedAt": "2024-11-14T03:28:54.327Z"
}'
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** '{ "error": "Failed to update menu item"}'

* **Sample Call:**

  ```javascript
    response = await fetch(`http://192.168.0.249:3000/api/menu-items/${currentId}`, {
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

**Update Order**
----
  Updates the order's details based on the order id

* **URL**

  /orders/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** '{ "success": "Order successfully updated"}'
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** '{ "error": "Error updating order"}'

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    const UpdateOrderData = async (orderId) =>{ 
    if(!orderId){
      console.error("Order Id missing");
      return;
    }

    const orderTicket = {
      orderId: orderId,
      orderDate: orderData.orderDate,
      orderStatus: orderData.orderStatus,
      tableNumber: orderData.tableNumber,
      notes: orderData.notes || "", // Default empty string if no notes
      orderItems: orderData.orderItems.map(item => ({
        menuItemId: item.menuItemId,
        menuItemName: item.menuItemName,
        price: item.price,
        qty: item.qty,
        notes: item.notes || "", // Default empty string if no notes
        menuItemStatus: item.menuItemStatus
      }))
    };
    

    try {
      const response = await fetch(`http://localhost:3000/api/orders/${orderId}`, {  // post order 
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderTicket),
      });
      if(response.ok){
        Alert.alert("Order updated succesfully")

        setOrderNoteModalVisible(false); // close to modal
        resetOrderData();
       
      }else{
        const errorMessage=await response.text();
        console.error('Error updating order:', errorMessage);
        alert.alert('Error', 'Unable to update the order');
      }
      
    } catch (error) {
       console.log('error updating order ;',error)
       Alert.alert('Error', 'An error occurred while updating the order');
    }
  };

  