import React from 'react';
import './CardPequeno.css'

function CardPequeno(props){
    return(
        <div className='smallcard-container'>
            <img className='img-email' src={ props.imagem}/>
            <div>
                <h2> {props.email}</h2>
            </div>
        </div>
    )
}
export default CardPequeno;
