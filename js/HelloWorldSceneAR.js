'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroBox
} from 'react-viro';

const HelloWorldSceneAR = () => {
    const [text, setTest] = React.useState("Initializing AR...");

    const onInitialized = (state, reason) => {
      if (state == ViroConstants.TRACKING_NORMAL) {
        setTest("Hello World!");
      } else if (state == ViroConstants.TRACKING_NONE) {
        // Handle loss of tracking
      }
    }
  return (
    <ViroARScene onTrackingUpdated={onInitialized} >
      <ViroBox position={[0, -.5, -1]} scale={[.3, .3, .1]} />
      <ViroText text={text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
    </ViroARScene>
  );

}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

export default HelloWorldSceneAR;

// export default class HelloWorldSceneAR extends Component {

//   constructor() {
//     super();

//     // Set initial state here
//     this.state = {
//       text : "Initializing AR..."
//     };

//     // bind 'this' to functions
//     this._onInitialized = this._onInitialized.bind(this);
//   }

//   render() {
//     return (
//       <ViroARScene onTrackingUpdated={this._onInitialized} >
//         <ViroBox position={[0, -.5, -1]} scale={[.3, .3, .1]}
//          />
//         <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
//       </ViroARScene>
//     );
//   }

//   _onInitialized(state, reason) {
//     if (state == ViroConstants.TRACKING_NORMAL) {
//       this.setState({
//         text : "Hello World!"
//       });
//     } else if (state == ViroConstants.TRACKING_NONE) {
//       // Handle loss of tracking
//     }
//   }
// }



// module.exports = HelloWorldSceneAR;
