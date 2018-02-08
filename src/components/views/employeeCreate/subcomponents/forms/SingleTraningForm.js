import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../../../../../actions';
import { Input, OnPressTitle } from '../../../../common';
import { TRAINING_FORM } from '../../../../../actions/types';


class SingleTraningForm extends Component {
  renderContent() {
    const {
      nameValue,
      nameOnChangeText,
      beginDateValue,
      beginDateOnChangeText,
      finishDateValue,
      finishDateOnChangeText,
      isOpen
     } = this.props;

    if (isOpen) {
      return (
        <View>
        <Input
          label='name'
          placeholder='iOS App Development with Swift'
          value={nameValue}
          onChangeText={nameOnChangeText}
        />
        <Input
          label='Begin date'
          placeholder='FEB 2017'
          value={beginDateValue}
          onChangeText={beginDateOnChangeText}
        />
        <Input
          label='Finish date'
          placeholder='MAR 2017'
          value={finishDateValue}
          onChangeText={finishDateOnChangeText}
        />
        </View>
      );
    }
  }

  render() {
    const {
      nameValue,
      index,
      isOpen
     } = this.props;

    return (
      <View style={{ flexDirection: 'column' }}>
        <OnPressTitle
          onPress={() => this.props.employeeUpdate({
            form: TRAINING_FORM,
            prop: index,
            value: !isOpen,
            object: 'isOpen'
          })}
        >
          {nameValue}
        </OnPressTitle>
        {this.renderContent()}
      </View>
    );
  }
}

// const mapStateToProps = (state) => {
//   const {
//     nameValue,
//     nameOnChangeText,
//     beginDateValue,
//     beginDateOnChangeText,
//     finishDateValue,
//     finishDateOnChangeText,
//     isOpen
//   } = state.employeeForm.tranings;
//
//   console.log(state.employeeForm.tranings);
//
//   return {
//     nameValue,
//     nameOnChangeText,
//     beginDateValue,
//     beginDateOnChangeText,
//     finishDateValue,
//     finishDateOnChangeText,
//     isOpen
//   };
// };

export default connect(null, { employeeUpdate })(SingleTraningForm);
