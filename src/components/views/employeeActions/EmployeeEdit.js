import React, { Component } from 'react';
import { ListView, Text } from 'react-native';
import { connect } from 'react-redux';
import CategoryItem from './subcomponents/CategoryItem';


class EmployeeEditComponent extends Component {
  // componentWillMount() {
  //     this.createDataSource(this.props);
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   this.createDataSource(nextProps);
  // }
  //
  // createDataSource({ categories }) {
  //   const ds = new ListView.DataSource({
  //     rowHasChanged: (r1, r2) => r1 !== r2
  //   });
  //
  //   this.dataSource = ds.cloneWithRows(categories);
  // }
  //
  // renderRow(category) {
  //   return <CategoryItem category={category} edit />;
  // }

  render() {
    return (
      <Text>Gi</Text>
      // <ListView
      //   dataSource={this.dataSource}
      //   renderRow={this.renderRow}
      // />
    );
  }
}

// const mapStateToProps = (state) => {
//   const { categories } = state.employeeForm;
//
//   return { categories };
// };

const EmployeeEdit = connect(null)(EmployeeEditComponent);

export { EmployeeEdit };
