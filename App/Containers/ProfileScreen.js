import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native';
import { Alert } from 'react-native';

import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProfileScreenStyle'

class ProfileScreen extends Component {
  

  render () {

    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        
        <View style={styles.userInfo} >
          <Text style={styles.userName}>
          <Image source={Images.g20} style={styles.profileImage}/> USER NAME
          </Text>
        </View>

        <View style={styles.section} >
          <Text style={styles.title}>
            FAVORITE ACTIVITIES
          </Text>
        </View>

        <View style={styles.section} >
          <Text style={styles.title}>
            ACTIVITIES HOSTING
          </Text>
        </View>

        <View style={styles.section} >
          <Text style={styles.title}>
            ACTIVITIES ATTENDING
          </Text>
        </View>

      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
