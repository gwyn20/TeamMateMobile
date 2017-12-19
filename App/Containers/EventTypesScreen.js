import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/EventTypesScreenStyle'

class EventTypesScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
      <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <KeyboardAvoidingView behavior='position'>
            <View style={styles.eventIcon}>
              <ResponsiveImage source={Images.badmintonIcon} initWidth="138" initHeight="138"/>
              <ResponsiveImage source={Images.baseballIcon} initWidth="138" initHeight="138"/>
              <ResponsiveImage source={Images.basketballIcon} initWidth="138" initHeight="138"/>
            </View>
            <View style={styles.eventIcon}>
              <ResponsiveImage source={Images.bowlingIcon} initWidth="138" initHeight="138"/>
              <ResponsiveImage source={Images.cricketIcon} initWidth="138" initHeight="138"/>
              <ResponsiveImage source={Images.footballIcon} initWidth="138" initHeight="138"/>
            </View>
            <View style={styles.eventIcon}>
              <ResponsiveImage source={Images.frisbeeGolfIcon} initWidth="138" initHeight="138"/>
              <ResponsiveImage source={Images.golfIcon} initWidth="138" initHeight="138"/>
              <ResponsiveImage source={Images.iceHockeyIcon} initWidth="138" initHeight="138"/>
            </View>
            <View style={styles.eventIcon}>
              <ResponsiveImage source={Images.lacrosseIcon} initWidth="138" initHeight="138"/>
              <ResponsiveImage source={Images.poolIcon} initWidth="138" initHeight="138"/>
              <ResponsiveImage source={Images.soccerIcon} initWidth="138" initHeight="138"/>
            </View>
            <View style={styles.eventIcon}>
              <ResponsiveImage source={Images.softballIcon} initWidth="138" initHeight="138"/>
              <ResponsiveImage source={Images.tennisIcon} initWidth="138" initHeight="138"/>
              <ResponsiveImage source={Images.ultimateFrisbeeIcon} initWidth="138" initHeight="138"/>
            </View>
            <View style={styles.eventIcon}>
              <ResponsiveImage source={Images.volleyBallIcon} initWidth="138" initHeight="138"/>
              <ResponsiveImage source={Images.otherIcon} initWidth="138" initHeight="138"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(EventTypesScreen)
