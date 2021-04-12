import { ThunkAction } from "redux-thunk";

import {
  CurrentPositionActionsTypes,
  FETCH_CURRENT_POSITION,
  FETCH_CURRENT_POSITION_SUCCESS,
  FETCH_CURRENT_POSITION_FAILURE,
} from "../actionTypes/currentPosition";
import { RootState } from "../store";
import { fetchCurrentCity } from "./currentCity";

export const getCurrentPosition = (): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  CurrentPositionActionsTypes
> => async (dispatch) => {
  const onSuccess = (position: GeolocationPosition) => {
    dispatch({
      type: FETCH_CURRENT_POSITION_SUCCESS,
      payload: position,
    });
    dispatch(fetchCurrentCity());
  };

  const onError = (positionError: GeolocationPositionError) => {
    dispatch({
      type: FETCH_CURRENT_POSITION_FAILURE,
      payload: positionError,
    });
  };

  dispatch({
    type: FETCH_CURRENT_POSITION,
  });

  navigator.geolocation.getCurrentPosition(onSuccess, onError);
};
