import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from '../../../../common';
import { employeeUpdate } from '../../../../../actions';
import { LINKS_FORM } from '../../../../../actions/types';


class LinksFormComponent extends Component {
  render() {
    const { github, stackOverflow, email } = this.props;

    return (
      <View>
        <CardSection style={{ flexDirection: 'column' }}>
          <Input
            label="Github"
            placeholder="/jLaszczewski"
            value={github}
            onChangeText={(value) => this.props.employeeUpdate({
              form: LINKS_FORM,
              prop: 'github',
              value })}
            autoCapitalize='none'
          />
          <Input
            label="Stack Overflow"
            placeholder="/u/5569670"
            value={stackOverflow}
            onChangeText={(value) => this.props.employeeUpdate({
              form: LINKS_FORM,
              prop: 'stackOverflow',
              value })}
            autoCapitalize='none'
          />
          <Input
            label="E-mail"
            placeholder="jakub.laszczewski@bcf-software.pl"
            value={email}
            onChangeText={(value) => this.props.employeeUpdate({
              form: LINKS_FORM,
              prop: 'email',
              value
            })}
            autoCapitalize='none'
          />
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    github,
    stackOverflow,
    email
  } = state.employeeForm.links;

  return { github, stackOverflow, email };
};

const LinksForm = connect(
  mapStateToProps, {
      employeeUpdate
    }
)(LinksFormComponent);

export { LinksForm };
