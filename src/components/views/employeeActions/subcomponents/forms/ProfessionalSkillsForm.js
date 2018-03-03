import _ from 'lodash';
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Button } from '../../../../common';
import { employeeUpdate } from '../../../../../actions';
import SingleSkillForm from './SingleSkillForm';
import { SKILLS_FORM, ADD_ITEM, REMOVE_ITEM } from '../../../../../actions/types';

class ProfessionalSkillsFormComponent extends Component {
  addSkill() {
    this.props.employeeUpdate({
      form: SKILLS_FORM,
      prop: ADD_ITEM,
      value: {
        nameValue: '',
        slideValue: 5,
        isOpen: true,
        item: 'nameValue'
      }
    });
  }

  renderContent({ skills }) {
    if (skills) {
      return _.map(skills, (skill, key) =>
        <SingleSkillForm
          key={key}
          nameValue={skill.nameValue}
          nameOnChangeText={(nameValue) => this.props.employeeUpdate({
            form: SKILLS_FORM,
            prop: key,
            value: nameValue,
            object: 'nameValue'
          })}
          slideValue={skill.slideValue}
          onSlidingComplete={(slideValue) => this.props.employeeUpdate({
            form: SKILLS_FORM,
            prop: key,
            value: slideValue,
            object: 'slideValue'
          })}
          onPressDelete={() => this.props.employeeUpdate({
            form: SKILLS_FORM,
            prop: REMOVE_ITEM,
            value: '',
            object: key
          })}
          onPressExtension={() => this.props.employeeUpdate({
            form: SKILLS_FORM,
            prop: key,
            value: !skill.isOpen,
            object: 'isOpen'
          })}
          isOpen={skill.isOpen}
        />
      );
    }
  }

  render() {
    return (
      <View>
          {this.renderContent(this.props)}
        <CardSection>
          <Button onPress={this.addSkill.bind(this)}>
            Add New
          </Button>
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { skills } = state.employeeForm;

  return { skills };
};

const ProfessionalSkillsForm = connect(mapStateToProps, {
  employeeUpdate
})(ProfessionalSkillsFormComponent);

export { ProfessionalSkillsForm };
