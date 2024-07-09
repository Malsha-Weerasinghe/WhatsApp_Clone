import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WelcomeArt from '../../../assets/svg/welcome_page_art.svg'

const WelcomePage = () => {
  return (
    <View style= {styles.root}>
      <Text style= {styles.titleStyle}>Welcome to WhatsApp</Text>
      <WelcomeArt/>
    </View>
  )
}

export default WelcomePage;

const styles = StyleSheet.create({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    height: "100%",
    paddingTop: "32%",
    paddingBottom: 100,
  },
  titleStyle: {
    color: "#000",
    fontSize: 28,
    fontWeight: "500",
  }
});