import _ from 'lodash';
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
  EXPERIENCES_FORM,
  EDUCATION_FORM,
  PORTFOLIO_FORM,
  TECHNOLOGIES_FORM,
  STATS_FORM,
  SET_EDIT_STATE,
  ADD_ITEM,
  REMOVE_ITEM,
  RESET_STATE
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
  tranings: {},
  personality: {
    realiability: 0,
    abilityToLearn: 0,
    teamSkills: 0,
    flexibility: 0
  },
  skills: {},
  experiences: {},
  education: {},
  portfolio: {},
  categories: {
    ...CategoriesList
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_EDIT_STATE: {
      return { ...state, ...action.payload };
    }
    case RESET_STATE: {
      return INITIAL_STATE;
    }
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
              tranings: {
                  ...state.tranings,
                  [_.size(state.tranings)]: action.payload.value
                }
              };
            }
          if (action.payload.prop === REMOVE_ITEM) {
            return {
              ...state,
              tranings: _.omit(state.tranings, action.payload.object)
            };
          }
          return {
            ...state,
            tranings: {
                ...state.tranings,
                [action.payload.prop]: {
                  ...state.tranings[action.payload.prop],
                  [action.payload.object]: action.payload.value
                }
              }
            };
        case PERSONALITY_FORM:
          return {
            ...state,
            personality: {
              ...state.personality,
                [action.payload.prop]: action.payload.value
              }
            };

        case SKILLS_FORM: {
          if (action.payload.prop === ADD_ITEM) {
            return {
              ...state,
              skills: {
                  ...state.skills,
                  [_.size(state.skills)]: action.payload.value
              }
            };
          }
          if (action.payload.prop === REMOVE_ITEM) {
            return {
              ...state,
              skills: _.omit(state.skills, action.payload.object)
            };
          }
        return {
          ...state,
          skills: {
              ...state.skills,
              [action.payload.prop]: {
                ...state.skills[action.payload.prop],
                [action.payload.object]: action.payload.value
              }
            }
          };
        }
        case EXPERIENCES_FORM:
          if (action.payload.prop === ADD_ITEM) {
            return {
              ...state,
              experiences: {
                  ...state.experiences,
                  [_.size(state.experiences)]: action.payload.value
              }
            };
          }
          if (action.payload.prop === REMOVE_ITEM) {
            return {
              ...state,
              experiences: _.omit(state.experiences, action.payload.object)
            };
          }
          return {
            ...state,
            experiences: {
              ...state.experiences,
              [action.payload.prop]: {
                ...state.experiences[action.payload.prop],
                [action.payload.object]: action.payload.value
              }
            }
          };

          case EDUCATION_FORM:
            if (action.payload.prop === ADD_ITEM) {
              return {
                ...state,
                education: {
                    ...state.education,
                    [_.size(state.education)]: action.payload.value
                }
              };
            }
            if (action.payload.prop === REMOVE_ITEM) {
              return {
                ...state,
                education: _.omit(state.education, action.payload.object)
              };
            }
            return {
              ...state,
              education: {
                ...state.education,
                [action.payload.prop]: {
                  ...state.education[action.payload.prop],
                  [action.payload.object]: action.payload.value
                }
              }
            };
          case PORTFOLIO_FORM:
            if (action.payload.prop === ADD_ITEM) {
              return {
                ...state,
                portfolio: {
                  ...state.portfolio,
                  [_.size(state.portfolio)]: action.payload.value
                }
              };
            }
            if (action.payload.prop === REMOVE_ITEM) {
              return {
                ...state,
                portfolio: _.omit(state.portfolio, action.payload.object)
              };
            }
            return {
              ...state,
              portfolio: {
                ...state.portfolio,
                [action.payload.prop]: {
                  ...state.portfolio[action.payload.prop],
                  [action.payload.object]: action.payload.value
                }
              }
            };
          case TECHNOLOGIES_FORM: {
            const { projectId, technologyId } = action.payload.prop;

            if (state.portfolio[projectId].usedTechnologies && state.portfolio[projectId].usedTechnologies[technologyId]) {
              console.log(`Remove ${projectId} ${technologyId}`);
              return {
                ...state,
                portfolio: {
                  ...state.portfolio,
                  [projectId]: {
                    ...state.portfolio[projectId],
                    usedTechnologies: _.omit(state.portfolio[projectId].usedTechnologies, technologyId)
                  }
                }
              };
            }
            console.log(`Add ${projectId} ${technologyId}`);
            return {
              ...state,
              portfolio: {
                ...state.portfolio,
                [projectId]: {
                  ...state.portfolio[projectId],
                  usedTechnologies: {
                    ...state.portfolio[projectId].usedTechnologies,
                    [technologyId]: true
                  }
                }
              }
            };
          }
          case STATS_FORM:
            if (action.payload.prop.type === ADD_ITEM) {
              return {
                ...state,
                portfolio: {
                  ...state.portfolio,
                  [action.payload.prop.projectId]: {
                    ...state.portfolio[action.payload.prop.projectId],
                    stats: {
                      [_.size(state.portfolio[action.payload.prop.projectId].stats)]: action.payload.value
                    }
                  }
                }
              };
            }
            if (action.payload.prop.type === REMOVE_ITEM) {
              return {
                ...state,
                portfolio: {
                  ...state.portfolio,
                  [action.payload.prop.projectId]: {
                    ...state.portfolio[action.payload.prop.projectId],
                    stats: _.omit(state.portfolio[action.payload.prop.projectId].stats, action.payload.prop.statId)
                  }
                }
              };
            }
            return {
              ...state,
              portfolio: {
                ...state.portfolio,
                [action.payload.prop.projectId]: {
                  ...state.portfolio[action.payload.prop.projectId],
                  stats: {
                    ...state.portfolio[action.payload.prop.projectId].stats,
                    [action.payload.prop.statId]: {
                      ...state.portfolio[action.payload.prop.projectId].stats[action.payload.prop.statId],
                      [action.payload.prop.paramProp]: action.payload.value
                    }
                  }
                }
              }
            };
        default:
          return state;
      }
    case EMPLOYEE_CREATE_REQUEST:
      return { ...state, loading: true };
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;
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
