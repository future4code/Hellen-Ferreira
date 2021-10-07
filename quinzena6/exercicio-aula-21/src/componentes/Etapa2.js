import React from "react";
import styled from "styled-components";

const ContainerPai = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class Etapa2 extends React.Component {
  onChangeInputs = (e) => {
    this.setState({ e: e.target.value });
  };
  render() {
    return (
      <ContainerPai>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <div>
          <p> 5. Qual curso? </p>
          <input value={this.props.etapa} onChange={this.onChangeInputs} />
        </div>

        <div>
          <p> 4. Qual unidade de ensino? </p>
          <input value={this.props.etapa} onChange={this.onChangeInputs} />
        </div>
      </ContainerPai>
    );
  }
}

export default Etapa2;
