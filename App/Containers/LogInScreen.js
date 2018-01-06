import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { Alert } from 'react-native';
import { Input } from '../Components/Input';
import { Button } from '../Components/Button';

import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LogInScreenStyle'

class LogInScreen extends Component {
  
  state = {
    email: '',
    password: '',
    authenticating: false,
  }

  onPressSignIn() {
    this.setState({
      authenticating: true,
    });
  }
  
  renderCurrentState() {
    if (this.state.authenticating) {
      return (
        <View style={styles.form}>
          <ActivityIndicator size='large' />
        </View>
      )
    }

    return (
      <View style={styles.form}>
        <Input 
          placeholder='Enter your email'
          label='Email'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <Input 
          placeholder='Enter your password'
          label='Password'
          secureTextEntry
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button
          onPress={() => 
          this.onPressSignIn() }
          accessibilityLabel="Log In To Team Mate"
        >
        Log In
        </Button>      
      </View>

    )
  }

  render () {
    return (
      <View style={styles.mainContainer}>
      <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView>

          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>
        
          <View style={styles.container}>
            {this.renderCurrentState()}
          </View>     

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

export default connect(mapStateToProps, mapDispatchToProps)(LogInScreen)
