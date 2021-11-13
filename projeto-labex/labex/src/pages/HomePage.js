import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  const goToListTripsPage = () => {
    history.push("/trips/list");
  };
  const goToLogin = () => {
    history.push("/login");
  };

  return (
    <div>
      <button onClick={goToListTripsPage}>Ver viagens</button>
      <button onClick={goToLogin}>Área de Admin</button>
    </div>
  );
};

export default HomePage;
