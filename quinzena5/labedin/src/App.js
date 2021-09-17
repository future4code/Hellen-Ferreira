import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="./img/IMG_1497.jpeg" 
          nome="Hellen Ferreira" 
          descricao="Oi, eu sou a Hellen. Estudante de Desenvolvimento Front-End pela Labenu. Amo assistir séries, filmes, conversar, ouvir música, conhecer novos lugares e pessoas, amo tudo que ativa minha criatividade e me faz crescer."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno 
        imagem='./img/email.jpg'
        email=' Email: contatohellenmarina@gmail.com'     

        imagem2='./img/endereço.png'
        endereco='Endereço: Estrada de Sepetiba, 84 - Santa Cruz - RJ'
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="./img/brazilian-1266207_1280.png" 
          nome="Experiências escolares" 
          descricao="Não possuo experiências em empresas, mas na época de escola fiz parte de projetos de Publicidade e Marketing (Ensino Médio Integrado com Técnico em Administração), além de participar fui monitora do projeto 2 anos depois e participei da organização de eventos administrativos." 
        />
        
        <CardGrande 
          imagem="./img/empreendedorismo.png" 
          nome="Empreendedorismo" 
          descricao="Sempre achei que empreender fosse meu sonho de consumo e sempre gostei muito da arte de fotografar. Durante alguns anos tentei seguir a carreira da fotografia, mas em meio à muita inconstância por não ver retorno eu decidi procurar por outras áreas. Além de Já ter tentado uma loja de roupa que também não deu muito certo. Mas essas experiências foram essenciais pra eu me tornar quem sou hoje e me fazer decidir pela programação." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
