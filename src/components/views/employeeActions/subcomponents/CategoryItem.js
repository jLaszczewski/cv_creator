import React, { Component } from 'react';
import { View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { ExpandableCard, Card, Button } from '../../../common';
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

  onButtonPress() {
    const {
      basicInformation = {
        name: ''
      },
      links = {},
      tranings = {},
      personality = {},
      skills = {},
      experiences = {},
      education = {},
      portfolio = {}
    } = this.props;

    this.props.employeeCreate({
      basicInformation,
      links,
      tranings,
      personality,
      skills,
      experiences,
      education,
      portfolio
    });
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

    const isCreateButton = (id === 'createButton');

    return (
      <View>
        {isCreateButton ? (
          <Card
            style={{
              borderRadius: 5,
              marginTop: 25
            }}
          >
            <Button
              onPress={this.onButtonPress.bind(this)}
              style={{
                marginRight: 0,
                marginLeft: 0
              }}
            >
              {title}
            </Button>
          </Card>
        ) : (
          <Card>
            <ExpandableCard
              onPress={() => this.props.selectCategory({ id, isOpen: !isOpen })}
              isOpen={isOpen}
              label={title}
            >
              {this.renderCategory()}
            </ExpandableCard>
          </Card>
        )}
      </View>
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
