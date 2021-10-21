import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard";

const App = (props) => {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        setPokeList(response.data.results);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onChangePokeName = (e) => {
    setPokeName(e.target.value);
  };

  return (
    <div>
      <select onChange={onChangePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard pokeName={pokeName} />}
    </div>
  );
};

export default App;
