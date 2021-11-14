import { planets } from "../constants/planets";
import useForm from "../hook/UseForm";
import axios from "axios";
import { BASE_URL } from "../constants/URL";

const CreateTrip = () => {
  const { form, onChange, cleanFields } = useForm({
    planet: "",
    name: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const onSend = (event) => {
    event.preventDefault();

    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };

    const body = {
      name: form.name,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays,
      planet: form.planet,
    };
    axios
      .post(`${BASE_URL}/trips`, body, headers)
      .then((response) => {
        alert("Viagem criada!");
      })
      .catch((error) => {
        alert(error.message);
      });

    cleanFields();
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <form onSubmit={onSend}>
        <input
          name={"name"}
          value={form.name}
          onChange={onChange}
          placeholder="Nome"
          required
          pattern={"^.{3,}"}
          title={"O nome deve ter no mínimo 3 letras"}
        />
        <select
          name={"planet"}
          value={form.planet}
          onChange={onChange}
          placeholder="planet"
          required
          pattern={"^.{3,}"}
          title={"O nome deve ter no mínimo 3 letras"}
        >
          <option value={""}>Selecione o planeta:</option>
          {planets?.map((planet) => {
            return (
              <option value={planet} key={planet}>
                {planet}
              </option>
            );
          })}
        </select>
        <input
          name={"date"}
          value={form.date}
          onChange={onChange}
          placeholder="data"
          required
          type={"date"}
        />
        <input
          name={"description"}
          value={form.description}
          onChange={onChange}
          placeholder="Descrição"
          required
          type={"text"}
          pattern={"^.{30,}"}
          title={"Sua texto deve ter no mínimo 30 caracteres"}
        />
        <input
          name={"durationInDays"}
          value={form.durationInDays}
          onChange={onChange}
          placeholder="duração"
          required
          type={"number"}
        />
        <button>Enviar</button>
      </form>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
};

export default CreateTrip;
