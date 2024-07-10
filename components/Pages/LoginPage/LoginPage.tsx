import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Dropdown from '../../../assets/svg/dropdown.svg'

const LoginPage = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.contentStyle}>
        <Text style={styles.titleStyle}>Enter your phone number</Text>
        <Text style={styles.descStyle}>
          WhatsApp will need to verify your phone number.
          <Text style={styles.linkStyle} onPress={() => {}}>
            What's my number?
          </Text>{" "}
        </Text>
        <Pressable
          style={styles.countryButtonView}
          onPress={() => { }} >
          <Text style={styles.countryTextStyle}>Sri Lanka</Text>
          <Dropdown />
        </Pressable>
        <View style={styles.inputViewStyle}>
          <View style={styles.countryButtonView}>
            <Text style={styles.countryTextStyle}>+94</Text>
          </View>
          <TextInput style={styles.textInputStyle} />
        </View>
      </View>
      <Pressable
        onPress={() => {}}
        style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>Next</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default LoginPage;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentStyle: {
    paddingTop: 80,
    paddingHorizontal: 60,
    display: "flex",
    gap: 20,
  },

  countryButtonView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#00A884",
  },
  inputViewStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  countryTextStyle: {
    paddingTop: 10,
    fontSize: 14,
    fontWeight: "400",
    paddingHorizontal: 20,
  },

  textInputStyle: {
    flex: 1,
    fontSize: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: "#00A884",
    paddingHorizontal: 9,
    letterSpacing: 1.2,
  },

  buttonStyle: {
    height: 38,
    width: 90,
    backgroundColor: "#00A884",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 40,
  },
  titleStyle: {
    color: "#000",
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 0.3,
  },
  descStyle: {
    color: "#000",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    paddingVertical: 18,
  },
  linkStyle: {
    color: "#0C42CC",
    fontSize: 13,
    fontWeight: "400",
  },
  buttonTextStyle: {
    color: "#000",
    fontSize: 14,
    fontWeight: "400",
  },
});