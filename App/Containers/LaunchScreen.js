import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import { Button } from 'react-native';
import { Alert } from 'react-native';

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

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

          <View style={styles.section} >
            <Image source={Images.ready} />
          </View>  

          <View style={styles.centered}>  
            <View style={styles.loginbutton} >
              <Button
                onPress={() => {
                  navigate('LogInScreen');
                }}
                title="Log In"
                color="#ffffff"
                accessibilityLabel="Log In To Team Mate"
              />
            </View>
            <View style={styles.loginbutton} >  
              <Button
                onPress={() => {
                  navigate('SignUpScreen');
                }}
                title="Sign Up"
                color="#ffffff"
                accessibilityLabel="Create An Account"
              />
            </View>
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
