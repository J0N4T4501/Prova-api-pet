use petsDB;

insert into  tb_pet(nm_pet)

value ('maal');

select id_pet   id,
       nm_pet    nome
from tb_pet;


select id_pet   id,
       nm_pet    nome
from tb_pet
where nm_pet   like '%a%';
