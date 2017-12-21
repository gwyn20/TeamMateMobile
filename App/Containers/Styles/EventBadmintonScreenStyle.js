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
  eventInfo: {
    marginTop: Metrics.doubleSection,
    marginLeft: 30
  },
  eventImage: {
    width: 100,
    height: 100,
  },
  eventName: {
    alignItems: 'center',
    justifyContent:'center',
    paddingBottom: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#404956',
  },
  createButton: {
    marginBottom: 30,
    width: 260,
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#404956'
  },
  title: {
    flex:1,
    marginTop: Metrics.doubleSection,
    paddingLeft: 10,
    height: 30,
    alignItems: 'center',
    justifyContent:'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#404956'
  }
})
