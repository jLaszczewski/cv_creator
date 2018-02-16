import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../../../../../actions';
import { Input, OnPressTitle, Button, CardSection, CheckBox } from '../../../../common';
import { TECHNOLOGIES_FORM } from '../../../../../actions/types';
import StatsForm from './StatsForm';

class SingleProjectForm extends Component {
  onPressTechnologies() {

  }

  onPressStats() {

  }

  renderTechnologies() {
    const {
      technologies,
      index,
      isTechnologiesOpen
    } = this.props;

    if (isTechnologiesOpen) {
      return technologies.map((technology, key) => (
          <CheckBox
            key={key}
            label={technology.nameValue}
            checked={technology.checked}
            onPress={() => this.props.employeeUpdate({
              form: TECHNOLOGIES_FORM,
              prop: index,
              value: key,
            })}
          />
        )
      );
    }
  }

  renderContent() {
    const {
      isStatsOpen,
      onPressStatsExtension,
      onPressTechnologiesExtension,
      isOpen,
      index,
      nameValue,
      nameOnChangeText,
      descriptionValue,
      descriptionOnChangeText,
      stats,
      onPressDelete
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
          <OnPressTitle onPress={onPressTechnologiesExtension}>
            Application uses:
          </OnPressTitle>
          {this.renderTechnologies()}
          <StatsForm
            index={index}
            stats={stats}
            onPressExtension={onPressStatsExtension}
            isOpen={isStatsOpen}
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

export default connect(null, { employeeUpdate })(SingleProjectForm);
