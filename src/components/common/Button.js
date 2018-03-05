import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Button extends Component {
  state = {
    disabled: false
  }

  onPressWithDisable() {
    this.setState({ disabled: true });
    this.props.onPress();
  }

  render() {
    const { redButton, style, children } = this.props;
    const { buttonStyle, textStyle, redTextStyle, redButtonStyle } = styles;
    const { disabled } = this.state;

    return (
        <TouchableOpacity disabled={disabled} onPress={this.onPressWithDisable.bind(this)} style={redButton ? [redButtonStyle, style] : [buttonStyle, style]}>
          <Text style={redButton ? redTextStyle : textStyle}>
            {children}
          </Text>
        </TouchableOpacity>
    );
  }
}

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
