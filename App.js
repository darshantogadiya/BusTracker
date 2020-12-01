import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import {createStackNavigator, TransitionPresets} from "react-navigation-stack";
// import the different screens
import Splash from "./src/Splash";
import Loading from "./src/Loading";
import SignUp from "./src/SignUp";
import Login from "./src/Login";
import Main from "./src/Main";
//main screen
import Bus from "./src/Bus";
import Profile from "./src/Profile";
import Compain_Box from "./src/Compain_Box";
import Help from "./src/Help";
import ContactUs from "./src/ContactUs";
//bus travells
import PatelTravels from "./src/PatelTravels";
import GujaratTravels from "./src/GujaratTravels";
import NeetaTravels from "./src/NeetaTravels";

//surat to ahmedabad
import stoawithPatel from "./src/SourcetoDes/stoawithPatel";   
import atonwithPatel from "./src/SourcetoDes/atonwithPatel"; 
import ntoawithPatel from "./src/SourcetoDes/ntoawithPatel";
import rtobwithGujarat from "./src/SourcetoDes/rtobwithGujarat";
import vtoawithGujarat from "./src/SourcetoDes/vtoawithGujarat";
import atodwithNeeta from "./src/SourcetoDes/atodwithNeeta";
import atomwithNeeta from "./src/SourcetoDes/atomwithNeeta";
import mtopwithNeeta from "./src/SourcetoDes/mtopwithNeeta";

//commonLive
import commonLive from "./src/SourcetoDes/commonLive";

const MainStack = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS
    }
  },
  Loading: {
    screen: Loading,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS
    }
  },
  Main: {
    screen: Main,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS
    }
  },
  Bus: {
    screen: Bus,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS
    }
  },
  Compain_Box: {
    screen: Compain_Box,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS
    }
  },
  Help: {
    screen: Help,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS
    }
  },
  ContactUs: {
    screen: ContactUs,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS
    }
  },
  PatelTravels: {
    screen: PatelTravels,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS
    }
  },
  GujaratTravels: {
    screen: GujaratTravels,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS
    }
  },
  NeetaTravels: {
    screen: NeetaTravels,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS
    }
  },
  stoawithPatel: {
    screen: stoawithPatel,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS
    }
  },   
  ntoawithPatel: {
    screen: ntoawithPatel,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS
    }
  },
  atonwithPatel: {
    screen: atonwithPatel,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS
    }
  },
  rtobwithGujarat: {
    screen: rtobwithGujarat,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS
    }
  },
  vtoawithGujarat: {
    screen: vtoawithGujarat,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS
    }
  },   
  atodwithNeeta: {
    screen: atodwithNeeta,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS
    }
  },
  atomwithNeeta: {
    screen: atomwithNeeta,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS
    }
  },
  mtopwithNeeta: {
    screen: mtopwithNeeta,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS
    }
  },
  commonLive: {
    screen: commonLive,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS
    }
  },
},

  {
    initialRouteName: 'Splash'
  })

// create our app's navigation stack
const App = createSwitchNavigator(
  {
    MStack: MainStack
  },
  {
    initialRouteName: 'MStack'
  }
)
export default createAppContainer(App);