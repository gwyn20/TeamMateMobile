import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import { Button } from 'react-native';
import { Alert } from 'react-native';

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
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
                  Alert.alert('Will Take you to Log In');
                }}
                title="Log In"
                color="#ffffff"
                accessibilityLabel="Log In To Team Mate"
              />
            </View>
            <View style={styles.loginbutton} >  
              <Button
                onPress={() => {
                  Alert.alert('Will Take you to Create An Account');
                }}
                title="Create Account"
                color="#ffffff"
                accessibilityLabel="Create An Account"
              />
            </View>
          </View>
          

          <DevscreensButton />

          <View style={styles.centered}>
            <Image source={Images.g20} style={styles.g20logo} />
          </View>

        </ScrollView>
      </View>
    )
  }
}
