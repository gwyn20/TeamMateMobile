import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import { Button } from '../Components/Button';
import { Alert } from 'react-native';

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'
import { INITIAL_STATE } from '../Redux/SearchRedux';

export default class LaunchScreen extends Component {
  
    render () {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
        
        <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.centered} >
            <Image source={Images.ready} />
          </View>  

          <View style={styles.centered}>  
            <Button
              onPress={() => {
                navigate('LogInScreen');
              }}
              accessibilityLabel="Log In To Team Mate"
            >
            Log In
            </Button>
            <Button
              onPress={() => {
                navigate('SignUpScreen');
              }}
              accessibilityLabel="Create An Account"
            >
            Sign Up
            </Button>
          </View>
          

          <DevscreensButton />

          <View style={styles.centered}>
            <Image source={Images.g20} style={styles.g20logo} />
          </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    )
  }
}
