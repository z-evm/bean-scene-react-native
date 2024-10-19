# bean-scene-app-zach-alex

1) type in "npm install" to install all the required dependencies for the project.
2) type in $env:REACT_NATIVE_PACKAGER_HOSTNAME=your.local.ip.address to make sure that the app can run using your network on your local environment (replace your.local.ip.address with your real ip address which can be found when you type in ipconfig in your cmd prompt)
3) type in npx expo start to get the app running in expo. You will see the options to either run the app on your iOS devices via a QR code, android device or web browser.

# pages
- the App's pages can be edited from the app folder
-> index.js - Home Page
-> menu.js - Menu Page
-> order.js - Order Page
-> reservation.js - Reservation page
- Once you create a page in a .js file format in the app folder:
1) You need to import that page to the App.js file e.g.:

import HomeScreen from './app/index';

2) Within the <Tab.Navigator> HTML tag, add the page that you created to the bottom navigation bar like this:

<Tab.Screen name="Home" component={HomeScreen} />

- the name attribute corresponds to the Name of the page that is shown on the screen
- the component attribute corresponds to the name of the variable that you declared in step 1 with the curly braces