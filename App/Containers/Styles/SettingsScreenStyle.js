import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  centered: {
    alignItems: 'center'
  },
  userProfilePic: {
    marginTop: Metrics.doubleSection,
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
  },
  userInfo: {
    paddingLeft: 5,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#404956',
  },
  location: {
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

