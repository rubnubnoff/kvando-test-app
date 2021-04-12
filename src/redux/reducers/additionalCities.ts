import {
  AdditionalCitiesActionsTypes,
  AdditionalCitiesStateType,
  ADD_ADDITIONAL_CITY,
  REMOVE_ADDITIONAL_CITY,
} from "../actionTypes/additionalCities";

const initialState: AdditionalCitiesStateType = {
  cities: [],
};

const additionalCitiesReducer = (
  state: AdditionalCitiesStateType = initialState,
  action: AdditionalCitiesActionsTypes
): AdditionalCitiesStateType => {
  switch (action.type) {
    case ADD_ADDITIONAL_CITY:
      return {
        cities: [...state.cities, action.city],
      };
    case REMOVE_ADDITIONAL_CITY:
      return {
        ...state,
        cities: [...state.cities.filter(({ id }) => id !== action.cityId)],
      };
    default:
      return state;
  }
};

export default additionalCitiesReducer;
