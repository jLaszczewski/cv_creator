import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import Autologin from './components/Autologin';
import { EmployeeList } from './components/views/employeeList';
import { EmployeeCreate } from './components/views/employeeCreate';
import PhotoPickerView from './components/common/PhotoPickerView';

const RouterComponent = () => {
  // rightTitle="Add"
  // onRight={() => { Actions.employeeCreate(); }}
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="loginScreen" title="CV Creator" component={Autologin} initial />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => { Actions.employeeCreate(); }}
            key="employeeList"
            component={EmployeeList}
            title="EmployeeList"
            initial
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
          <Scene key="getImage" component={PhotoPickerView} title="Select image" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
