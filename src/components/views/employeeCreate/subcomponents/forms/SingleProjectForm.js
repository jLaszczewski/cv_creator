import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../../../../../actions';
import { Input, OnPressTitle, Button, CardSection } from '../../../../common';
import { PORTFOLIO_FORM } from '../../../../../actions/types';
import TechnologiesForm from './TechnologiesForm';

class SingleProjectForm extends Component {
  onPressTechnologies() {

  }

  onPressStats() {

  }

  renderContent() {
    const {
      isOpen,
      index,
      nameValue,
      nameOnChangeText,
      descriptionValue,
      descriptionOnChangeText,
      onPressDelete,
      employeeUpdate
     } = this.props;

    if (isOpen) {
      return (
        <View>
          <Input
            label='Project name'
            placeholder={`Project ${index + 1}`}
            value={nameValue}
            onChangeText={nameOnChangeText}
          />
          <Input
            label='Description'
            placeholder='Application shows how many bitcoins the user have. Application is working on a big data sets from blockchain API system. This application allows users to send and receive payments through API. Jakub wrote very smart, self-learning algorithms to interact with the blockchain API. Jakub did a research to find the best UX/UI practices.'
            value={descriptionValue}
            onChangeText={descriptionOnChangeText}
          />
          <OnPressTitle onPress={this.onPressTechnologies.bind(this)}>
            Application uses:
          </OnPressTitle>
          <TechnologiesForm
            isOpen
          />
          <OnPressTitle onPress={this.onPressStats.bind(this)}>
            Statistic
          </OnPressTitle>
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
      nameValue,
      index
     } = this.props;

    return (
      <CardSection style={{ flexDirection: 'column' }}>
        <OnPressTitle
          onPress={onPressExtension}
        >
          {nameValue || `Project ${index + 1}`}
        </OnPressTitle>
        {this.renderContent()}
      </CardSection>
    );
  }
}
//
// const mapStateToProps = (state) => {
//   const {
//     technologies,
//     stats
//   } = state.employeeForm.potfolio[this.props.index];
//
//   return { technologies, stats };
// };

export default connect(null, { employeeUpdate })(SingleProjectForm);
