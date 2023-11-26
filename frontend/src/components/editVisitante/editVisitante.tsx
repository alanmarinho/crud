import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import client from "../../axiosClient";

interface Visitante {
  id: number;
  code: string;
  nome: string;
  created_at: string;
  updated_at: string;
}

export default function EditVisitante() {
  const { id } = useParams<{ id: string }>();
  const [visitante, setVisitante] = useState<Visitante>();

  useEffect(() => {
    const getVisitantes = async () => {
      try{
        if (id){
          const response = await client.post('/getVisitante', {
            code: parseInt(id)
          });
          const dadosString = JSON.stringify(response.data);
          setVisitante(JSON.parse(dadosString));
        }
      }catch(error){
        console.log(error)
      }
    };
    getVisitantes();
  }, [id]);

  const saveEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      nome: { value: string };
    };
    try{
      if (id){
        await client.post('/editVisitante', {
          code: parseInt(id),
          nome: target.nome.value
        });
        window.location.href = `/visitantes/visualizar/${id}`;
      }
    }catch(error){
      console.log(error)
    }
  }

  return (
    <>
      <h1 className="mt-3">Editar Visitante {id}</h1>
      <form onSubmit={saveEdit} className="flex gap-3">
        <label>Nome</label>
        <input type="text" name="nome" id="nome" defaultValue={visitante?.nome} placeholder="nome do visitante"/>
        <input type="submit" value={"Salvar"} className="bg-green-400 p-2 rounded hover:cursor-pointer hover:bg-green-500" ></input>
      </form>
      

    </>
  )
}