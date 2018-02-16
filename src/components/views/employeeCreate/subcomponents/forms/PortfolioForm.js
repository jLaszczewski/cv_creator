import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Button } from '../../../../common';
import { employeeUpdate } from '../../../../../actions';
import SingleProjectForm from './SingleProjectForm';
import { PORTFOLIO_FORM, ADD_ITEM, REMOVE_ITEM } from '../../../../../actions/types';

class PortfolioFormComponent extends Component {
  addJob() {
    this.props.employeeUpdate({
      form: PORTFOLIO_FORM,
      prop: ADD_ITEM,
      value: {
        nameValue: '',
        descriptionValue: '',
        isTechnologiesOpen: true,
        technologies: [],
        isStatsOpen: true,
        stats: [],
        isOpen: true
      }
    });
  }

  renderContent() {
    const { portfolio } = this.props;

    if (portfolio) {
      return portfolio.map((project, key) => (
        <SingleProjectForm
          key={key}
          index={key}
          nameValue={project.nameValue}
          nameOnChangeText={(nameValue) => this.props.employeeUpdate({
            form: PORTFOLIO_FORM,
            prop: key,
            value: nameValue,
            object: 'nameValue'
          })}
          descriptionValue={project.descriptionValue}
          descriptionOnChangeText={(descriptionValue) => this.props.employeeUpdate({
            form: PORTFOLIO_FORM,
            prop: key,
            value: descriptionValue,
            object: 'descriptionValue'
          })}
          technologies={project.technologies}
          stats={project.stats}
          onPressDelete={() => this.props.employeeUpdate({
            form: PORTFOLIO_FORM,
            prop: REMOVE_ITEM,
            value: '',
            object: key
          })}
          onPressExtension={() => this.props.employeeUpdate({
            form: PORTFOLIO_FORM,
            prop: key,
            value: !project.isOpen,
            object: 'isOpen'
          })}
          isTechnologiesOpen={project.isTechnologiesOpen}
          onPressTechnologiesExtension={() => this.props.employeeUpdate({
            form: PORTFOLIO_FORM,
            prop: key,
            value: !project.isTechnologiesOpen,
            object: 'isTechnologiesOpen'
          })}
          onPressStatsExtension={() => this.props.employeeUpdate({
            form: PORTFOLIO_FORM,
            prop: key,
            value: !project.isStatsOpen,
            object: 'isStatsOpen'
          })}
          isStatsOpen={project.isStatsOpen}
          isOpen={project.isOpen}
        />
      ));
    }
  }

  render() {
    return (
      <View>
        <View>
          {this.renderContent()}
        </View>
        <CardSection>
          <Button onPress={this.addJob.bind(this)}>
            Add New
          </Button>
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { portfolio } = state.employeeForm;

  return { portfolio };
};

const PortfolioForm = connect(mapStateToProps, {
  employeeUpdate
})(PortfolioFormComponent);

export { PortfolioForm };
