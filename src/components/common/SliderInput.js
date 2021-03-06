import React, { Component } from 'react';
import { Text, Slider, View } from 'react-native';

class SliderInput extends Component {

  constructor(props) {
    super(props);

    const { value = 0 } = this.props;

    this.state = {
      sliderValue: value
    };
  }

  renderTitle() {
    const { label } = this.props;

    if (label) {
      return <Text>{label}</Text>;
    }
  }

  renderResult() {
    if (this.props.isPercent) {
      return (
        <Text>
          {`${this.state.sliderValue}%`}
        </Text>
      );
    }
    return (
      <Text>
        {`${this.state.sliderValue}`}
      </Text>
    );
  }

  render() {
    const {
      maximumValue,
      minimumValue,
      onSlidingComplete,
      step,
      value = 0,
    } = this.props;
    const { sliderViewContainer, containerStyle, textViewStyle } = styles;
    return (
      <View style={containerStyle}>
        {this.renderTitle()}
        <View style={sliderViewContainer}>
          <Slider
            style={{ flex: 1 }}
            maximumValue={maximumValue}
            minimumValue={minimumValue}
            onSlidingComplete={onSlidingComplete}
            step={step}
            value={value}
            onValueChange={(val) => this.setState({ sliderValue: val })}
          />
          <View style={textViewStyle}>
              {this.renderResult()}
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textViewStyle: {
    width: 50,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  sliderViewContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
};

export { SliderInput };
