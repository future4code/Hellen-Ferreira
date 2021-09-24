import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: Date.now(),
        texto: "Ir pra academia",
        completa: false,
      },
      {
        id: Date.now(),
        texto: "Fazer exercícios Labenu",
        completa: true,
      },
    ],
    inputValue: "",
    filtro: "",
  };

  componentDidUpdate(prevProps, prevState) {
    // Salva apenas nova tarefa e não adiciona nova tarefa, apenas edita.
    //   const novaTarefa = {
    //     id: Date.now(),
    //     texto: this.state.inputValue,
    //     completa: false,
    //   };
    //   if (prevProps.novatarefa !== novaTarefa) {
    //     localStorage.setItem("tarefa", JSON.stringify(novaTarefa));
    //   }
    // }

    // Salva todas as tarefas e completa ou descompleta tarefa
    // no apliccation além do input ficar vazio depois:
    if (prevState.tarefas !== this.state.tarefas) {
      localStorage.setItem("tarefa", JSON.stringify(this.state.tarefas));
    }
  }

  componentDidMount() {
    const tarefasLS = JSON.parse(localStorage.getItem("tarefa"));
    this.setState({ tarefas: tarefasLS });
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    this.setState({ inputValue: "" });
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };

    const tarefaUsuario = [...this.state.tarefas, novaTarefa];
    this.setState({ tarefas: tarefaUsuario });
  };

  selectTarefa = (id) => {
    const selecionarTaferas = this.state.tarefas.map((t) => {
      if (id === t.id) {
        const seleciona = {
          ...t,
          completa: !t.completa,
        };
        return seleciona;
      } else {
        return t;
      }
    });
    this.setState({ tarefas: selecionarTaferas });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
