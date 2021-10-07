import React from "react";
import Etapa1 from "./componentes/Etapa1";
import Etapa2 from "./componentes/Etapa2";
import Etapa3 from "./componentes/Etapa3";
import Final from "./componentes/Final";
import styled from "styled-components";

const ContainerPai = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
const ButtonPrincipal = styled.button`
  margin-top: 20px;
`;

class App extends React.Component {
  state = {
    etapa: 1,
  };
  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        return "página não encontrada";
    }
  };

  onclickButton = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

  render() {
    return (
      <ContainerPai>
        {this.renderizaEtapa()}

        {this.state.etapa !== 4 && (
          <ButtonPrincipal onClick={this.onclickButton}>
            Próxima etapa
          </ButtonPrincipal>
        )}
      </ContainerPai>
    );
  }
}

export default App;
