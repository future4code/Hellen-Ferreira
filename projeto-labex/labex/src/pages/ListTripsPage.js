import { useHistory } from "react-router-dom";
import { BASE_URL } from "../constants/URL";
import useRequestData from "../hook/useRequestData";

const ListTripsPage = () => {
  const history = useHistory();
  const [listTrips] = useRequestData(`${BASE_URL}/trips`);

  const goToApplicationFormPage = () => {
    history.push("/trips/application");
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      {listTrips?.trips.map((t) => {
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
