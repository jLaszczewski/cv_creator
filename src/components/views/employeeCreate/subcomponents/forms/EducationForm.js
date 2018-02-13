import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Button } from '../../../../common';
import { employeeUpdate } from '../../../../../actions';
import SingleSchoolForm from './SingleSchoolForm';
import { EDUCATION_FORM, ADD_ITEM, REMOVE_ITEM } from '../../../../../actions/types';

class EducationFormComponent extends Component {
  addSchool() {
    this.props.employeeUpdate({
      form: EDUCATION_FORM,
      prop: ADD_ITEM,
      value: {
        degreeValue: '',
        beginDateValue: '',
        finishDateValue: '',
        schoolValue: '',
        isOpen: true
      }
    });
  }

  renderContent() {
    const { education } = this.props;

    if (education) {
      return education.map((school, key) =>
        <SingleSchoolForm
          key={key}
          degreeValue={school.degreeValue}
          degreeOnChangeText={(degreeValue) => this.props.employeeUpdate({
            form: EDUCATION_FORM,
            prop: key,
            value: degreeValue,
            object: 'degreeValue'
          })}
          beginDateValue={school.beginDateValue}
          beginDateOnChangeText={(beginDateValue) => this.props.employeeUpdate({
            form: EDUCATION_FORM,
            prop: key,
            value: beginDateValue,
            object: 'beginDateValue'
          })}
          finishDateValue={school.finishDateValue}
          finishDateOnChangeText={(finishDateValue) => this.props.employeeUpdate({
            form: EDUCATION_FORM,
            prop: key,
            value: finishDateValue,
            object: 'finishDateValue'
          })}
          schoolValue={school.schoolValue}
          schoolOnChangeText={(schoolValue) => this.props.employeeUpdate({
            form: EDUCATION_FORM,
            prop: key,
            value: schoolValue,
            object: 'schoolValue'
          })}
          responsibilityValue={school.responsibility}
          responsibilityOnChangeText={(responsibilityValue) => this.props.employeeUpdate({
            form: EDUCATION_FORM,
            prop: key,
            value: responsibilityValue,
            object: 'responsibilityValue'
          })}
          onPressDelete={() => this.props.employeeUpdate({
            form: EDUCATION_FORM,
            prop: REMOVE_ITEM,
            value: '',
            object: key
          })}
          onPressExtension={() => this.props.employeeUpdate({
            form: EDUCATION_FORM,
            prop: key,
            value: !school.isOpen,
            object: 'isOpen'
          })}
          isOpen={school.isOpen}
        />
      );
    }
  }

  render() {
    return (
      <View>
        <View>
          {this.renderContent()}
        </View>
        <CardSection>
          <Button onPress={this.addSchool.bind(this)}>
            Add New
          </Button>
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { education } = state.employeeForm;

  return { education };
};

const EducationForm = connect(mapStateToProps, {
  employeeUpdate
})(EducationFormComponent);

export { EducationForm };
