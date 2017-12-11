import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  loginbutton: {
    marginBottom: 30,
    width: 260,
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#404956'
  },
  g20logo: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  }
})
