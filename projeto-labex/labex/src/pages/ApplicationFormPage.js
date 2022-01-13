import { useHistory } from "react-router-dom";
import useForm from "../hook/UseForm";
import { countries } from "../constants/countries";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/URL";
import useRequestData from "../hook/useRequestData";

const ApplicationFormPage = () => {
  const history = useHistory();
  const [listTrips] = useRequestData(`${BASE_URL}/trips`);
  const { form, onChange, cleanFields } = useForm({
    trip: "",
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const cadastrar = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };
    axios
      .post(`${BASE_URL}/trips/${form.trip}/apply`, body)
      .then((response) => {
        alert("Enviado!");
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
      <h1>Inscreva-se para uma viagem</h1>
      <form onSubmit={cadastrar}>
        <select value={form.trip} required name={"trip"} onChange={onChange}>
          <option value={""}>Selecione a viagem:</option>
          {listTrips?.trips.map((t) => {
            return (
              <option value={t.id} key={t.id}>
                {t.name} {t.planet}
              </option>
            );
          })}
        </select>
        <input
          name={"name"}
          value={form.name}
          onChange={onChange}
          placeholder="Nome"
          required
          pattern={"^.{3,}"}
          title={"O nome deve ter no mínimo 3 letras"}
        />
        <input
          name={"age"}
          value={form.age}
          onChange={onChange}
          placeholder="Idade"
          required
          type={"number"}
          min={18}
        />
        <input
          name={"applicationText"}
          value={form.applicationText}
          onChange={onChange}
          placeholder="Texto de candidatura"
          required
          type={"text"}
          pattern={"^.{30,}"}
          title={"Sua texto deve ter no mínimo 30 caracteres"}
        />
        <input
          name={"profession"}
          value={form.profession}
          onChange={onChange}
          placeholder="Profissão"
          required
          type={"text"}
        />
        <select
          value={form.country}
          required
          name={"country"}
          onChange={onChange}
        >
          <option value={""}>Selecione seu país:</option>
          {countries.map((country) => {
            return (
              <option value={country} key={country}>
                {country}
              </option>
            );
          })}
        </select>
        <button>Enviar</button>
      </form>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
};

export default ApplicationFormPage;
