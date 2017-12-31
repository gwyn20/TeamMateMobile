import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    padding: 20,
    //alignItems: 'center',
    //justifyContent: 'center'
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginbutton: {
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 5,
    width: 260,
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#404956'
  }
})

