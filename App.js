import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';

import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator
} from 'react-viro';

import InitialARScene from './js/HelloWorldSceneAR';
/*
 TODO: Insert your API key below
 */
var sharedProps = {
  apiKey:"API_KEY_HERE",
}

// Sets the default scene you want for AR and VR
// var InitialARScene = require('./js/HelloWorldSceneAR');
var InitialVRScene = require('./js/HelloWorldScene');

var UNSET = "UNSET";
var VR_NAVIGATOR_TYPE = "VR";
var AR_NAVIGATOR_TYPE = "AR";

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = UNSET;


const ViroSample = () => {
  const [navigatorType, setNavigatorType] = React.useState('UNSET');
  const [sharedProps, setSharedProps] = React.useState();

  // Returns the ViroARSceneNavigator which will start the AR experience
  const getARNavigator = () => {
    return (
      <ViroARSceneNavigator {...sharedProps}
        initialScene={{scene: InitialARScene}} />
    );
  }

   // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  const getExperienceButtonOnPress = (navigatorType) => {
    setNavigatorType(navigatorType)
  }

  // This function "exits" Viro by setting the navigatorType to UNSET.
  const exitViro = () => {
    setNavigatorType('UNSET')
  }

  if (navigatorType == UNSET) {
    return (
      <View style={localStyles.outer} >
        <View style={localStyles.inner} >
          <Text style={localStyles.titleText}>
            Choose your desired experience:
          </Text>
          <TouchableHighlight style={localStyles.buttons}
            onPress={() => getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
            underlayColor={'#68a0ff'} >
            <Text style={localStyles.buttonText}>AR</Text>
          </TouchableHighlight>
          <TouchableHighlight style={localStyles.buttons}
            onPress={() => getExperienceButtonOnPress(VR_NAVIGATOR_TYPE)}
            underlayColor={'#68a0ff'} >
            <Text style={localStyles.buttonText}>VR</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  } else if (navigatorType == VR_NAVIGATOR_TYPE) {
    return getVRNavigator();
  } else if (navigatorType == AR_NAVIGATOR_TYPE) {
    return getARNavigator();
  }
};

var localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "black",
  },
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "black",
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 25
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  buttons : {
    height: 80,
    width: 150,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  exitButton : {
    height: 50,
    width: 100,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});

export default ViroSample
