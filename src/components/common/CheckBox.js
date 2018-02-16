import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

const uncheckedImage = require('./icons/checkbox/unchecked.png');
const checkedImage = require('./icons/checkbox/checked.png');

const CheckBox = ({ checked, onPress, label }) => {
  const { containerStyle, labelStyle } = styles;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={containerStyle} >
        <Image source={checked ? checkedImage : uncheckedImage} />
        <Text style={labelStyle}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = {
  containerStyle: {
    paddingLeft: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 10,
    flex: 1
  }
};

export { CheckBox };
