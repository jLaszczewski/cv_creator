import update from 'react-addons-update';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_CREATE_REQUEST,
  EMPLOYEE_SAVE_SUCCESS,
  SELECT_CATEGORY,
  BASIC_INFORMATION_FORM,
  LINKS_FORM,
  TRAINING_FORM,
  PERSONALITY_FORM,
  SKILLS_FORM,
  ADD_ITEM
} from '../actions/types';
import CategoriesList from '../public/CategoriesList';


const INITIAL_STATE = {
  basicInformation: {
    name: '',
    lastname: '',
    jobTitle: '',
    description: '',
    photoUri: ''
  },
  links: {
    github: '',
    stackOverflow: '',
    email: ''
  },
  tranings: [
  ],
  personality: {
    realiability: 0,
    abilityToLearn: 0,
    teamSkills: 0,
    flexibility: 0
  },
  skills: [
  ],
  categories: {
    ...CategoriesList
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      switch (action.payload.form) {
        case BASIC_INFORMATION_FORM:
          return { ...state,
            basicInformation: {
              ...state.basicInformation,
              [action.payload.prop]: action.payload.value
            }
          };
        case LINKS_FORM:
          return { ...state,
            links: {
              ...state.links,
              [action.payload.prop]: action.payload.value
            }
          };
        case TRAINING_FORM:
          if (action.payload.prop === ADD_ITEM) {
            return { ...state,
              tranings: state.tranings.concat(action.payload.value)
            };
          }
            return update(state, {
              tranings: {
                [action.payload.prop]: {
                  [action.payload.object]: { $set: action.payload.value }
                }
              }
            }
          );
        case PERSONALITY_FORM:
          return {
            ...state,
            personality: {
              ...state.personality,
                [action.payload.prop]: action.payload.value
              }
            };
        case SKILLS_FORM:
        if (action.payload.prop === ADD_ITEM) {
          return { ...state,
            skills: state.skills.concat(action.payload.value)
          };
        }
          return update(state, {
            skills: {
              [action.payload.prop]: {
                [action.payload.object]: { $set: action.payload.value }
              }
            }
          }
        );
        default:
          return state;
      }
    case EMPLOYEE_CREATE_REQUEST:
      return { ...state, loading: true };
    case EMPLOYEE_CREATE:
      return { INITIAL_STATE };
    case EMPLOYEE_SAVE_SUCCESS:
      return { INITIAL_STATE };
    case SELECT_CATEGORY:
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload.id]: {
            ...state.categories[action.payload.id],
            isOpen: action.payload.isOpen
          }
        }
      };
    default:
      return state;
  }
};
