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
import { CheckBox } from 'react-native-elements';
import { Constants } from 'expo';
import '@expo/vector-icons';
export default class SignUp extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../images/bkgrnd.JPG')}
        style={styles.backgroundImage}>
        <StatusBar barStyle="light-content" />
        <TouchableWithoutFeedback
          style={styles.container}
          onPress={Keyboard.dismiss}>
          <View style={styles.otherContainer}>
            <Text style={styles.title}>Let's get you </Text>
            <Text style={styles.title}>connected!</Text>
            <View style={styles.infoContainer}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#da70d6"
                keyboardType="default"
                returnKeyType="Next"
                autoCorrect={false}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter e-mail"
                placeholderTextColor="#da70d6"
                keyboardType="email-address"
                returnKeyType="Next"
                autoCorrect={false}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter password"
                placeholderTextColor="#da70d6"
                returnKeyType="Next"
                secureTextEntry
                autoCorrect={false}
              />
              <TextInput
                style={styles.input}
                placeholder="Confirm password"
                placeholderTextColor="#da70d6"
                keyboardType="email-address"
                returnKeyType="Go"
                autoCorrect={false}
              />
              <TouchableOpacity style={styles.buttonContainer}>
                <Text
                  style={styles.buttonText}
                  onPress={() => this.props.navigation.navigate('SignUp2')}>
                  CONTINUE
                </Text>
              </TouchableOpacity>
              <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require('../images/image.png')}></Image>
              <Text style={styles.title}>Welcome back!</Text>
            </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0E0E6',
    flexDirection: 'column',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  logo: {
    width: 167,
    height: 250,
    top: 140,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    color: '#9370db',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 5,
    top: -250,
    opacity: 1,
    fontWeight: 'bold',
    marginBottom: -5,
  },
  otherContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  infoContainer: {
    position: 'absolute',
    justifyContent: 'center',
    height: 200,
    width: 300,
    padding: 10,
    paddingTop: 30,
    top: 190,
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
    marginBottom: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
