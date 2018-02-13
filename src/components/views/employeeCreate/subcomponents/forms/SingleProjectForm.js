import React, { Component } from 'react';
import { View } from 'react-native';
import { Input, OnPressTitle, Button, CardSection } from '../../../../common';

class SingleProjectForm extends Component {
  renderContent() {
    const {
      isOpen,
      descriptionValue,
      descriptionOnChangeText,
      applicationValue,
      statsValue,
      onPressDelete
     } = this.props;

    if (isOpen) {
      return (
        <View>
          <Input
            label='Description'
            placeholder='Application shows how many bitcoins the user have. Application is working on a big data sets from blockchain API system. This application allows users to send and receive payments through API. Jakub wrote very smart, self-learning algorithms to interact with the blockchain API. Jakub did a research to find the best UX/UI practices.'
            value={descriptionValue}
            onChangeText={descriptionOnChangeText}
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
      onPressExtension,
      index
     } = this.props;

    return (
      <CardSection style={{ flexDirection: 'column' }}>
        <OnPressTitle
          onPress={onPressExtension}
        >
          {`Project ${index}`}
        </OnPressTitle>
        {this.renderContent()}
      </CardSection>
    );
  }
}

// const styles = {
//   titleStyle: {
//     fontSize: 25,
//     lineHeight: 30,
//     fontWeight: '900'
//   }
// };

export default SingleProjectForm;
