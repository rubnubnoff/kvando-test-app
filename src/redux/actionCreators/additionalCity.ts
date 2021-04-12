import { ThunkAction } from "redux-thunk";
import nextId from "react-id-generator";

import { get } from "../../api";
import { RootState } from "../store";
import {
  AdditionalCityActionsTypes,
  FETCH_ADDITIONAL_CITY,
  FETCH_ADDITIONAL_CITY_FAILURE,
  FETCH_ADDITIONAL_CITY_SUCCESS,
  RESET_ADDITIONAL_CITY_ERROR,
} from "../actionTypes/additionalCity";
import { addAdditionalCityToList } from "./additionalCities";
import { AdditionalCitiesActionsTypes } from "../actionTypes/additionalCities";

export const addAdditionalCity = (
  query: string
): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  AdditionalCityActionsTypes | AdditionalCitiesActionsTypes
> => async (dispatch) => {
  dispatch({
    type: FETCH_ADDITIONAL_CITY,
  });

  try {
    const city = await get(`/current.json?q=${query}`);
    const preparedCity = {
      ...city,
      id: nextId(),
    };
    dispatch({
      type: FETCH_ADDITIONAL_CITY_SUCCESS,
    });
    dispatch(addAdditionalCityToList(preparedCity));
  } catch (e) {
    dispatch({
      type: FETCH_ADDITIONAL_CITY_FAILURE,
    });
  }
};

export const resetAddAdditionalCityError: () => AdditionalCityActionsTypes = () => ({
  type: RESET_ADDITIONAL_CITY_ERROR,
});
