import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity
   } from 'react-native';
import bgImage from '../../assets//background.jpg';
import logo from '../../assets/Icon1.png';
import Icon from 'react-native-vector-icons/Ionicons';

const { width: WIDTH } = Dimensions.get('window')

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      showPass: true,
      press: false
    }
  }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true })
    } else {
      this.setState({ showPass: true, press: false })
    }
  }

  render() {
  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={{fontSize: 21, color: 'rgba(255, 255, 255, 0.7)'}}>FINTRACK</Text>
      </View>
      <View style={styles.inputContainer}>
        <Icon name={'ios-person'}
        size={28}
        color={'rgba(255, 255, 255, 0.7)'}
        style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder={'Username'}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name={'ios-lock'}
          size={28}
          color={'rgba(255, 255, 255, 0.7)'}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          secureTextEntry={this.state.showPass}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'
        />

        <TouchableOpacity style={styles.btnEye}
          onPress={this.showPass.bind(this)}>
          <Icon name={this.state.press === false ? 'ios-eye' : 'ios-eye-off'} size={26} color={'rgba(255, 255, 255, 0.7)'} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnLogin} onPress={this.props.onPress}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <View style={styles.offlineContainer}>
        <Text style={styles.offlineText}>Later</Text>
      </View>
    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width:null,
    height: null,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  logoContainer:{
    alignItems: 'center',
    marginTop: 70
  },
  logo: {
    width: 300,
    height: 180,
    opacity: 0.9
  },
  inputContainer: {
    marginTop: 10
  },
  input: {
    width: WIDTH - 55,
    height: 40,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25
  },
  inputIcon: {
    position: 'absolute',
    top: 5,
    left: 35
  },
  btnEye: {
    position: 'absolute',
    top: 7,
    right: 35
  },
  btnLogin: {
    width: WIDTH - 200,
    height: 35,
    borderRadius: 25,
    backgroundColor: '#57A0D3',
    justifyContent: 'center',
    marginTop: 15
  },
  text: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: 16,
      textAlign: 'center'
  },
  offlineContainer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center'
  },
  offlineText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 20,
    textDecorationLine: 'underline'
  }

});

export { LoginForm };
