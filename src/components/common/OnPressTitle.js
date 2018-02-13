import React from 'react';
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const showMore = require('./icons/extension/showMore.png');
const showLess = require('./icons/extension/showLess.png');

const OnPressTitle = ({ children, onPress, isOpen }) => {
  const { rowStyle, categoryTitleStyle, textContainer } = styles;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={rowStyle}>
        <View style={textContainer}>
          <Text style={categoryTitleStyle}>
            {children}
          </Text>
        </View>
        <Image source={isOpen ? showLess : showMore} />
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
    paddingHorizontal: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryTitleStyle: {
    lineHeight: 20,
  }
};

export { OnPressTitle };
