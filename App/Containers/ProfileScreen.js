import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View } from 'react-native'
import { connect } from 'react-redux'
import { Button } from '../Components/Button';
import { Alert } from 'react-native';


import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProfileScreenStyle'
import EventTypesScreen from './EventTypesScreen';

class ProfileScreen extends Component {
  
  state = {
    FavoriteActivities: false,
    ActivitiesHosting: false,
    ActivitiesAttending: false,
  }

  onPressFavoriteActivities() {
    this.setState({
      FavoriteActivities: !this.state.FavoriteActivities,
    });
  }

  onPressActivitiesHosting() {
    this.setState({
      ActivitiesHosting: !this.state.ActivitiesHosting,
    });
  }

  onPressActivitiesAttending() {
    this.setState({
      ActivitiesAttending: !this.state.ActivitiesAttending,
    });
  }

  renderFavoriteActivities() {
    if (this.state.FavoriteActivities) {
      return (
        <View>
          <Text>Favorite Activity Images</Text>
        </View>
      )
    }
  }

  renderActivitiesHosting() {
    if (this.state.ActivitiesHosting) {
      return (
        <View>
          <Text>Activities Hosting List</Text>
        </View>
      )
    }
  }

  renderActivitiesAttending() {
    if (this.state.ActivitiesAttending) {
      return (
        <View>
          <Text>Activities Attending List</Text>
        </View>
      )
    }
  }

  render () {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.mainContainer}>
      <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
        
          <View style={styles.userInfo} >
            <Text style={styles.userName}>
            <Image source={Images.g20} style={styles.profileImage}/> USER NAME
            </Text>
          </View>

          <View style={styles.section} >
            <Button
              onPress={() => 
                this.onPressFavoriteActivities() }
                accessibilityLabel="View Favorite Activities"
            >
              Favorite Activities
            </Button>
            
            <View style={styles.container}>
              {this.renderFavoriteActivities()}
            </View> 

            <Button
              onPress={() => 
                this.onPressActivitiesHosting() }
                accessibilityLabel="View Activities Hosting"
            >
              Activities Hosting
            </Button>

            <View style={styles.container}>
              {this.renderActivitiesHosting()}
            </View> 

            <Button
              onPress={() => 
                this.onPressActivitiesAttending() }
                accessibilityLabel="View Activities Attending"
            >
              Activities Attending
            </Button>

            <View style={styles.container}>
              {this.renderActivitiesAttending()}
            </View> 

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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
