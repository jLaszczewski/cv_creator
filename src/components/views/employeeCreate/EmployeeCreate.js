import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import CategoryItem from './subcomponents/CategoryItem';
import { selectCategory } from '../../../actions';


class EmployeeCreateComponent extends Component {
  componentWillMount() {
      this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ categories }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(categories);
  }

  renderRow(category) {
    return <CategoryItem category={category} />;
  }

  render() {
    // console.log(this.props.categories);
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { categories } = state.employeeForm;

  return { categories };
};

const EmployeeCreate = connect(mapStateToProps, { selectCategory })(EmployeeCreateComponent);

export { EmployeeCreate };
