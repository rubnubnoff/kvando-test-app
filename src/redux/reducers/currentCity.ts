import {
  CurrentCityActionsTypes,
  CurrentCityStateType,
  FETCH_CURRENT_CITY,
  FETCH_CURRENT_CITY_FAILURE,
  FETCH_CURRENT_CITY_SUCCESS,
} from "../actionTypes/currentCity";

const initialState: CurrentCityStateType = {
  city: null,
  isLoading: false,
  hasError: false,
};

const currentCityReducer = (
  state: CurrentCityStateType = initialState,
  action: CurrentCityActionsTypes
): CurrentCityStateType => {
  switch (action.type) {
    case FETCH_CURRENT_CITY:
      return {
        city: null,
        isLoading: true,
        hasError: false,
      };
    case FETCH_CURRENT_CITY_SUCCESS:
      return {
        city: action.city,
        isLoading: false,
        hasError: false,
      };
    case FETCH_CURRENT_CITY_FAILURE:
      return {
        city: null,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
};

export default currentCityReducer;
