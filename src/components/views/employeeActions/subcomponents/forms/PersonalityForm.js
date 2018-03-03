import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardSection, SliderInput } from '../../../../common';
import { employeeUpdate } from '../../../../../actions';
import { PERSONALITY_FORM } from '../../../../../actions/types';


class PersonalityFormComponent extends Component {
  render() {
    const { realiability, abilityToLearn, teamSkills, flexibility } = this.props;

    return (
        <CardSection style={{ flexDirection: 'column' }}>
          <SliderInput
            maximumValue={100}
            minimumValue={1}
            step={1}
            isPercent
            label='Realiability'
            onSlidingComplete={(value) => this.props.employeeUpdate({
              form: PERSONALITY_FORM,
              prop: 'realiability',
              value })}
            value={realiability}
          />

          <SliderInput
            maximumValue={100}
            minimumValue={1}
            step={1}
            isPercent
            label='Ability to learn'
            onSlidingComplete={(value) => this.props.employeeUpdate({
              form: PERSONALITY_FORM,
              prop: 'abilityToLearn',
              value })}
            value={abilityToLearn}

          />
          <SliderInput
            maximumValue={100}
            minimumValue={1}
            step={1}
            isPercent
            label='Team skills'
            onSlidingComplete={(value) => this.props.employeeUpdate({
              form: PERSONALITY_FORM,
              prop: 'teamSkills',
              value })}
            value={teamSkills}

          />
          <SliderInput
            maximumValue={100}
            minimumValue={1}
            step={1}
            isPercent
            label='Flexibility'
            onSlidingComplete={(value) => this.props.employeeUpdate({
              form: PERSONALITY_FORM,
              prop: 'flexibility',
              value })}
            value={flexibility}
          />
        </CardSection>
    );
  }
}

const mapStateToProps = (state) => {
  const { realiability, abilityToLearn, teamSkills, flexibility } = state.employeeForm.personality;

  return { realiability, abilityToLearn, teamSkills, flexibility };
};

const PersonalityForm = connect(mapStateToProps, { employeeUpdate })(PersonalityFormComponent);

export { PersonalityForm };
