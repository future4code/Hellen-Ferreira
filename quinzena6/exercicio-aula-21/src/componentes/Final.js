import React from "react";
import styled from "styled-components";

const ContainerPai = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class Final extends React.Component {
  render() {
    return (
      <ContainerPai>
        <h1>O FORMULÁRIO ACABOU</h1>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
      </ContainerPai>
    );
  }
}

export default Final;
