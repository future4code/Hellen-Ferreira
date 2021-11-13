import { useHistory } from "react-router-dom";
import { BASE_URL } from "../constants/URL";
import { useEffect, useState } from "react";
import axios from "axios";

const ListTripsPage = () => {
  const history = useHistory();
  const [listTrips, setListTrips] = useState([]);

  const goToApplicationFormPage = () => {
    history.push("/trips/application");
  };

  const goBack = () => {
    history.goBack();
  };

  const getTrips = () => {
    axios
      .get(`${BASE_URL}/trips`)
      .then((response) => {
        setListTrips(response.data.trips);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTrips();
  }, []);

  return (
    <div>
      {listTrips.map((t) => {
        return (
          <div>
            <p key={t.id}>{t.name}</p>
            <p> {t.description} </p>
            <p> {t.planet} </p>
            <p>{t.durationInDays}</p>
            <p>{t.date}</p>
          </div>
        );
      })}
      <button onClick={goToApplicationFormPage}>Inscreva-se</button>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
};

export default ListTripsPage;
