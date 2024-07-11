import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LoadingPage from '@/components/Pages/LoadingPage/LoadingPage'
import WelcomePage from '@/components/Pages/WelcomePage/WelcomePage';
import { StatusBar } from 'expo-status-bar';
import OTPPage from '@/components/Pages/LoginPage/OTPPage';
import LoginPage from '@/components/Pages/LoginPage/LoginPage';
import AppleStyleSwipeableRow from '@/components/Pages/Chat/AppleStyleSwipeableRow';
import ChatMessageBox from '@/components/Pages/Chat/ChatMessageBox';
import NewChat from '@/components/Pages/NewChat/new-chat';
import CallPage from '@/components/Pages/Call/CallPage';
import HomePage from '@/components/Pages/HomePage/HomePage';
import ChatScreen from '@/components/Pages/ChatScreen/ChatScreen';


export default function index() {
  return (
    <View style={styles.container}>
       {/* <LoadingPage/>  */}
      {/* <WelcomePage/> */}
      {/* <LoginPage/> */}
      {/* <OTPPage/> */}
      {/* <NewChat/> */}
      {/* <HomePage/> */}
      {/* <CallPage/> */}
      <ChatScreen/>
      {/* <StatusBar style="auto"/> */}
    </View>
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
