import { Checkbox } from "antd";
import client from "../../axiosClient";
import { useState } from "react";

export default function NovoVisitante(){
  const [goList, setGoList] = useState(false)

  const salvarVisitante = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      nome: { value: string };
    };
    try {
      await client.post('/addVisitante', {
        nome: target.nome.value
      });
      if (goList){
        window.location.href = `/visitantes`;
      }else{
        window.location.reload();
      }

    } catch (error) {
      console.log(error)
    }
  }

  return(

    <div className="flex flex-col items-center justify-center gap-5">
      <h1>Novo Visitante</h1>
      <form onSubmit={salvarVisitante} className="flex gap-3">
        <label>Nome</label>
        <input type="text" name="nome" id="nome" placeholder="nome do visitante" required/>
        <input type="submit" value={"Salvar"} className="bg-green-400 p-2 rounded hover:cursor-pointer hover:bg-green-500" ></input>
      </form>

      <Checkbox onChange={(e) => setGoList(e.target.checked)} className="text-white">Ir para lista de visitantes</Checkbox>
    </div>
  )
}