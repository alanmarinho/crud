import { useEffect, useState } from "react"

import client from "../../axiosClient"

import { Spin } from 'antd'; 
import { LoadingOutlined } from '@ant-design/icons';

import TabelaVisitante from "../tabelaVisitante/tabelaVisitante"

interface Visitante {
  id: number;
  code: string;
  nome: string;
  created_at: string;
  updated_at: string;
}

export default function AddVisitante() {
  const [visitantes, setVisitantes] = useState<Visitante[] > ();
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState(false)
  const [reload, setReload] = useState(false)

  const updateRelod = () => {
    setReload(!reload) 
  }

  useEffect(() => {
    const getVisitantes = async () => {
      try{
        const response = await client.post('/getVisitante', {});
        const dadosString = JSON.stringify(response.data);
        setVisitantes(JSON.parse(dadosString));
        setTimeout(() => {
          setLoading(false);
        }, 700);
      }catch(error){
        setTimeout(() => {setErro(true)}, 700);
        console.log(error)
      }
    };
  
    getVisitantes();
  }, [reload]);

  if(loading){
    if (erro) {
      return (
        <>
          <h1 className="mt-3">Erro ao carregar dados</h1>
        </>
      )
    }
      
    return (
      <>
        <Spin className="mt-3" indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      </>
    )
  }

  return(
    <> 
      {visitantes && <div className="flex flex-col m-5">
        <h1 className="text-4xl">Visitantes cadastrados</h1>
        <TabelaVisitante visitantes={visitantes} updateRelod={updateRelod}/>
        
        </div>}
    </>
  )
}