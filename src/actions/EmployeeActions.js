
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

export const employeeUpdate = ({ form, prop, value, object }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { form, prop, value, object }
  };
};

export const employeeCreate = ({
  basicInformation,
  links,
  tranings,
  personality,
  skills,
  experiences,
  education,
  portfolio
}) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: EMPLOYEE_CREATE_REQUEST });

    console.log(EMPLOYEE_CREATE);

    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({
        basicInformation,
        links,
        tranings,
        personality,
        skills,
        experiences,
        education,
        portfolio
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

export const employeeSave = ({
  basicInformation,
  links,
  tranings,
  personality,
  skills,
  experiences,
  education,
  portfolio
}) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: EMPLOYEE_CREATE_REQUEST });

    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .set({
        basicInformation,
        links,
        tranings,
        personality,
        skills,
        experiences,
        education,
        portfolio
      })
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
