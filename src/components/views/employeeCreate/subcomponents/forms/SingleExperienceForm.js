import React, { Component } from 'react';
import { View } from 'react-native';
import { Input, OnPressTitle, Button, CardSection } from '../../../../common';


class SingleExperienceForm extends Component {
  renderContent() {
    const {
      nameValue,
      nameOnChangeText,
      beginDateValue,
      beginDateOnChangeText,
      finishDateValue,
      finishDateOnChangeText,
      jobTitleValue,
      jobTitleOnChangeText,
      responsibilityValue,
      responsibilityOnChangeText,
      isOpen,
      onPressDelete
     } = this.props;

    if (isOpen) {
      return (
        <View>
            <Input
              label='Company name'
              placeholder='BCF Software Sp. z o.o.'
              value={nameValue}
              onChangeText={nameOnChangeText}
            />
            <Input
              label='Begin date'
              placeholder='JAN 2018'
              value={beginDateValue}
              onChangeText={beginDateOnChangeText}
              autoCapitalize='characters'
            />
            <Input
              label='Finish date'
              placeholder='MAR 2020'
              value={finishDateValue}
              onChangeText={finishDateOnChangeText}
              autoCapitalize='characters'
            />
            <Input
              label='Job title'
              placeholder='Software Developer'
              value={jobTitleValue}
              onChangeText={jobTitleOnChangeText}
            />
            <Input
              label='Responsibility'
              placeholder='learning, development and creating new applications related to company projects.'
              value={responsibilityValue}
              onChangeText={responsibilityOnChangeText}
              autoCapitalize='none'
            />
          <Button
            redButton
            onPress={onPressDelete}
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

export default SingleExperienceForm;
