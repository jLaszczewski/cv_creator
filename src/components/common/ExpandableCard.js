import React from 'react';
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './';

const showMore = require('./icons/extension/showMore.png');
const showLess = require('./icons/extension/showLess.png');

const ExpandableCard = ({ children, onPress, isOpen, label }) => {
  const { rowStyle, categoryTitleStyle, textContainer } = styles;

  return (
    <View style={{ flex: 1 }}>
      <CardSection>
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={rowStyle}>
            <View style={textContainer}>
              <Text style={categoryTitleStyle}>
                {label}
              </Text>
            </View>
            <Image source={isOpen ? showLess : showMore} />
          </View>
        </TouchableWithoutFeedback>
      </CardSection>
      {isOpen ? children : <View />}
    </View>
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

export { ExpandableCard };
