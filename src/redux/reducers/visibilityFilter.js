import { actionTypes } from "../actions/actionTypes";

const initialState = {
  employeeTypeFilter: 0,
  siteLocationFilter: 0
};

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DO_SET_EMPLOYEETYPE_FILTER:
      return {
        ...state,
        employeeTypeFilter: action.filter
      };
    case actionTypes.DO_SET_SITELOCATION_FILTER:
      return {
        ...state,
        siteLocationFilter: action.filter
      };
    default:
      return state;
  }
};

export default visibilityFilter;
