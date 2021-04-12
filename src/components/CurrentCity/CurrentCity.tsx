import React, { useEffect } from "react";
import { connect } from "react-redux";
import { AnyAction, bindActionCreators, Dispatch } from "redux";

import { getCurrentPosition } from "../../redux/actionCreators/currentPosition";
import { CurrentCityStateType } from "../../redux/actionTypes/currentCity";
import { CurrentPositionStateType } from "../../redux/actionTypes/currentPosition";
import { RootState } from "../../redux/store";
import City from "../City";

import "./styles.css";

interface IProps {
  getCurrentPosition: () => void;
  currentPosition: CurrentPositionStateType;
  currentCity: CurrentCityStateType;
}

const mapStateToProps = ({ currentPosition, currentCity }: RootState) => ({
  currentPosition,
  currentCity,
});
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      getCurrentPosition,
    },
    dispatch
  );

const CurrentCity: React.FC<IProps> = ({
  getCurrentPosition,
  currentPosition: { isLoading: isCurrentPositionLoading, positionError },
  currentCity: { isLoading: isCurrentCityLoading, hasError, city },
}) => {
  useEffect(() => {
    getCurrentPosition();
  }, [getCurrentPosition]);

  if (isCurrentPositionLoading || isCurrentCityLoading) {
    return <div>...loading</div>;
  }

  if (positionError) {
    return <div>{positionError.message}</div>;
  }

  if (hasError || !city) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div className="currentCityWrapper">
      <div className="currentCityHeader">Current сity weather</div>
      <City city={city} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentCity);
