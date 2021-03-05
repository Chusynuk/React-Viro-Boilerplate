'use strict';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { ViroARScene, ViroText, ViroConstants, ViroBox } from 'react-viro';

const HelloWorldSceneAR = () => {
    const [text, setTest] = React.useState('Initializing AR...');

    const onInitialized = (state, reason) => {
        if (state == ViroConstants.TRACKING_NORMAL) {
            setTest('Hello World!');
        } else if (state == ViroConstants.TRACKING_NONE) {
            // Handle loss of tracking
        }
    };
    return (
        <ViroARScene onTrackingUpdated={onInitialized}>
            <ViroBox position={[0, -0.5, -1]} scale={[0.3, 0.3, 0.1]} />
            <ViroText
                text={text}
                scale={[0.5, 0.5, 0.5]}
                position={[0, 0, -1]}
                style={styles.helloWorldTextStyle}
            />
        </ViroARScene>
    );
};

var styles = StyleSheet.create({
    helloWorldTextStyle: {
        fontFamily: 'Arial',
        fontSize: 30,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center'
    }
});

export default HelloWorldSceneAR;
