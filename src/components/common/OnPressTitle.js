import React from 'react';
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const img = require('../../public/icons/showMore/img.png');

const OnPressTitle = ({ children, onPress }) => {
  const { rowStyle, categoryTitleStyle, textContainer } = styles;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={rowStyle}>
        <View style={textContainer}>
          <Text style={categoryTitleStyle}>
            {children}
          </Text>
        </View>
        <Image source={img} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = {
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1
  },
  textContainer: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryTitleStyle: {
    lineHeight: 20,
  }
};

export { OnPressTitle };
