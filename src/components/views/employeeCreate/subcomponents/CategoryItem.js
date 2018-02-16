import React, { Component } from 'react';
import { View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { ExpandableCard, Card } from '../../../common';
import { selectCategory, employeeCreate } from '../../../../actions';
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
    const { id, title, isOpen } = this.props.category;

    return (
      <Card>
        <ExpandableCard
          onPress={() => this.props.selectCategory({ id, isOpen: !isOpen })}
          isOpen={isOpen}
          label={title}
        >
        {this.renderCategory()}
        </ExpandableCard>
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

export default connect(mapStateToProps, { selectCategory, employeeCreate })(CategoryItem);
