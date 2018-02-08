import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../../../../../actions';
import { Input, OnPressTitle, SliderInput, Button } from '../../../../common';
import { SKILLS_FORM, REMOVE_ITEM } from '../../../../../actions/types';

class SingleSkillForm extends Component {
  renderContent() {
    const {
      isOpen,
      nameValue,
      nameOnChangeText,
      onSlidingComplete,
      sliderValue,
      index
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
          <Button
            onPress={() => this.props.employeeUpdate({
              form: SKILLS_FORM,
              prop: REMOVE_ITEM,
              value: !isOpen,
              object: index
            })}
            redButton
          >
            Delete
          </Button>
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
