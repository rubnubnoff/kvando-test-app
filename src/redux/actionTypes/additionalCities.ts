import { ICity } from "./currentCity";

export const ADD_ADDITIONAL_CITY = "ADD_ADDITIONAL_CITY";
export const REMOVE_ADDITIONAL_CITY = "REMOVE_ADDITIONAL_CITY";

export type AdditionalCitiesStateType = {
  cities: ICity[];
};

interface AddAdditionalCityActionType {
  type: typeof ADD_ADDITIONAL_CITY;
  city: ICity;
}

interface RemoveAdditionalCityActionType {
  type: typeof REMOVE_ADDITIONAL_CITY;
  cityId: string;
}

export type AdditionalCitiesActionsTypes =
  | AddAdditionalCityActionType
  | RemoveAdditionalCityActionType;
