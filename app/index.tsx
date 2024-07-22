import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LoadingPage from '@/components/Pages/LoadingPage/LoadingPage'
import WelcomePage from '@/components/Pages/WelcomePage/WelcomePage';
import OTPPage from '@/components/Pages/LoginPage/OTPPage';
import LoginPage from '@/components/Pages/LoginPage/LoginPage';
import NewChat from '@/components/Pages/NewChat/NewChat';
import CallPage from '@/components/Pages/Call/CallPage';
import HomePage from '@/components/Pages/HomePage/HomePage';
import ChatScreen from '@/components/Pages/ChatScreen/ChatScreen';
import Updatespage from '@/components/Pages/UpdatesPage/Updatespage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const stack = createNativeStackNavigator()

export default function index() {
  return (
    <NavigationContainer independent={true}>
    <stack.Navigator initialRouteName="Home">
      <stack.Screen name="LoadingPage" component={LoadingPage} options={{ headerShown: false }} />
      <stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }} />
      <stack.Screen name="OTPPage" component={OTPPage} options={{ headerShown: false }} />
      <stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
      <stack.Screen name="CallPage" component={CallPage} options={{ headerShown: false }} />
      <stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
      <stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />
      <stack.Screen name="NewChat" component={NewChat} options={{ headerShown: false }} />
    </stack.Navigator>
  </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
