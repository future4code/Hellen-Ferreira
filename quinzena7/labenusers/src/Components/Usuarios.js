import React from "react";
import axios from "axios";
import styled from "styled-components";

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

const Labelogo = styled.img`
  width: 10vw;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 30vw;
  }
`;

const CadastradosTitle = styled.h2`
  color: #f6af56;
`;

const LogoEBotão = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ButtonNovoCadastro = styled.button`
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

const Lista = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #48545c;
`;

const ButtonDelete = styled.button`
  height: 3vh;
  width: 4vw;
  border: none;
  margin-left: 6vw;
  border-radius: 5px;
  margin-top: 10px;
  background-color: #f47d1f;
  color: black;
  font-weight: bold;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 16vw;
    margin-left: 20vw;
  }
  :hover {
    opacity: 0.9;
  }
`;

const ListaEButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

class Usuarios extends React.Component {
  render() {
    const renderizaUsuario = this.props.usuarios.map((usuario) => {
      return (
        <ListaEButton>
          <Lista key={usuario.id}>{usuario.name}</Lista>
          <ButtonDelete onClick={() => this.props.deleteUser(usuario.id)}>
            Deletar
          </ButtonDelete>
        </ListaEButton>
      );
    });
    return (
      <Body>
        <LogoEBotão>
          <Labelogo src="/img/logo-labenu.png" />
          <ButtonNovoCadastro onClick={this.props.renderizaPageCadastro}>
            Novo aluno
          </ButtonNovoCadastro>
        </LogoEBotão>
        <div>
          <CadastradosTitle>Alunos cadastrados:</CadastradosTitle>
          {renderizaUsuario}
        </div>
      </Body>
    );
  }
}

export default Usuarios;
