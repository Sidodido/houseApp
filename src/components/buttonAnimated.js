import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, Easing } from 'react-native';
import {colors, icons, images} from './constants';

const ToggleButton = () => {
  const positionButton = useRef(new Animated.Value(0)).current;
  const isOnRef = useRef(false);

  const startAnimToOff = () => {
    Animated.timing(positionButton, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const startAnimToOn = () => {
    Animated.timing(positionButton, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const positionInterPol = positionButton.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 30],
  });

  const backgroundColorAnim = positionButton.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.tertiary, colors.primary],
  });

  const initialOpacityOn = positionButton.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const initialOpacityOff = positionButton.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const onPress = () => {
    if (isOnRef.current) {
      startAnimToOff();
      isOnRef.current = false;
    } else {
      startAnimToOn();
      isOnRef.current = true;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ height: 30, width: 60 }} activeOpacity={0.9} onPress={onPress}>
        <Animated.View
          style={[
            styles.mainStyes,
            {
              backgroundColor: backgroundColorAnim,
            },
          ]}
        >
          <Animated.Text
            style={[
              styles.eahcStyles,
              {
                opacity: initialOpacityOn,
              },
            ]}
          >
            ON
          </Animated.Text>
          <Animated.Text
            style={[
              styles.eahcStylesOf,
              {
                opacity: initialOpacityOff,
              },
            ]}
          >
            OFF
          </Animated.Text>
          <Animated.View
            style={[
              styles.basicStyle,
              {
                transform: [
                  {
                    translateX: positionInterPol,
                  },
                ],
              },
            ]}
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.Quaternary,
    padding: 0,
    marginTop:5,
    left:-20,
    
  },
  basicStyle: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: '#FFF',
    marginTop: 5,
    marginLeft: 5,
  },
  eahcStyles: {
    fontSize: 14,
    color: '#f5dd4b',
    position: 'absolute',
    top: 6,
    left: 5,
  },
  eahcStylesOf: {
    fontSize: 14,
    color: '#f4f3f4',
    position: 'absolute',
    top: 6,
    right: 5,
  },
  mainStyes: {
    borderRadius: 30,
    backgroundColor: '#81b0ff',
    height: 30,
    width: 60,
    
  },
});

export default ToggleButton;