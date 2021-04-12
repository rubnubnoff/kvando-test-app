import { ThunkAction } from "redux-thunk";
import nextId from "react-id-generator";

import { get } from "../../api";

import {
  CurrentCityActionsTypes,
  FETCH_CURRENT_CITY,
  FETCH_CURRENT_CITY_FAILURE,
  FETCH_CURRENT_CITY_SUCCESS,
} from "../actionTypes/currentCity";
import { RootState } from "../store";

export const fetchCurrentCity = (): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  CurrentCityActionsTypes
> => async (dispatch, getState) => {
  const {
    currentPosition: { position },
  } = getState();
  if (!position) return;
  dispatch({
    type: FETCH_CURRENT_CITY,
  });

  try {
    const {
      coords: { latitude, longitude },
    } = position;

    const city = await get(`/current.json?q=${latitude},${longitude}`);
    dispatch({
      type: FETCH_CURRENT_CITY_SUCCESS,
      city: {
        ...city,
        id: nextId(),
      },
    });
  } catch (e) {
    dispatch({
      type: FETCH_CURRENT_CITY_FAILURE,
    });
  }
};
