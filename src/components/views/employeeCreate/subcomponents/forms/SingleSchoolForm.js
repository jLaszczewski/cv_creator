import React, { Component } from 'react';
import { View } from 'react-native';
import { Input, OnPressTitle, Button, CardSection } from '../../../../common';


class SingleSchoolForm extends Component {
  renderContent() {
    const {
      degreeValue,
      degreeOnChangeText,
      beginDateValue,
      beginDateOnChangeText,
      finishDateValue,
      finishDateOnChangeText,
      schoolValue,
      schoolOnChangeText,
      isOpen,
      onPressDelete
     } = this.props;

    if (isOpen) {
      return (
        <View>
            <Input
              label='Degree'
              placeholder='BSc in Automatic Control and Robotics'
              value={degreeValue}
              onChangeText={degreeOnChangeText}
            />
            <Input
              label='Begin date'
              placeholder='2012'
              value={beginDateValue}
              onChangeText={beginDateOnChangeText}
              autoCapitalize='characters'
            />
            <Input
              label='Finish date'
              placeholder='2016'
              value={finishDateValue}
              onChangeText={finishDateOnChangeText}
              autoCapitalize='characters'
            />
            <Input
              label='School name'
              placeholder='Opole University of Technology'
              value={schoolValue}
              onChangeText={schoolOnChangeText}
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
      degreeValue,
      onPressExtension
     } = this.props;

    return (
      <CardSection style={{ flexDirection: 'column' }}>
        <OnPressTitle
          onPress={onPressExtension}
        >
          {degreeValue}
        </OnPressTitle>
        {this.renderContent()}
      </CardSection>
    );
  }
}

export default SingleSchoolForm;
