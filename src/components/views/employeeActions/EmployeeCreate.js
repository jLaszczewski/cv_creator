import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import CategoryItem from './subcomponents/CategoryItem';
import {
  setEditState
} from '../../../actions';


class EmployeeCreateComponent extends Component {
  componentWillMount() {
    this.createDataSource(this.props);

    const { employee } = this.props;
    if (employee) {
      const {
        basicInformation = {},
        links = {},
        tranings = {},
        personality = {},
        skills = {},
        experiences = {},
        education = {},
        portfolio = {}
      } = employee;
      this.props.setEditState({
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
    const { employee } = this.props;
    if (employee) {
      return <CategoryItem employee={employee} category={category} />;
    }
    return <CategoryItem category={category} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { categories } = state.employeeForm;

  return { categories };
};

const EmployeeCreate = connect(mapStateToProps, { setEditState })(EmployeeCreateComponent);

export { EmployeeCreate };
