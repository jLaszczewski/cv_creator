import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Button } from '../../../../common';
import { employeeUpdate } from '../../../../../actions';
import SingleSkillForm from './SingleSkillForm';
import { SKILLS_FORM, ADD_ITEM } from '../../../../../actions/types';

class ProfessionalSkillsFormComponent extends Component {
  addSkill() {
    this.props.employeeUpdate({
      form: SKILLS_FORM,
      prop: ADD_ITEM,
      value: {
        nameValue: '',
        value: 5,
        isOpen: true
      }
    });
  }

  renderContent({ skills }) {
    if (skills) {
      return skills.map((skill, key) =>
        <SingleSkillForm
          key={key}
          index={key}
          nameValue={skill.nameValue}
          nameOnChangeText={(nameValue) => this.props.employeeUpdate({
            form: SKILLS_FORM,
            prop: key,
            value: nameValue,
            object: 'nameValue'
          })}
          slideValue={skill.slideValue}
          onSlidingComplete={(sliderValue) => this.props.employeeUpdate({
            form: SKILLS_FORM,
            prop: key,
            value: sliderValue,
            object: 'sliderValue'
          })}
          isOpen={skill.isOpen}
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
