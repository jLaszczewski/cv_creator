

import React, { Component } from 'react';
import { View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from '../../../common';
import { employeeCreate } from '../../../../actions';
import {
  BasicInformationForm,
  LinksForm,
  CertificationAndTrainingsForm,
  PersonalityForm,
  ProfessionalSkillsForm,
  WorkExperienceForm,
  EducationForm,
  PortfolioForm
} from './forms';

class CategoryItem extends Component {
  componentWillUpdate() {
      LayoutAnimation.easeInEaseOut();
  }

  onButtonPress() {
    const {
      basicInformation = {},
      links = {},
      tranings = {},
      personality = {},
      skills = {},
      experiences = {},
      education = {},
      portfolio = {}
    } = this.props;

    this.props.employeeCreate(
      basicInformation,
      links,
      tranings,
      personality,
      skills,
      experiences,
      education,
      portfolio
    );
  }

  renderCategory() {
    const { id, isOpen } = this.props.category;

    if (isOpen) {
      switch (id) {
        case 0:
          return <BasicInformationForm />;
        case 1:
          return <LinksForm />;
        case 2:
          return <CertificationAndTrainingsForm />;
        case 3:
          return <PersonalityForm />;
        case 4:
          return <ProfessionalSkillsForm />;
        case 5:
          return <WorkExperienceForm />;
        case 6:
          return <EducationForm />;
        case 7:
          return <PortfolioForm />;
        default:
          return <View />;
      }
    }
  }

  render() {
    return (
      <Card>
        <Button onPress={this.onButtonPress.bind(this)}>
          Save employee
        </Button>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    basicInformation,
    links,
    tranings,
    personality,
    skills,
    experiences,
    education,
    portfolio,
  } = state.employeeForm;

  return {
    basicInformation,
    links,
    tranings,
    personality,
    skills,
    experiences,
    education,
    portfolio
  };
};

export default connect(mapStateToProps, { employeeCreate })(CategoryItem);
