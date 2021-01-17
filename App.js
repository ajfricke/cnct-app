// import React, { Component } from 'react'
// import { StyleSheet, Text, View } from 'react-native'
// export default class Splash extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Hello, this is a test!</Text>
//       </View>
//     )
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 18,
//     color: 'black'
//   }
// })
import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from '@react-navigation/drawer';
import { AppLoading } from 'expo';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import SignUp2 from './components/SignUp2.js';
import MainPage from './components/MainPage.js';
//import Register from './Screens/Register';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="AuthStack" headerMode="none">
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignUp2" component={SignUp2} />
      <Stack.Screen name="MainPage" component={MainPage} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignUp2" component={SignUp2} />
      <Stack.Screen name="MainPage" component={MainPage} />
    </Stack.Navigator>
  );
}

export default class App extends React.Component {
  state = {
    isReady: false,
    user: null,
  };
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    );
  }
  async _cacheResourcesAsync() {
    return true;
  }
}
