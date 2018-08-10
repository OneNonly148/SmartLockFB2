import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator } from 'react-navigation'

const firebaseConfig = {
  apiKey: "AIzaSyB7yhJtk0ino5-hzZILOfx4fVEsws4qzPU",
  authDomain: "smartlock-fc432.firebaseapp.com",
  databaseURL: "https://smartlock-fc432.firebaseio.com",
  projectId: "smartlock-fc432",
  storageBucket: "smartlock-fc432.appspot.com",
}

firebase.initializeApp(firebaseConfig)

// import the different screens
import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'

// create our app's navigation stack
const App = SwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)

export default App
