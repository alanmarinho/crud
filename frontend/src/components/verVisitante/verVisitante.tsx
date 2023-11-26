import { useParams } from 'react-router-dom';
import client from '../../axiosClient';
import { useEffect, useState } from 'react';
import { Spin, Table, Modal, message  } from 'antd';
import { LoadingOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

interface Visitante {
  id: number;
  code: string;
  nome: string;
  createdAt: string;
  updatedAt: string;
}

export default function VerVisitante() {
  const { id } = useParams<{ id: string }>();
  const [visitante, setVisitante] = useState<Visitante>();
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState(false)
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Usuário deletado com sucesso!',
    });
  };

  useEffect(() => {
    const getVisitantes = async () => {
      try{
        if (id){
          const response = await client.post('/getVisitante', {
            code: parseInt(id)
          });
          const dadosString = JSON.stringify(response.data);
          setVisitante(JSON.parse(dadosString));
          setTimeout(() => {
            setLoading(false);
          }, 400);
        }
      }catch(error){
        setTimeout(() => {setErro(true)}, 700);
        console.log(error)
      }
    };
    getVisitantes();
  }, [id])

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
  
  const tableColumns = [
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
      align: 'center' as const, 
    },
    {
      title: 'Código',
      dataIndex: 'code',
      key: 'code',
      align: 'center'as const, 
    },
    {
      title: 'Data de criação',
      dataIndex: 'createdAt',
      key: 'createdAt',
      align: 'center' as const, 
      render: (createdAt: string) => (
        <span>{dayjs(createdAt).format('DD/MM/YYYY hh:mm A')}</span>
      )
    },
    {
      title: 'Data de atualização',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: () => {
        if (visitante && visitante.updatedAt == visitante.createdAt) {
          return (
            <span className='text-center'>-</span>
          )
        }else{
          return (
            <span>{dayjs(visitante && visitante.updatedAt).format('DD/MM/YYYY hh:mm A')}</span>
          )
        }
      }
    },
    {
      title: 'Operação',
      dataIndex: 'code',
      key: 'code',
      align: 'center' as const, 
      render: (_:string, record: Visitante) => (
        <span className='flex gap-3 items-center justify-center'>
          <a className='bg-red-500 p-2 rounded hover:bg-red-400 hover:text-black' onClick={showPromiseConfirm}>Apagar</a>
          <a className='bg-green-500 p-2 rounded hover:bg-green-400 hover:text-black' href={`/visitantes/editar/${record.code}`}>Editar</a>
        </span>
      ),
    }
  ]

  const showPromiseConfirm = () => {
    Modal.confirm({
      title: 'Tem certeza?',
      icon: <ExclamationCircleOutlined />,
      content: 'Você tem certeza que quer deletar este item?',
      onOk() {
        const handleDelete = async () => {
          try{
            await client.post('/deleteVisitante', {
              code: visitante?.code
            });
            success();
            setTimeout(() => {
              window.location.href = '/visitantes';
            }, 700);
          }catch(error){
            console.log(error)
          }
        };
        handleDelete();
      },
      onCancel() {},
    });
  }

  return (
    <div>
      {contextHolder}
      <h1 className="text-4xl">Ver Visitante</h1>
      {visitante && 
      <div className="flex flex-col m-5 items-center justify-center">
        <Table
          className="w-1/2"
          dataSource={[visitante]}
          columns={tableColumns}
          pagination={false}
          style={{textAlign: 'center' }}
        />
      </div>
      }

    </div>
  )
}