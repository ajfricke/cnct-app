import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../images/bkgrnd.JPG')}
        style={styles.backgroundImage}>
        <StatusBar barStyle="light-content" />
        <TouchableWithoutFeedback
          style={styles.container}
          onPress={Keyboard.dismiss}>
          <View style={styles.logoContainer}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require('../images/image.png')}></Image>
              <Text style={styles.title}>Welcome back!</Text>
            </View>
            <View style={styles.infoContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter e-mail"
                placeholderTextColor="#da70d6"
                keyboardType="email-address"
                returnKeyType="Next"
                autoCorrect={false}
                autoCapitalize={false}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter password"
                placeholderTextColor="#da70d6"
                returnKeyType="Go"
                secureTextEntry
                autoCorrect={false}
                autoCapitalize={false}
              />
              <TouchableOpacity style={styles.buttonContainer}>
                <Text
                  style={styles.buttonText}
                  onPress={() => this.props.navigation.navigate('MainPage')}>
                  SIGN IN
                </Text>
              </TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot password?</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.signUp1}>New to the app? </Text>
                <Text
                  style={styles.signUp2}
                  onPress={() => this.props.navigation.navigate('SignUp')}>
                  Sign up!
                </Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    width: 200,
    height: 300,
    top: -120,
  },
  title: {
    color: '#9370db',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 5,
    top: -180,
    opacity: 1,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  forgotPassword: {
    color: 'rgba(255,255,255,1)',
    textAlign: 'right',
    paddingRight: 10,
    textDecorationLine: 'underline',
  },
  signUp1: {
    color: 'rgba(255,255,255,1)',
    textAlign: 'center',
    top: 110,
    fontSize: 20,
    fontWeight: 'bold',
    left: 15,
  },
  signUp2: {
    color: 'rgba(255,255,255,1)',
    textAlign: 'center',
    top: 110,
    fontSize: 20,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    left: 15,
  },
  infoContainer: {
    position: 'absolute',
    justifyContent: 'center',
    height: 200,
    width: 300,
    padding: 10,
    top: 335,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.5)',
    color: '#da70d6',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: '#9370db',
    borderWidth: 1,
  },
  buttonContainer: {
    backgroundColor: '#9370db',
    borderRadius: 10,
    paddingVertical: 15,
    bottom: -10,
    marginBottom:15,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
