import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ExpandableCard, CheckBox } from '../../../../common';
import { TECHNOLOGIES_FORM } from '../../../../../actions/types';
import { employeeUpdate } from '../../../../../actions';

class TechnologiesForm extends Component {
  renderContent() {
    const { technologies, index } = this.props;

    if (technologies) {
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

  render() {
    const {
      onPressExtension,
      isOpen
     } = this.props;

    return (
      <ExpandableCard
        onPress={onPressExtension}
        isOpen={isOpen}
        label={'Application uses'}
      >
        {this.renderContent()}
      </ExpandableCard>
    );
  }
}

export default connect(null, { employeeUpdate })(TechnologiesForm);
