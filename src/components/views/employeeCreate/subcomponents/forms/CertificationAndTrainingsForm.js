import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Button } from '../../../../common';
import { employeeUpdate } from '../../../../../actions';
import SingleTraningForm from './SingleTraningForm';
import { TRAINING_FORM, ADD_ITEM } from '../../../../../actions/types';

class CertificationAndTrainingsFormContent extends Component {
  addTraining() {
    this.props.employeeUpdate({
      form: TRAINING_FORM,
      prop: ADD_ITEM,
      value: {
        nameValue: '',
        beginDateValue: '',
        finishDateValue: '',
        isOpen: true
      }
    });
  }

  renderContent({ tranings }) {
    if (tranings) {
      return tranings.map((traning, key) =>
        <SingleTraningForm
          key={key}
          index={key}
          nameValue={traning.nameValue}
          nameOnChangeText={(nameValue) => this.props.employeeUpdate({
            form: TRAINING_FORM,
            prop: key,
            value: nameValue,
            object: 'nameValue'
          })}
          beginDateValue={traning.beginDateValue}
          beginDateOnChangeText={(beginDateValue) => this.props.employeeUpdate({
            form: TRAINING_FORM,
            prop: key,
            value: beginDateValue,
            object: 'beginDateValue'
          })}
          finishDateValue={traning.finishDateValue}
          finishDateOnChangeText={(finishDateValue) => this.props.employeeUpdate({
            form: TRAINING_FORM,
            prop: key,
            value: finishDateValue,
            object: 'finishDateValue'
          })}
          isOpen={traning.isOpen}
        />
      );
    }
  }

  render() {
    return (
      <View>
        <CardSection style={{ flexDirection: 'column' }}>
          {this.renderContent(this.props)}
        </CardSection>
        <CardSection>
          <Button onPress={this.addTraining.bind(this)}>
            Add New
          </Button>
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { tranings } = state.employeeForm;

  return { tranings };
};

const CertificationAndTrainingsForm = connect(mapStateToProps, {
  employeeUpdate
})(CertificationAndTrainingsFormContent);

export { CertificationAndTrainingsForm };
