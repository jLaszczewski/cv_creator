import { combineReducers } from 'redux';
import EmployeeCreateReducer from './EmployeeCreateReducer';

export default combineReducers({
  employeeForm: EmployeeCreateReducer
});
