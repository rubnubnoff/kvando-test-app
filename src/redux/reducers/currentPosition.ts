import {
  CurrentPositionActionsTypes,
  CurrentPositionStateType,
  FETCH_CURRENT_POSITION,
  FETCH_CURRENT_POSITION_SUCCESS,
  FETCH_CURRENT_POSITION_FAILURE,
} from "../actionTypes/currentPosition";

const initialState: CurrentPositionStateType = {
  position: null,
  positionError: null,
  isLoading: false,
};

const currentPositionReducer = (
  state: CurrentPositionStateType = initialState,
  action: CurrentPositionActionsTypes
): CurrentPositionStateType => {
  switch (action.type) {
    case FETCH_CURRENT_POSITION:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CURRENT_POSITION_SUCCESS:
      return {
        position: action.payload as GeolocationPosition,
        positionError: null,
        isLoading: false,
      };
    case FETCH_CURRENT_POSITION_FAILURE:
      return {
        position: null,
        positionError: action.payload as GeolocationPositionError,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default currentPositionReducer;
