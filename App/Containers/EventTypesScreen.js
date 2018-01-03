import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View, TouchableHighlight, } from 'react-native'
import { connect } from 'react-redux'

import ResponsiveImage from 'react-native-responsive-image';

import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/EventTypesScreenStyle'

class EventTypesScreen extends Component {
  render () {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.mainContainer}>
      <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <KeyboardAvoidingView behavior='position'>
            <View style={styles.eventIcon}>
              <TouchableHighlight onPress={() => {navigate('EventBadmintonScreen');}}>
              <ResponsiveImage source={Images.badmintonIcon} initWidth="138" initHeight="138"/>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {navigate('EventBaseballScreen')}}>
              <ResponsiveImage source={Images.baseballIcon} initWidth="138" initHeight="138"/>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {navigate('EventBasketballScreen')}}>
              <ResponsiveImage source={Images.basketballIcon} initWidth="138" initHeight="138"/>
              </TouchableHighlight>
            </View>
            <View style={styles.eventIcon}>
              <TouchableHighlight onPress={() => {navigate('EventBowlingScreen')}}>
              <ResponsiveImage source={Images.bowlingIcon} initWidth="138" initHeight="138"/>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {navigate('EventCricketScreen')}}>
              <ResponsiveImage source={Images.cricketIcon} initWidth="138" initHeight="138"/>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {navigate('EventFootballScreen')}}>
              <ResponsiveImage source={Images.footballIcon} initWidth="138" initHeight="138"/>
              </TouchableHighlight>
            </View>
            <View style={styles.eventIcon}>
              <TouchableHighlight onPress={() => {navigate('EventFrisbeeGolfScreen')}}>
              <ResponsiveImage source={Images.frisbeeGolfIcon} initWidth="138" initHeight="138"/>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {navigate('EventGolfScreen')}}>
              <ResponsiveImage source={Images.golfIcon} initWidth="138" initHeight="138"/>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {navigate('EventIceHockeyScreen')}}>
              <ResponsiveImage source={Images.iceHockeyIcon} initWidth="138" initHeight="138"/>
              </TouchableHighlight>
            </View>
            <View style={styles.eventIcon}>
              <TouchableHighlight onPress={() => {navigate('EventLacrosseScreen')}}>
              <ResponsiveImage source={Images.lacrosseIcon} initWidth="138" initHeight="138"/>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {navigate('EventPoolScreen')}}>
              <ResponsiveImage source={Images.poolIcon} initWidth="138" initHeight="138"/>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {navigate('EventSoccerScreen')}}>
              <ResponsiveImage source={Images.soccerIcon} initWidth="138" initHeight="138"/>
              </TouchableHighlight>
            </View>
            <View style={styles.eventIcon}>
              <TouchableHighlight onPress={() => {navigate('EventSoftballScreen')}}>
              <ResponsiveImage source={Images.softballIcon} initWidth="138" initHeight="138"/>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {navigate('EventTennisScreen')}}>
              <ResponsiveImage source={Images.tennisIcon} initWidth="138" initHeight="138"/>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {navigate('EventUltimateFrisbeeScreen')}}>
              <ResponsiveImage source={Images.ultimateFrisbeeIcon} initWidth="138" initHeight="138"/>
              </TouchableHighlight>
            </View>
            <View style={styles.eventIcon}>
              <TouchableHighlight onPress={() => {navigate('EventVolleyBallScreen')}}>
              <ResponsiveImage source={Images.volleyBallIcon} initWidth="138" initHeight="138"/>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {navigate('EventOtherScreen')}}>
              <ResponsiveImage source={Images.otherIcon} initWidth="138" initHeight="138"/>
              </TouchableHighlight>
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
