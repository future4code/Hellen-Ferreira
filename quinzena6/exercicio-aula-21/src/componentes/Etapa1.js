import React from "react";
import styled from "styled-components";

const ContainerPai = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class Etapa1 extends React.Component {
  onChangeInputs = (e) => {
    this.setState({ e: e.target.value });
  };

  render() {
    return (
      <ContainerPai>
        <div>
          <h1>ETAPA 1 - DADOS GERAIS</h1>

          <div>
            <p> 1. Qual seu nome? </p>
            <input value={this.props.etapa} onChange={this.onChangeInputs} />
          </div>

          <div>
            <p> 2. Qual sua idade? </p>
            <input value={this.props.etapa} onChange={this.onChangeInputs} />
          </div>

          <div>
            <p> 3. Qual seu email? </p>
            <input value={this.props.etapa} onChange={this.onChangeInputs} />
          </div>

          <div>
            <p> 4. Qual sua escolaridade? </p>
            <input value={this.props.etapa} onChange={this.onChangeInputs} />
          </div>
        </div>
      </ContainerPai>
    );
  }
}

export default Etapa1;
