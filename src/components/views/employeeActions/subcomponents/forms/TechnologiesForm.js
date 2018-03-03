import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ExpandableCard, CheckBox } from '../../../../common';
import { TECHNOLOGIES_FORM } from '../../../../../actions/types';
import { employeeUpdate } from '../../../../../actions';

class TechnologiesForm extends Component {
  renderContent() {
    const { usedTechnologies, technologies, index } = this.props;

    if (technologies) {
      return _.map(technologies, (technology, key) => (
          <CheckBox
            key={key}
            label={technology.nameValue}
            checked={usedTechnologies[key]}
            onPress={() => this.props.employeeUpdate({
              form: TECHNOLOGIES_FORM,
              prop: {
                projectId: index,
                technologyId: key
              }
            })}
          />
        )
      );
    }
  }

  render() {
    const {
      onPressTechnologiesExtension,
      isOpen
     } = this.props;

    return (
      <ExpandableCard
        onPress={onPressTechnologiesExtension}
        isOpen={isOpen}
        label={'Application uses'}
      >
        {this.renderContent()}
      </ExpandableCard>
    );
  }
}

export default connect(null, { employeeUpdate })(TechnologiesForm);
