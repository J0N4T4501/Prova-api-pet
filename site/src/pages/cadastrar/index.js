import { useState } from 'react';
import {cadastarPet} from '../../api/petAPI';
import './index.scss'
export{useEffect, useState} from 'react';


export default function (){
  const [nome , setNome]= useState([]);

  async function  salvar(){
      const r = await cadastarPet(nome)
      alert('pet cadrastado');
  }

  return(
      <main>
        <h1>Cadastar um pet</h1>
        <div> <input type="text" placeholder='nome' value={nome} onChange={e => setNome(e.target.value)}/></div>
        <div>
          <button onClick={salvar}>cadastarPet</button>
          </div>
         

      </main>
  )

}