import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import { CardSection } from '../../../common';

class EmployeeItem extends Component {
  onRowPress() {
    // const { employee } = this.props;

    // Actions.employeeEdit({ employee });
  }

  render() {
    const { name, lastname } = this.props.employee;
    const { titleStyle } = styles;

    return (
        <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
          <View>
            <CardSection>
              <Text style={titleStyle}>
                {`${name} ${lastname}`}
              </Text>
            </CardSection>
          </View>
        </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default EmployeeItem;
