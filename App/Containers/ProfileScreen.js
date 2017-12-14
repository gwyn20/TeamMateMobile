import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProfileScreenStyle'

class ProfileScreen extends Component {
  

  render () {

    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>ProfileScreen</Text>
        </KeyboardAvoidingView>

        <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              This probably isn't what your app is going to look like.
            </Text>
            <Button
                onPress={() => {
                  navigate("EventType");
                }}
                title="Event Types"
                color="#ffffff"
                accessibilityLabel="Log In To Team Mate"
              />
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
