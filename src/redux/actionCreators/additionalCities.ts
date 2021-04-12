import {
  AdditionalCitiesActionsTypes,
  ADD_ADDITIONAL_CITY,
  REMOVE_ADDITIONAL_CITY,
} from "../actionTypes/additionalCities";
import { ICity } from "../actionTypes/currentCity";

export const addAdditionalCityToList: (
  city: ICity
) => AdditionalCitiesActionsTypes = (city: ICity) => ({
  type: ADD_ADDITIONAL_CITY,
  city,
});

export const removeAdditionalCityFromList: (
  cityId: string
) => AdditionalCitiesActionsTypes = (cityId: string) => {
  return {
    type: REMOVE_ADDITIONAL_CITY,
    cityId,
  };
};
