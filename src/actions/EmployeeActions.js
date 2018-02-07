
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import {
  SELECT_CATEGORY,
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_CREATE_REQUEST,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
} from './types';

export const selectCategory = ({ id, isOpen }) => {
  return {
    type: SELECT_CATEGORY,
    payload: { id, isOpen }
  };
};

export const employeeUpdate = ({ form, prop, value, objectArray }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { form, prop, value, objectArray }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    dispatch({ type: EMPLOYEE_CREATE_REQUEST });

    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({
        name, phone, shift
      })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.pop();
    });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        Actions.pop();
      });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.pop();
      });
  };
};
