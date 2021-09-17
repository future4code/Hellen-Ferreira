import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`
const FormsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  height: 150px;
  width: 300px;
  margin-bottom: 10px;
  border: 1px solid pink;
  border-radius: 10px;
`
const FormInput = styled.input`
  padding: 1px;
  margin: 10px 10px 10px;
  border-color: pink;
  border: 1px solid pink;
  border-radius: 10px;
`
const FormButton = styled.button`
  background-color: pink;
  border-radius: 10px;
  border: none;
  color: white;
`


class App extends React.Component {
  state = { 
    usuarios: [
      {
        nomeUsuario:'paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150',
      },
      {
        nomeUsuario:'Hellen',
        fotoUsuario:'https://picsum.photos/70/70',
        fotoPost:'https://picsum.photos/202/152',
      },
      {
        nomeUsuario:'Joana',
        fotoUsuario:'https://picsum.photos/60/60',
        fotoPost:'https://picsum.photos/201/151',
      }
    ],
    nomeInputUsuario: "",
    fotoInputUsuario: "",
    fotoInputPost: ""
  }

  adicionaPost = () => {
    this.setState({
    nomeInputUsuario: "",
    fotoInputUsuario: "",
    fotoInputPost: ""
    })
    const novoPost = {
      nomeUsuario: this.state.nomeInputUsuario,
      fotoUsuario: this.state.fotoInputUsuario,
      fotoPost: this.state.fotoInputPost
    };
    const novaPostagem = [...this.state.usuarios, novoPost];
    this.setState({usuarios: novaPostagem})
  }

  onChangeInputUsuario = (event) => {
    this.setState({nomeInputUsuario: event.target.value})
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({fotoInputUsuario: event.target.value})
  }

  onChangeInputPost = (event) => {
    this.setState({fotoInputPost: event.target.value})
  }

  render() {
    const novoArrayUsuarios = this.state.usuarios.map((usuario) => {
      return (
     <Post
       nomeUsuario={usuario.nomeUsuario}
       fotoUsuario={usuario.fotoUsuario}
       fotoPost={usuario.fotoPost}
     /> 
      );
    });

    return (
     <MainContainer>
      <FormsContainer>
        <FormInput
        value={this.state.nomeInputUsuario}
        onChange={this.onChangeInputUsuario}
        placeholder={"Nome do usuário"}
        />

        <FormInput
        value={this.state.fotoInputUsuario}
        onChange={this.onChangeInputFotoUsuario}
        placeholder={"Foto do usuário"}
        />

        <FormInput
        value={this.state.fotoInputPost}
        onChange={this.onChangeInputPost}
        placeholder={"Foto do post"}
        />

        <FormButton onClick={this.adicionaPost}>Adicionar post</FormButton>
      </FormsContainer>

        {novoArrayUsuarios}
      </MainContainer>
    );
  }
}

export default App;
