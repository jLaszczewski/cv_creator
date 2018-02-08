import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../../../../../actions';
import { Input, CardSection, OnPressTitle, SliderInput } from '../../../../common';
import { SKILLS_FORM } from '../../../../../actions/types';

class SingleSkillForm extends Component {
  renderContent() {
    const {
      isOpen,
      nameValue,
      nameOnChangeText,
      onSlidingComplete,
      sliderValue
     } = this.props;

    if (isOpen) {
      return (
        <View>
        <Input
          label='name'
          placeholder='iOS'
          value={nameValue}
          onChangeText={nameOnChangeText}
        />
        <SliderInput
          maximumValue={10}
          minimumValue={1}
          step={1}
          onSlidingComplete={onSlidingComplete}
          value={sliderValue}
        />
        </View>
      );
    }
  }

  render() {
    const {
      nameValue,
      index,
      isOpen
     } = this.props;

    return (
      <View style={{ flexDirection: 'column' }}>
        <OnPressTitle
          onPress={() => this.props.employeeUpdate({
            form: SKILLS_FORM,
            prop: index,
            value: !isOpen,
            object: 'isOpen'
          })}
        >
          {nameValue}
        </OnPressTitle>
        {this.renderContent()}
      </View>
    );
  }
}

export default connect(null, { employeeUpdate })(SingleSkillForm);
