import { useHistory } from "react-router";
import { BASE_URL } from "../constants/URL";
import useRequestData from "../hook/useRequestData";

const AdminHomePage = () => {
  const history = useHistory();
  const [listTrips] = useRequestData(`${BASE_URL}/trips`);

  const goToCreateTripPage = () => {
    history.push("/admin/trips/create");
  };

  const goBack = () => {
    history.goBack();
  };

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };
  return (
    <div>
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToCreateTripPage}>Criar viagem</button>
      <button onClick={logout}>Logout</button>
      {listTrips?.trips.map((t) => {
        return (
          <div>
            <p key={t.id}>{t.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AdminHomePage;
