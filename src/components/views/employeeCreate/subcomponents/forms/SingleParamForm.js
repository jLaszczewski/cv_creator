import React, { Component } from 'react';
import { View } from 'react-native';
import { Input, OnPressTitle, Button, CardSection } from '../../../../common';

class SingleParamForm extends Component {
  renderContent() {
    const {
      isOpen,
      activitiesValue,
      activitiesOnChangeText,
      quantityValue,
      quantityOnChangeText,
      onPressDelete
     } = this.props;

    if (isOpen) {
      return (
        <View>
          <Input
            label='Quantity'
            placeholder='~100K+'
            value={quantityValue}
            onChangeText={quantityOnChangeText}
            autoCapitalize='characters'
          />
          <Input
            label='Activities'
            placeholder='DATABASE REQUEST'
            value={activitiesValue}
            onChangeText={activitiesOnChangeText}
            autoCapitalize='characters'
          />
          <Button
            onPress={onPressDelete}
            redButton
            style={{ marginTop: 10, marginBottom: 5 }}
          >
            Delete Parameter
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

export default SingleParamForm;
