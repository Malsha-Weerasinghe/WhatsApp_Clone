import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackgroundImg from '../../assets/svg/loading_background.svg'
import LOGO from '../../assets/svg/logo_1.svg'

const LoadingPage = () => {
  return (
    <View style={styles.root}>
      <View>
      <BackgroundImg/>
      </View>
      <View style={styles.contentViewStyle}>
        <LOGO width="70" height="70"/>
        <Text> WhatsApp</Text>
      </View>
    </View>
  );
};

export default LoadingPage

const styles = StyleSheet.create({
  root: {
    position: "relative",
    width: "100%",
  },
  bgStyleView: {
    width: "100%",
  },
  contentViewStyle: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",

  }
});