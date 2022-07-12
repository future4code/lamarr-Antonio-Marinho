import React, {useState} from 'react'
import './style.css'

export function forms(Nome, F_usuario, F_Post){
    return(
        <section className='Forms'>
        <h1>Post's</h1>
        <label htmlFor="nome-usuoario" >Nome</label>
        <input id="nome-usuoario" placeholder="Nome"></input>

        <label htmlFor="foto-usuoario" >Foto usuário</label>
        <input id="foto-usuoario" placeholder="Nome"></input>

        <label htmlFor="post-usuario" >Post</label>
        <input id="post-usuario" placeholder="Nome"></input>
        </section>
    )
}

export default forms