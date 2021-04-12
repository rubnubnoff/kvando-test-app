export const FETCH_ADDITIONAL_CITY = "FETCH_ADDITIONAL_CITY";
export const FETCH_ADDITIONAL_CITY_SUCCESS = "FETCH_ADDITIONAL_CITY_SUCCESS";
export const FETCH_ADDITIONAL_CITY_FAILURE = "FETCH_ADDITIONAL_CITY_FAILURE";
export const RESET_ADDITIONAL_CITY_ERROR = "RESET_ADDITIONAL_CITY_ERROR";

export type AdditionalCityStateType = {
  isLoading: boolean;
  hasError: boolean;
};

interface FetchAdditionalCityActionType {
  type: typeof FETCH_ADDITIONAL_CITY;
}

interface FetchAdditionalCitySuccessActionType {
  type: typeof FETCH_ADDITIONAL_CITY_SUCCESS;
}

interface FetchAdditionalCityFailureActionType {
  type: typeof FETCH_ADDITIONAL_CITY_FAILURE;
}

interface ResetAdditionalCityError {
  type: typeof RESET_ADDITIONAL_CITY_ERROR;
}

export type AdditionalCityActionsTypes =
  | FetchAdditionalCityActionType
  | FetchAdditionalCitySuccessActionType
  | FetchAdditionalCityFailureActionType
  | ResetAdditionalCityError;
