import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BackgroundImg from '../../../assets/svg/loading_background.svg';
import LOGO from '../../../assets/svg/logo_1.svg';
import TextLogo from '../../../components/BaseUi/textLogo';
import { useNavigation } from '@react-navigation/native';

const LoadingPage = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('WelcomePage');
    }, 7000); // Change the delay as needed (3000ms = 3s)

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.root}>
      <View style={styles.bgStyleView}>
        <BackgroundImg />
      </View>
      <View style={styles.contentViewStyle}>
        <LOGO width="70" height="70" />
        <Text style={styles.titleStyle}>WhatsApp</Text>
      </View>
      <View style={styles.textLogoViewStyle}>
        <TextLogo />
      </View>
    </View>
  );
};
export default LoadingPage;

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    width: '100%',
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bgStyleView: {
    width: '100%',
  },
  contentViewStyle: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  titleStyle: {
    color: '#000',
    fontSize: 35,
    fontWeight: '500',
    marginTop: 12,
  },
  textLogoViewStyle: {
    position: 'absolute',
    bottom: 100,
    left: '38%',
  },
});
