import { useHistory } from "react-router";
import useForm from "../hook/UseForm";

const LoginPage = () => {
  const history = useHistory();
  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  });

  const goToAdminHomePage = () => {
    history.push("/admin/trips/list");
  };

  const fazerLogin = (event) => {
    event.preventDefault();
    cleanFields();
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <form onSubmit={fazerLogin}>
        <input
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder={"E-mail"}
          required
          type="email"
        />
        <input
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder={"Senha"}
          required
          pattern={"^.{3,}"}
          title={"Sua senha deve ter no mínimo 3 caracteres"}
        />

        <button onClick={goToAdminHomePage}>Entrar</button>
      </form>

      <button onClick={goBack}>Voltar</button>
    </div>
  );
};

export default LoginPage;
