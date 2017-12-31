import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native';
import { Alert } from 'react-native';
import * as firebase from 'firebase';
import { Input } from '../Components/Input';

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

  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBmNTu1uQ3ewnkv-ZWSNe6Vekha6PNdh0A',
      authDomain: 'teammate-fe155.firebaseapp.com',
    }

    firebase.initializeApp(firebaseConfig);
  }

  onPressSignIn() {
    this.setState({
      authenticating: true,
    });
  }
  
  renderCurrentState() {
    if (this.state.authenticating) {
      return (
        <View>
          <ActivityIndicator size='large' />
        </View>
      )
    }

    return (
      <View>
        <Input 
          placeholder='Enter your email'
          label='Email'
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
        <View style={styles.centered}>  
          <View style={styles.loginbutton} >
            <Button
              onPress={() => 
              this.onPressSignIn() }
              title="Log In"
              color="#ffffff"
              accessibilityLabel="Log In To Team Mate"
            />
          </View>
        </View>
      </View>

    )
  }

  render () {
    return (
      <View style={styles.mainContainer}>
      <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
        
          <View>
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
