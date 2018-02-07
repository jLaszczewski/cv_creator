import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../../../../../actions';
import { BASIC_INFORMATION_FORM } from '../../../../../actions/types';
import { CardSection, Input, PictureGetter } from '../../../../common';

class BasicInformationFormComponent extends Component {
  render() {
    const { name, lastname, jobTitle, description, photoUri } = this.props;

    return (
      <View>
        <CardSection style={{ flexDirection: 'column' }}>
          <Input
            label="Name"
            placeholder="JAKUB"
            value={name}
            onChangeText={(value) => this.props.employeeUpdate({
              form: BASIC_INFORMATION_FORM,
              prop: 'name',
              value })}
            autoCapitalize='characters'
          />
          <Input
            label="Lastname"
            placeholder="LASZCZEWSKI"
            value={lastname}
            onChangeText={(value) => this.props.employeeUpdate({
              form: BASIC_INFORMATION_FORM,
              prop: 'lastname',
              value })}
            autoCapitalize='characters'
          />
          <Input
            label="Job title"
            placeholder="Software Developer"
            value={jobTitle}
            onChangeText={(value) => this.props.employeeUpdate({
              form: BASIC_INFORMATION_FORM,
              prop: 'jobTitle',
              value
            })}
            autoCapitalize='words'
          />
          <Input
            multiline
            label="Description"
            placeholder="Very ambitious and diligent young programmer..."
            value={description}
            onChangeText={(value) => this.props.employeeUpdate({
              form: BASIC_INFORMATION_FORM,
              prop: 'description',
              value
            })}
          />

          <PictureGetter
            label="Photo"
            photoUri={photoUri}
          />
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    name,
    lastname,
    jobTitle,
    description,
    photoUri
  } = state.employeeForm.basicInformation;

  return { name, lastname, jobTitle, description, photoUri };
};

const BasicInformationForm = connect(
  mapStateToProps, {
      employeeUpdate
    }
)(BasicInformationFormComponent);

export { BasicInformationForm };
