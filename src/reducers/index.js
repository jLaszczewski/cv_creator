import { combineReducers } from 'redux';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeesReducer from './EmployeesReducer';

export default combineReducers({
  employeeForm: EmployeeFormReducer,
  employees: EmployeesReducer
});
