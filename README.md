This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```
# Map Tracking Application

## Overview

This application focuses on providing a seamless, real-time location tracking experience. The main objective was to develop an intuitive and user-friendly interface with smooth animations and an efficient networking structure. Below are the key aspects and thought processes that guided the development of the app.

## Key Design and Technical Decisions

### 1. **Smooth Map Rendering with Custom Marker**

The core of the user experience revolves around the map's smooth performance and its ability to provide accurate feedback. The map was designed to load efficiently, rendering the user’s location in real-time. To enhance the map's visual appeal, we opted for a **custom car image marker** instead of a standard pin. This custom approach helps make the location tracking more intuitive and distinct for the users, offering a modern and visually appealing experience.

### 2. **Optimized Networking and Location Updates**

A crucial part of the application’s functionality is its ability to handle location updates efficiently. The logic was structured so that the app first makes an API call to retrieve the **initial location**. This ensures that the user starts with accurate, pre-fetched data before initiating the WebSocket connection. The WebSocket connection is established only **after** the initial location data has been retrieved. This ensures optimal resource usage and prevents unnecessary network calls.

Once the WebSocket connection is live, it listens for updates on the user’s location every **3 seconds**. This strategy keeps the app responsive while ensuring minimal network overhead.

### 3. **Smooth Marker Animations**

An important design consideration was the smoothness of the location marker update. The update to the car’s position should not appear jumpy or abrupt. To achieve this, we incorporated **animation transitions** for the marker. This way, the car's movement from one location to another is fluid and natural. The marker smoothly transitions from its previous location to the new one, enhancing the user experience and making the app feel more polished.

### 4. **Networking Structure with Axios**

To manage networking effectively and maintain clean code, an instance of **Axios** was created to handle API requests. The Axios instance is encapsulated within the `src/networking` folder, centralizing all API calls. This approach helps ensure scalability and maintainability by avoiding duplication and making the networking logic more modular and reusable.

### 5. **Folder Structure and Maintainability**

The application’s structure is designed with **maintainability** and **scalability** in mind. We have organized the `src/` directory into several utility and functional folders to ensure a clean and efficient workflow:

- **Common Components:** Reusable components such as buttons, headers, and card elements are placed here.
- **Constants:** A dedicated folder for app-wide constants, such as URLs, error messages, and configuration settings.
- **Theme:** A folder for defining and managing the app’s theme, including colors, fonts, and styles, ensuring consistency across the app.
- **Networking:** Contains all networking logic, including Axios instances and API call utilities.

This structured approach allows for easier debugging, clearer code organization, and future scalability as the app grows in complexity.

## Conclusion

The design and architecture of this application focus on providing a **seamless user experience** while ensuring **efficiency and maintainability**. With a smooth map rendering, custom car marker, optimized networking, and fluid marker animations, the app delivers a polished, real-time location tracking experience. The clean folder structure and use of utility folders further ensure that the codebase remains maintainable as the application evolves.
