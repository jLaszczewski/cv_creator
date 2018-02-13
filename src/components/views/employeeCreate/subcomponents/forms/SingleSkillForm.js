import React, { Component } from 'react';
import { View } from 'react-native';
import { Input, OnPressTitle, SliderInput, Button, CardSection } from '../../../../common';

class SingleSkillForm extends Component {
  renderContent() {
    const {
      isOpen,
      nameValue,
      nameOnChangeText,
      onSlidingComplete,
      slideValue,
      onPressDelete
     } = this.props;

     console.log(this.props);

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
            minimumValue={0}
            step={1}
            onSlidingComplete={onSlidingComplete}
            value={slideValue}
          />
          <Button
            onPress={onPressDelete}
            redButton
            style={{ marginTop: 10, marginBottom: 5 }}
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
      onPressExtension
     } = this.props;

    return (
      <CardSection style={{ flexDirection: 'column' }}>
        <OnPressTitle
          onPress={onPressExtension}
        >
          {nameValue}
        </OnPressTitle>
        {this.renderContent()}
      </CardSection>
    );
  }
}

export default SingleSkillForm;
