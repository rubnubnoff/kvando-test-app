import React from "react";

import "./App.css";
import AddCityModal from "./components/AddCityModal";
import CurrentCity from "./components/CurrentCity";
import AdditionalCitiesList from "./components/AdditionalCitiesList";

const App = () => {
  return (
    <div className="App">
      <CurrentCity />
      <AddCityModal />
      <AdditionalCitiesList />
    </div>
  );
};

export default App;
