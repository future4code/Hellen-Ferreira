import { useHistory } from "react-router";

const AdminHomePage = () => {
  const history = useHistory();

  const goToCreateTripPage = () => {
    history.push("/admin/trips/create");
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToCreateTripPage}>Criar viagem</button>
      <button onClick={goBack}>Logout</button>
    </div>
  );
};

export default AdminHomePage;
