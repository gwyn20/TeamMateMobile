import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { Tabs } from '../Navigation/AppNavigation'

import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'

// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  getNavigtionTabs(){
    //flip to !true to show log in screen
    if (true){//add login logic to check to see if user logged in
      return (<Tabs />);
    } 
    else
    { 
      return false;
    }
  }

  render () {
    // <ReduxNavigation />
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        
        { this.getNavigtionTabs() }
      </View>
      
    )
  }
  
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
