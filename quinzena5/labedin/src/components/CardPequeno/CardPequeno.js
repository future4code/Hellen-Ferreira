import React from 'react';
import './CardPequeno.css';

function CardPequeno(props){
    return (
        <div>
        <div className='icon-texto-email'>
            <img src={ props.imagem } />
            <p>{props.email}</p>
        </div>
               <div className='icon-texto-end'>
               <img src={ props.imagem2 } />
               <p>{props.endereco}</p>
           </div>
           </div>
    )
}

export default CardPequeno;