import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native';

import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/EventGolfScreenStyle'

class EventGolfScreen extends Component {
  render () {
    
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.mainContainer}>
      <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
        
          <View style={styles.eventInfo} >
            <Text style={styles.eventName}>
            <Image source={Images.golfIcon} style={styles.eventImage}/> GOLF
            </Text>
          </View>

          <View style={styles.centered}>  
            <View style={styles.createButton} >
              <Button
                onPress={() => {
                  navigate('CreateEventScreen');
                }}
                title="Create Event"
                color="#ffffff"
                accessibilityLabel="Create A New Event"
              />
            </View>
          </View>

          <View style={styles.section} >
            <Text style={styles.title}>
              12/04 - 12/10
            </Text>
          </View>

          <View style={styles.section} >
            <Text style={styles.title}>
              12/11 - 12/17
            </Text>
          </View>

          <View style={styles.section} >
            <Text style={styles.title}>
              12/18 - 12/24
            </Text>
          </View>

          <View style={styles.section} >
            <Text style={styles.title}>
              12/25 - 12/31
            </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(EventGolfScreen)
