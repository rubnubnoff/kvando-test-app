export const FETCH_CURRENT_POSITION = "FETCH_CURRENT_POSITION";
export const FETCH_CURRENT_POSITION_SUCCESS = "FETCH_CURRENT_POSITION_SUCCESS";
export const FETCH_CURRENT_POSITION_FAILURE = "FETCH_CURRENT_POSITION_FAILURE";

export type CurrentPositionStateType = {
  position: GeolocationPosition | null;
  positionError: GeolocationPositionError | null;
  isLoading: boolean;
};

interface FetchCurrentPositionActionType {
  type: typeof FETCH_CURRENT_POSITION;
}

interface SetCurrentPositionActionType {
  type: typeof FETCH_CURRENT_POSITION_SUCCESS;
  payload: GeolocationPosition;
}

interface SetCurrentPositionErrorActionType {
  type: typeof FETCH_CURRENT_POSITION_FAILURE;
  payload: GeolocationPositionError;
}

export type CurrentPositionActionsTypes =
  | FetchCurrentPositionActionType
  | SetCurrentPositionActionType
  | SetCurrentPositionErrorActionType;
