import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Button, OnPressTitle } from '../../../../common';
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
        project: index
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
      return stats.map((param, key) => (
        <SingleParamForm
          key={key}
          index={key}
          quantityValue={param.quantity}
          quantityOnChangeText={(quantity) => this.props.employeeUpdate({
            form: STATS_FORM,
            prop: {
              project: index,
              param: key,
              paramProp: 'quantity'
            },
            value: quantity,
          })}
          activitiesValue={param.activities}
          activitiesOnChangeText={(activities) => this.props.employeeUpdate({
            form: STATS_FORM,
            prop: {
              project: index,
              param: key,
              paramProp: 'activities'
            },
            value: activities,
          })}
          onPressExtension={() => this.props.employeeUpdate({
            form: STATS_FORM,
            prop: {
              project: index,
              param: key,
              paramProp: 'isOpen'
            },
            value: !param.isOpen,
          })}
          onPressDelete={() => this.props.employeeUpdate({
            form: STATS_FORM,
            prop: {
              type: REMOVE_ITEM,
              project: index,
              param: key
            }
          })}
          isOpen={param.isOpen}
        />
      ));
    }
  }

  renderContent() {
    const { isOpen } = this.props;

    if (isOpen) {
      return (
        <View>
          {this.renderStats()}
          <CardSection>
            <Button onPress={this.addParam.bind(this)}>
              Add Parameter
            </Button>
          </CardSection>
        </View>
      );
    }
  }

  render() {
    const { onPressExtension } = this.props;

    return (
      <View>
        <OnPressTitle onPress={onPressExtension}>
          Statisic
        </OnPressTitle>
        {this.renderContent()}
      </View>
    );
  }
}

export default connect(null, { employeeUpdate })(StatsForm);
