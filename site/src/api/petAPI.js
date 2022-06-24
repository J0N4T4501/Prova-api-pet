import axios from 'axios';
const api= axios.create({
    baseURL: 'http://localhost:5000'

})


export async function cadastarPet(nome){
   const resposta =  await api.post('/pets/cadrastar', {
     nome: nome 
   })
 return resposta.data;


}




export async function listarpets(){
  const resposta=await api.get(`/pets`);
  return resposta.data;
}