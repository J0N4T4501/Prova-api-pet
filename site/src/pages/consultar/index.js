import { useEffect, useState } from 'react';
import { listarpets } from '../../api/petAPI';



export default function(){
   const [pet,setPet]= useState([]);

   async function carregarpets(){
       const resp = await listarpets();
       setPet(resp);
   }
   useEffect(()=>{
       carregarpets();
   }, []);

   return(
       <main>
        <table>
            <thead>
               <tr>
                   <th>Indetificão</th>
                   <th>Nome</th>
               </tr>

            </thead>

            
                        <tbody>

         {pet.map(item => 
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>

                    </tr>

            )}

 
  </tbody>

        </table>


       </main>
   )

}