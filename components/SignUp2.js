import React, { Component } from 'react';
import { Entypo, FontAwesome } from '@expo/vector-icons';
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
  TouchableHighlight,
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Constants } from 'expo';
import { Square } from 'react-native-shape';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import '@expo/vector-icons';

export default class SignUp2 extends Component {
  constructor(props) {
    super(props);
    this.state = { date: null, dt: null, registrationDate: '' };
  }
  state = {
    ischecked: false,
  };
  render() {
    const { ischecked } = this.state;
    return (
      <ImageBackground
        source={require('../images/bkgrnd.JPG')}
        style={styles.backgroundImage}>
        <StatusBar barStyle="light-content" />
        <TouchableWithoutFeedback
          style={styles.container}
          onPress={Keyboard.dismiss}>
          <View style={styles.otherContainer}>
            <View style={styles.infoContainer}>
              <Text style={styles.inputText}>Date of Birth</Text>
              <DatePicker
                showIcon={false}
                androidMode="spinner"
                style={{ marginTop: 10, marginBottom: 10, width: 281 }}
                date={this.state.date}
                mode="date"
                placeholder=" "
                format="DD-MM-YYYY"
                maxDate={moment().format('DD-MM-YYYY')}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateInput: {
                    height: 40,
                    backgroundColor: 'rgba(255,255,255,0.5)',
                    color: '#da70d6',
                    marginBottom: 20,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    borderColor: '#9370db',
                    borderWidth: 1,
                  },
                }}
                onDateChange={(date) => {
                  this.setState({ date: date });
                }}
              />
              <Text style={styles.inputText}>Gender</Text>
              <TextInput
                style={styles.input}
                placeholder="Example: Female or Non-Binary"
                placeholderTextColor="#da70d6"
                keyboardType="email-address"
                returnKeyType="Next"
                autoCorrect={false}
              />
              <Text style={styles.inputText}>Preferred Language</Text>
              <TextInput
                style={styles.input}
                placeholder="Example: French"
                placeholderTextColor="#da70d6"
                returnKeyType="Next"
                keyboardType="default"
                autoCorrect={true}
              />
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.inputText}>City             </Text>
                <Text style={styles.inputText}>                   Province/Territory</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  style={styles.inputLocation}
                  placeholder="Example: London"
                  placeholderTextColor="#da70d6"
                  returnKeyType="Next"
                  keyboardType="default"
                  autoCorrect={true}
                />
                <TextInput
                  style={styles.inputLocation}
                  placeholder="Example: ON"
                  placeholderTextColor="#da70d6"
                  returnKeyType="Next"
                  keyboardType="default"
                  autoCorrect={true}
                />
              </View>
              <Text style={styles.inputText}>Interests</Text>
              <TextInput
                style={styles.input}
                placeholder="Example: math, hockey, video games"
                placeholderTextColor="#da70d6"
                returnKeyType="Next"
                keyboardType="default"
                autoCorrect={true}
              />
              <Text style={styles.interests}>This will help us match you with individuals that have similar interests! </Text>

              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('MainPage')}>CREATE ACCOUNT</Text>
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
    width: 100,
    height: 150,
    top: 100,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  inputText: {
    color: '#9370db',
    left: 6,
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
    paddingTop: 20,
    top: 170,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.5)',
    color: '#da70d6',
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: '#9370db',
    borderWidth: 1,
  },
  interests: {
    color: '#9370db',
    left: 6,
    marginTop: -10,
    marginBottom: 20
  },
  inputLocation: {
    height: 40,
    width: 135,
    marginRight: 10,
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
