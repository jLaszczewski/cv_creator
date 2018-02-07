import React, { Component } from 'react';
import { View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card } from '../../../common';
import { CategoryTitle } from './CategoryTitle';
import { selectCategory } from '../../../../actions';
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
        <CardSection>
          <CategoryTitle onPress={() => this.props.selectCategory({ id, isOpen: !isOpen })}>
            {title}
          </CategoryTitle>
        </CardSection>
        {this.renderCategory()}
      </Card>
    );
  }
}

export default connect(null, { selectCategory })(CategoryItem);
