import React, { Component } from 'react';
import { View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { ExpandableCard, Card, Button } from '../../../common';
import {
  selectCategory,
  employeeCreate,
  employeeSave,
  employeeDelete,
  resetState
} from '../../../../actions';
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

  componentWillUnmount() {
    if (this.props.employee) {
      this.props.resetState();
    }
  }

  onSaveButtonPress() {
    const {
      basicInformation,
      links,
      tranings,
      personality,
      skills,
      experiences,
      education,
      portfolio,
      employee
    } = this.props;

    if (employee) {
      const { uid } = employee;
      this.props.employeeSave({
        basicInformation,
        links,
        tranings,
        personality,
        skills,
        experiences,
        education,
        portfolio,
        uid
      });
    } else {
      this.props.employeeCreate({
        basicInformation,
        links,
        tranings,
        personality,
        skills,
        experiences,
        education,
        portfolio,
      });
    }
  }

  renderButtons() {
    const { employee } = this.props;

    if (employee) {
      const uid = employee.uid;

      return (
        <View>
          <Card
            style={{
              borderRadius: 5,
              marginTop: 25
            }}
          >
            <Button
              onPress={this.onSaveButtonPress.bind(this)}
              style={{
                marginRight: 0,
                marginLeft: 0
              }}
            >
              Edit Employee
            </Button>
          </Card>

          <Card
            style={{
              borderRadius: 5,
              marginTop: 25
            }}
          >
            <Button
              onPress={() => this.props.employeeDelete({ uid })}
              redButton
              style={{
                marginRight: 0,
                marginLeft: 0
              }}
            >
              Delete Employee
            </Button>
          </Card>
        </View>
      );
    }

    return (
      <Card
        style={{
          borderRadius: 5,
          marginTop: 25
        }}
      >
        <Button
          onPress={this.onSaveButtonPress.bind(this)}
          style={{
            marginRight: 0,
            marginLeft: 0
          }}
        >
          Save Employee
        </Button>
      </Card>
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
    const { id, title, isOpen, buttons } = this.props.category;
    if (buttons) {
      return (
        <View>
          {this.renderButtons()}
        </View>
      );
    }

    return (
      <View>
        <Card>
          <ExpandableCard
            onPress={() => this.props.selectCategory({ id, isOpen: !isOpen })}
            isOpen={isOpen}
            label={title}
          >
            {this.renderCategory()}
          </ExpandableCard>
        </Card>
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

export default connect(mapStateToProps, {
  selectCategory,
  employeeCreate,
  employeeSave,
  employeeDelete,
  resetState
})(CategoryItem);
