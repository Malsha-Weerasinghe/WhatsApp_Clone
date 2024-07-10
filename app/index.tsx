import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LoadingPage from '@/components/Pages/LoadingPage/LoadingPage'
import WelcomePage from '@/components/Pages/WelcomePage/WelcomePage';
import { StatusBar } from 'expo-status-bar';
import OTPPage from '@/components/Pages/LoginPage/OTPPage';
import LoginPage from '@/components/Pages/LoginPage/LoginPage';
import HomePage from '@/components/Pages/HomePage/HomePage';
import CardItem from '@/components/Pages/HomePage/CardItem';


export default function index() {
  return (
    <View style={styles.container}>
       {/* <LoadingPage/>  */}
      {/* <WelcomePage/> */}
      {/* <LoginPage/> */}
      {/* <OTPPage/> */}
      {/* <HomePage/> */}
      <CardItem/>
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
