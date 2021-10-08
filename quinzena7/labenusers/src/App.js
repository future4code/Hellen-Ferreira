import styled from "styled-components";
import React from "react";
import axios from "axios";
import Usuarios from "./Components/Usuarios";

const Body = styled.div`
  text-align: center;
`;
class App extends React.Component {
  state = {
    nome: "",
    email: "",
    usuarios: [],
    pagina: false,
  };

  componentDidMount = () => {
    this.getUsers();
  };

  renderizaPageUsers = () => {
    this.setState({ pagina: true });
  };

  renderizaPageCadastro = () => {
    this.setState({ pagina: false });
  };

  createUsers = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.nome,
      email: this.state.email,
    };
    axios
      .post(url, body, {
        headers: {
          Authorization: "hellen-ferreira-banu",
        },
      })
      .then((response) => {
        console.log(response);
        alert("O usuário foi criado com sucesso!");
        this.setState({ nome: "", email: "" });
        this.getUsers();
      })
      .catch((error) => {
        alert("Vish, algo deu errado!");
        console.log(error);
      });
  };

  getUsers = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios
      .get(url, {
        headers: {
          Authorization: "hellen-ferreira-banu",
        },
      })
      .then((resposta) => {
        this.setState({ usuarios: resposta.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  deleteUser = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "hellen-ferreira-banu",
          },
        }
      )
      .then((resposta) => {
        this.getUsers();
        alert("O usuário foi deletado com sucesso!");
        console.log(resposta);
      })
      .catch((erro) => {
        alert("Ops, parece que algo deu errado...");
        console.log(erro);
      });
  };

  onChangeInputNome = (e) => {
    this.setState({ nome: e.target.value });
  };

  onChangeInputEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  render() {
    if (this.state.pagina) {
      return (
        <Usuarios
          usuarios={this.state.usuarios}
          renderizaPageCadastro={this.renderizaPageCadastro}
          deleteUser={this.deleteUser}
        />
      );
    }

    return (
      <Body>
        <div>
          <h1>Labenusers</h1>
          <button onClick={this.renderizaPageUsers}>Trocar de página</button>
        </div>
        <div>
          <h2>Cadastro</h2>
          <input
            placeholder="Nome"
            value={this.state.nome}
            onChange={this.onChangeInputNome}
          />
          <input
            placeholder="Email"
            value={this.state.email}
            onChange={this.onChangeInputEmail}
          />
          <button onClick={this.createUsers}>Criar</button>
        </div>
      </Body>
    );
  }
}

export default App;
