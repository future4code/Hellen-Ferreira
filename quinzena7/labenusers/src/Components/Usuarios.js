import React from "react";
import axios from "axios";
import styled from "styled-components";

const Body = styled.div`
  text-align: center;
`;

class Usuarios extends React.Component {
  render() {
    const renderizaUsuario = this.props.usuarios.map((usuario) => {
      return (
        <div>
          <li key={usuario.id}>{usuario.name}</li>
          <button onClick={() => this.props.deleteUser(usuario.id)}>
            Deletar
          </button>
        </div>
      );
    });
    return (
      <Body>
        <div>
          <h1>Labenusers</h1>
          <button onClick={this.props.renderizaPageCadastro}>
            Trocar de página
          </button>
        </div>
        <div>
          <h2>Usuários:</h2>
          {renderizaUsuario}
        </div>
      </Body>
    );
  }
}

export default Usuarios;
