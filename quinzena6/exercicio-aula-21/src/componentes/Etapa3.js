import React from "react";
import styled from "styled-components";

const ContainerPai = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class Etapa3 extends React.Component {
  onChangeInputs = (e) => {
    this.setState({ e: e.target.value });
  };
  render() {
    return (
      <ContainerPai>
        <div>
          <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
          <div>
            <p> 5. Por que você não terminou um curso de graduação? </p>
            <input value={this.props.etapa} onChange={this.onChangeInputs} />
          </div>

          <div>
            <p> 6. Você fez algum curso complementar? </p>
            <input value={this.props.etapa} onChange={this.onChangeInputs} />
          </div>
        </div>
      </ContainerPai>
    );
  }
}

export default Etapa3;
