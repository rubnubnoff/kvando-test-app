export const FETCH_CURRENT_CITY = "FETCH_CURRENT_CITY";
export const FETCH_CURRENT_CITY_SUCCESS = "FETCH_CURRENT_CITY_SUCCESS";
export const FETCH_CURRENT_CITY_FAILURE = "FETCH_CURRENT_CITY_FAILURE";

export interface ICity {
  id: string;
  current: {
    cloud: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    feelslike_c: number;
    feelslike_f: number;
    gust_kph: number;
    gust_mph: number;
    humidity: number;
    is_day: number;
    last_updated: string;
    last_updated_epoch: number;
    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    temp_c: number;
    temp_f: number;
    uv: number;
    vis_km: number;
    vis_miles: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;
  };
  location: {
    country: string;
    lat: number;
    localtime: string;
    localtime_epoch: number;
    lon: number;
    name: string;
    region: string;
    tz_id: string;
  };
}

export type CurrentCityStateType = {
  city: ICity | null;
  isLoading: boolean;
  hasError: boolean;
};

interface FetchCurrentCityActionType {
  type: typeof FETCH_CURRENT_CITY;
}

interface FetchCurrentCitySuccessActionType {
  type: typeof FETCH_CURRENT_CITY_SUCCESS;
  city: ICity;
}

interface FetchCurrentCityFailureActionType {
  type: typeof FETCH_CURRENT_CITY_FAILURE;
}

export type CurrentCityActionsTypes =
  | FetchCurrentCityActionType
  | FetchCurrentCitySuccessActionType
  | FetchCurrentCityFailureActionType;
