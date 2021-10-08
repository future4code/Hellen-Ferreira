import styled from "styled-components";
import React from "react";
import axios from "axios";
import Usuarios from "./Components/Usuarios";

const Body = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f5f0f0;
  text-align: center;
  height: 100vh;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const LogoEBotão = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Labelogo = styled.img`
  width: 10vw;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 30vw;
  }
`;

const ButtonAlunos = styled.button`
  height: 6vh;
  width: 8vw;
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  background-color: #f47d1f;
  color: black;
  font-weight: bold;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 25vw;
  }
  :hover {
    opacity: 0.9;
  }
`;

const CadastroTitle = styled.h2`
  color: #48545c;
`;

const Cadastro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ButtonCadastro = styled.button`
  height: 5vh;
  width: 4vw;
  border: none;
  border-radius: 5px;
  margin-right: 16vw;
  background-color: #f47d1f;
  color: black;
  font-weight: bold;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 16vw;
    margin-right: 23vw;
  }
  :hover {
    opacity: 0.9;
  }
`;

const InputDeCadastro = styled.input`
  height: 5vh;
  width: 20vw;
  border-left: none;
  border-top: none;
  border-right: none;
  border-bottom: 1px solid black;
  background-color: #f5f0f0;
  margin-bottom: 10px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 40vw;
  }
  :hover {
    opacity: 0.9;
  }
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
        alert("Seu cadastro foi realizado com sucesso!");
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
        <LogoEBotão>
          <Labelogo src="/img/logo-labenu.png" />
          <ButtonAlunos onClick={this.renderizaPageUsers}>
            Alunos cadastrados
          </ButtonAlunos>
        </LogoEBotão>
        <Cadastro>
          <CadastroTitle>Cadastrar aluno:</CadastroTitle>
          <InputDeCadastro
            placeholder="Nome"
            value={this.state.nome}
            onChange={this.onChangeInputNome}
          />
          <InputDeCadastro
            placeholder="Email"
            value={this.state.email}
            onChange={this.onChangeInputEmail}
          />
          <ButtonCadastro onClick={this.createUsers}>OK ✓</ButtonCadastro>
        </Cadastro>
      </Body>
    );
  }
}

export default App;
