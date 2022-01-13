import axios from "axios";
import { useHistory } from "react-router";
import { BASE_URL } from "../constants/URL";
import useForm from "../hook/UseForm";

const LoginPage = () => {
  const history = useHistory();
  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  });

  const fazerLogin = (event) => {
    event.preventDefault();
    const body = {
      email: form.email,
      password: form.password,
    };
    axios
      .post(`${BASE_URL}/login`, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        history.push("/admin/trips/list");
      })
      .catch((error) => {
        alert("Usuário ou senha incorretos!");
      });
    cleanFields();
  };
  const goBack = () => {
    history.push("/");
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
          type="password"
          required
          pattern={"^.{3,}"}
          title={"Sua senha deve ter no mínimo 3 caracteres"}
        />

        <button>Entrar</button>
      </form>

      <button onClick={goBack}>Voltar</button>
    </div>
  );
};

export default LoginPage;
