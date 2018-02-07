import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection } from '../../../../common';

class PersonalityForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Text>Personality data form</Text>
        </CardSection>
      </View>
    );
  }
}

export { PersonalityForm };
