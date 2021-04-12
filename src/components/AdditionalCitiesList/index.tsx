import React, { useCallback } from "react";
import { connect } from "react-redux";

import { removeAdditionalCityFromList } from "../../redux/actionCreators/additionalCities";
import { ICity } from "../../redux/actionTypes/currentCity";
import { RootState } from "../../redux/store";
import City from "../City";

interface IProps {
  cities: ICity[];
  removeCity: (cityId: string) => void;
}

const mapStateToProps = ({ additionalCities: { cities } }: RootState) => ({
  cities,
});

const mapDispatchToProps = (dispatch: any) => ({
  removeCity: (cityId: string) => {
    dispatch(removeAdditionalCityFromList(cityId));
  },
});

const AdditionalCitiesList: React.FC<IProps> = ({ cities, removeCity }) => {
  const onDeleteClick = useCallback(
    (cityId: string) => () => {
      removeCity(cityId);
    },
    [removeCity]
  );
  return (
    <div>
      {cities.map((city) => {
        return (
          <div key={city.id}>
            <button onClick={onDeleteClick(city.id)}>Delete</button>
            <City city={city} />
          </div>
        );
      })}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdditionalCitiesList);
