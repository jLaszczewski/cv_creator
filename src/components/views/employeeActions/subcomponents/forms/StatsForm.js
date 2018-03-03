import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardSection, Button, ExpandableCard } from '../../../../common';
import { ADD_ITEM, STATS_FORM, REMOVE_ITEM } from '../../../../../actions/types';
import { employeeUpdate } from '../../../../../actions';
import SingleParamForm from './SingleParamForm';

class StatsForm extends Component {
  addParam() {
    const { index } = this.props;
    this.props.employeeUpdate({
      form: STATS_FORM,
      prop: {
        type: ADD_ITEM,
        projectId: index,
      },
      value: {
        quantity: '',
        activities: '',
        isOpen: true
      }
    });
  }

  renderStats() {
    const { stats, index } = this.props;


    if (stats) {
      return _.map(stats, (param, key) => (
        <SingleParamForm
          key={key}
          index={key}
          quantityValue={param.quantity}
          quantityOnChangeText={(quantity) => this.props.employeeUpdate({
            form: STATS_FORM,
            prop: {
              projectId: index,
              statId: key,
              paramProp: 'quantity'
            },
            value: quantity,
          })}
          activitiesValue={param.activities}
          activitiesOnChangeText={(activities) => this.props.employeeUpdate({
            form: STATS_FORM,
            prop: {
              projectId: index,
              statId: key,
              paramProp: 'activities'
            },
            value: activities,
          })}
          onPressExtension={() => this.props.employeeUpdate({
            form: STATS_FORM,
            prop: {
              projectId: index,
              statId: key,
              paramProp: 'isOpen'
            },
            value: !param.isOpen,
          })}
          onPressDelete={() => this.props.employeeUpdate({
            form: STATS_FORM,
            prop: {
              type: REMOVE_ITEM,
              projectId: index,
              statId: key,
            }
          })}
          isOpen={param.isOpen}
        />
      ));
    }
  }

  render() {
    const {
      onPressExtension,
      isOpen,

    } = this.props;

    return (
      <ExpandableCard
        onPress={onPressExtension}
        isOpen={isOpen}
        label={'Statisic'}
      >
        {this.renderStats()}
        <CardSection>
          <Button onPress={this.addParam.bind(this)}>
            Add Parameter
          </Button>
        </CardSection>
      </ExpandableCard>
    );
  }
}

export default connect(null, { employeeUpdate })(StatsForm);
