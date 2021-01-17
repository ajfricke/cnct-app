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

export default class MainPage extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../images/bkgrnd.JPG')}
        style={styles.backgroundImage}>
        <StatusBar barStyle="light-content" />
        <View style={styles.logoContainer}>
          <View style={styles.logoContainer}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('SignUp')}>
              <Image
                style={styles.logo1}
                source={require('../images/movie.png')}></Image>
              <Text style={styles.buttonText}>CHAT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Image
                style={styles.logo2}
                source={require('../images/game.png')}></Image>
              <Text
                style={styles.buttonText}
                onPress={() => this.props.navigation.navigate('Login')}>
                PLAY GAMES
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
  logo1: {
    flex: 1,
    left: 20,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo2: {
    flex: 1,
    left: 25,
    top: -5,
    width: 100,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#9370db',
    borderRadius: 10,
    paddingVertical: 15,
    width: 150,
    height: 150,
    bottom: 0,
    marginBottom: 30,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    bottom: 0,
  },
});
