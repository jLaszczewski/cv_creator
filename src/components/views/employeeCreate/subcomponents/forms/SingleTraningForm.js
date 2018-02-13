import React, { Component } from 'react';
import { View } from 'react-native';
import { Input, OnPressTitle, Button, CardSection } from '../../../../common';


class SingleTraningForm extends Component {
  renderContent() {
    const {
      nameValue,
      nameOnChangeText,
      beginDateValue,
      beginDateOnChangeText,
      finishDateValue,
      finishDateOnChangeText,
      isOpen,
      onPressDelete
     } = this.props;

    if (isOpen) {
      return (
        <View>
          <Input
            label='name'
            placeholder='iOS App Development with Swift'
            value={nameValue}
            onChangeText={nameOnChangeText}
          />
          <Input
            label='Begin date'
            placeholder='FEB 2017'
            value={beginDateValue}
            onChangeText={beginDateOnChangeText}
            autoCapitalize='characters'
          />
          <Input
            label='Finish date'
            placeholder='MAR 2017'
            value={finishDateValue}
            onChangeText={finishDateOnChangeText}
            autoCapitalize='characters'
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

export default SingleTraningForm;
