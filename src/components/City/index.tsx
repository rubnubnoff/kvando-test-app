import React from "react";

import { ICity } from "../../redux/actionTypes/currentCity";

import "./styles.css";

interface IProps {
  city: ICity;
}

const City: React.FC<IProps> = React.memo(({ city }) => {
  const {
    current: { temp_c, feelslike_c, wind_kph, wind_dir },
    location: { region, country },
  } = city;

  return (
    <div className="city">
      <p>Country: {country}</p>
      <p>Region: {region}</p>
      <p>Temperature: {temp_c}</p>
      <p>Feels like: {feelslike_c}</p>
      <p>Wind direction: {wind_dir}</p>
      <p>Wind speed: {wind_kph}</p>
    </div>
  );
});

export default City;
