import axios from "axios";
import React, { useState } from "react";
import TelaInicial from "./Components/TelaInicial/TelaInicial";
import Match from "./Components/TelaMatch/Match";
import { BASE_URL } from "./Constantes/Url";

function App(props) {
  const [telaAtual, setTelaAtual] = useState(1);

  const onChangeTela = () => {
    switch (telaAtual) {
      case 1:
        return <TelaInicial irParaTelaMatch={irParaTelaMatch} />;
      case 2:
        return <Match irParaTelaInicial={irParaTelaInicial} />;
      default:
        return "página não encontrada!";
    }
  };

  const irParaTelaInicial = () => {
    setTelaAtual(1);
  };

  const irParaTelaMatch = () => {
    setTelaAtual(2);
  };

  const deleteMatch = () => {
    axios
      .put(`${BASE_URL}/clear`)
      .then((response) => {
        alert("A limpeza foi feita");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {onChangeTela()}
      <button onClick={deleteMatch}>Delete All</button>
    </div>
  );
}

export default App;
