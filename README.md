# Bean Scene Mobile App (React Native + Expo)

A cross-platform mobile app for the Bean Scene restaurant, built with **React Native** using **Expo**. The app supports menu browsing and management, ordering, payments.

---

## 🚀 Getting Started

### 📦 1. Install Dependencies

```
npm install
```

### 🌐 2. Set Up Local Network Access

In **PowerShell**, run the following command (replace with your machine's local IP from `ipconfig`):

```
$env:REACT_NATIVE_PACKAGER_HOSTNAME="your.local.ip.address"
```

This ensures the app can access your backend server over your local network.

### ▶️ 3. Start the Expo Server

```
npx expo start
```

You can then:
- Scan the QR code to run the app on your **iOS** or **Android** device (Expo Go)
- Run it in a **web browser**

---

## 📁 App Structure

All screens are located in the `app/` folder:

| File            | Page         |
|-----------------|--------------|
| `index.js`      | Home         |
| `menu.js`       | Menu         |
| `order.js`      | Order        |
| `reservation.js`| Reservation  |

To add a new screen:

1. **Create a JS file** in the `app/` folder, e.g. `settings.js`
2. **Import it in `App.js`:**

   ```
   import SettingsScreen from './app/settings';
   ```

3. **Add it to the tab navigator:**

   ```
   <Tab.Screen name="Settings" component={SettingsScreen} />
   ```

---

## ⚠️ API Endpoint Configuration

If you're using Android Studio (or a physical device), ensure that your API base URL in the frontend is set correctly:

```
http://<your-ip-address>:3000/api/
```

Replace `<your-ip-address>` with your actual local IP. This allows your mobile app to connect to the Express backend running on your PC.
Note: You will need the express server that was developed for this program which is in a separate repository 'bean-scene-server'.

---

## 🧪 Tech Stack

- React Native w/ Expo
- React Navigation (Bottom Tab Navigator)
- Fetch (for API calls)
- Backend: Express.js & MongoDB (separate server)

---

## 📄 License

This project is licensed under the MIT License.
