import {
  AdditionalCityActionsTypes,
  AdditionalCityStateType,
  FETCH_ADDITIONAL_CITY,
  FETCH_ADDITIONAL_CITY_FAILURE,
  FETCH_ADDITIONAL_CITY_SUCCESS,
  RESET_ADDITIONAL_CITY_ERROR,
} from "../actionTypes/additionalCity";

const initialState: AdditionalCityStateType = {
  isLoading: false,
  hasError: false,
};

const additionalCityReducer = (
  state: AdditionalCityStateType = initialState,
  action: AdditionalCityActionsTypes
): AdditionalCityStateType => {
  switch (action.type) {
    case FETCH_ADDITIONAL_CITY:
      return {
        isLoading: true,
        hasError: false,
      };
    case FETCH_ADDITIONAL_CITY_SUCCESS:
      return {
        isLoading: false,
        hasError: false,
      };
    case FETCH_ADDITIONAL_CITY_FAILURE:
      return {
        isLoading: false,
        hasError: true,
      };
    case RESET_ADDITIONAL_CITY_ERROR:
      return {
        isLoading: false,
        hasError: false,
      };
    default:
      return state;
  }
};

export default additionalCityReducer;
