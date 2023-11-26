import { useEffect, useState } from "react"
import client from "../../axiosClient"
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd'; 
export default function Teste() {
  const [teste, setTeste] = useState('API nao está funcionando')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const Teste = async () => {
      try{
        const response = await client.get('/', {});
        setTeste(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 700);
      }catch(error){
        console.log(error)
      }
    }
    Teste()
  }, [])

  if(loading){
    return (
      <>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      </>
    )
  }

  return (
    <>
      <div className="text-red-500">{teste}</div>
    </>
  )
}