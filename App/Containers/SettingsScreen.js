import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native';

import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SettingsScreenStyle'

class SettingsScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
      <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <KeyboardAvoidingView behavior='position'>
          
          <View style={styles.userProfilePic} >
            <Image source={Images.g20} style={styles.profileImage}/>
          </View>

          <View style={styles.section} >
            <Text style={styles.userInfo}>
              USER NAME: User 123
            </Text>
            <Text style={styles.userInfo}>
              EMAIL: user123@email.com
            </Text>
            <Text style={styles.userInfo}>
              PASSWORD: **********
            </Text>
            <Text style={styles.userInfo}>
              ZIP CODE: 23228
            </Text>
            <Text style={styles.userInfo}>
              SEARCH RADIUS: 
            </Text>
          </View>

          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
