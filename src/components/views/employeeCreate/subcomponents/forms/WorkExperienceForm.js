import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Button } from '../../../../common';
import { employeeUpdate } from '../../../../../actions';
import SingleExperienceForm from './SingleExperienceForm';
import { EXPERIENCES_FORM, ADD_ITEM, REMOVE_ITEM } from '../../../../../actions/types';

class WorkExperienceFormComponent extends Component {
  addExperience() {
    this.props.employeeUpdate({
      form: EXPERIENCES_FORM,
      prop: ADD_ITEM,
      value: {
        nameValue: '',
        beginDateValue: '',
        finishDateValue: '',
        isOpen: true
      }
    });
  }

  renderContent({ experiences }) {
    if (experiences) {
      return experiences.map((experience, key) =>
        <SingleExperienceForm
          key={key}
          nameValue={experience.nameValue}
          nameOnChangeText={(nameValue) => this.props.employeeUpdate({
            form: EXPERIENCES_FORM,
            prop: key,
            value: nameValue,
            object: 'nameValue'
          })}
          beginDateValue={experience.beginDateValue}
          beginDateOnChangeText={(beginDateValue) => this.props.employeeUpdate({
            form: EXPERIENCES_FORM,
            prop: key,
            value: beginDateValue,
            object: 'beginDateValue'
          })}
          finishDateValue={experience.finishDateValue}
          finishDateOnChangeText={(finishDateValue) => this.props.employeeUpdate({
            form: EXPERIENCES_FORM,
            prop: key,
            value: finishDateValue,
            object: 'finishDateValue'
          })}
          jobTitleValue={experience.jobTitleValue}
          jobTitleOnChangeText={(jobTitleValue) => this.props.employeeUpdate({
            form: EXPERIENCES_FORM,
            prop: key,
            value: jobTitleValue,
            object: 'jobTitleValue'
          })}
          responsibilityValue={experience.responsibility}
          responsibilityOnChangeText={(responsibilityValue) => this.props.employeeUpdate({
            form: EXPERIENCES_FORM,
            prop: key,
            value: responsibilityValue,
            object: 'responsibilityValue'
          })}
          onPressDelete={() => this.props.employeeUpdate({
            form: EXPERIENCES_FORM,
            prop: REMOVE_ITEM,
            value: '',
            object: key
          })}
          onPressExtension={() => this.props.employeeUpdate({
            form: EXPERIENCES_FORM,
            prop: key,
            value: !experience.isOpen,
            object: 'isOpen'
          })}
          isOpen={experience.isOpen}
        />
      );
    }
  }

  render() {
    return (
      <View>
        <View>
          {this.renderContent(this.props)}
        </View>
        <CardSection>
          <Button onPress={this.addExperience.bind(this)}>
            Add New
          </Button>
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { experiences } = state.employeeForm;

  return { experiences };
};

const WorkExperienceForm = connect(mapStateToProps, {
  employeeUpdate
})(WorkExperienceFormComponent);

export { WorkExperienceForm };
