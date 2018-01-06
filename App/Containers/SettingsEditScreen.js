import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View } from 'react-native'
import { connect } from 'react-redux'
import { Input } from '../Components/Input';
import { Button } from '../Components/Button';


import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SettingsEditScreenStyle'

class SettingsEditScreen extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    zipcode: '',
    searchRadius: '',
  }

  render () {

    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.mainContainer}>
      <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <KeyboardAvoidingView behavior='position'>
          
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
            <Button
                onPress={() => {
                  navigate('ProfileScreen');
                }}
                accessibilityLabel="Edit Settings"
            >
            Edit
            </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingsEditScreen)
