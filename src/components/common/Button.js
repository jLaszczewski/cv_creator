import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, redButton, style, children }) => {
  const { buttonStyle, textStyle, redTextStyle, redButtonStyle } = styles;
  if (redButton) {
    return (
        <TouchableOpacity onPress={onPress} style={[redButtonStyle, style]}>
          <Text style={redTextStyle}>
            {children}
          </Text>
        </TouchableOpacity>
    );
  }
  return (
      <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
        <Text style={textStyle}>
          {children}
        </Text>
      </TouchableOpacity>
  );
};

const styles = {
  redTextStyle: {
    alignSelf: 'center',
    color: '#f00',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },

  redButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#f00',
    marginLeft: 5,
    marginRight: 5
  },

  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
