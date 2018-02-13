import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CheckBox } from '../../../../common';

class TechnologiesForm extends Component {
  renderText() {
    const { isOpen, skills } = this.props;

    if (isOpen) {
      console.log(skills);
      return skills.map((skill, key) => (
            <CheckBox key={key} label={skill.nameValue} isChecked />
        )
      );
    }
  }
  render() {
    return (
      <View>
        {this.renderText()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { skills } = state.employeeForm;

  return { skills };
};

export default connect(mapStateToProps)(TechnologiesForm);
