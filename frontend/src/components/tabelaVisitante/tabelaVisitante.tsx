import { Modal, Table, message } from 'antd'; 
import client from '../../axiosClient';
import { ExclamationCircleOutlined } from '@ant-design/icons';

interface Visitante {
  id: number;
  code: string;
  nome: string;
  created_at: string;
  updated_at: string;
}

interface TableVisitanteProps {
  visitantes: Visitante[];
  updateRelod: () => void;

}

export default function TabelaVisitante({visitantes, updateRelod}: TableVisitanteProps) {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Usuário deletado com sucesso!',
    });
  };

  const showPromiseConfirm = (code: string) => {

    Modal.confirm({
      title: 'Tem certeza?',
      icon: <ExclamationCircleOutlined />,
      content: 'Você tem certeza que quer deletar este item?',
      onOk() {
        const handleDelete = async () => {
          try{
            await client.post('/deleteVisitante', {
              code: code
            });
            success();
            updateRelod()
          }catch(error){
            console.log(error)
          }
        };
        handleDelete();
      },
      onCancel() {},
    });
  }

  const tableColumns = [
    {
      title: 'Código',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
      title: 'Operação',
      dataIndex: 'code',
      key: 'operacao',
      render: (_:string, record: Visitante) => (
        <span className='flex gap-3 items-center justify-center'>
          <a className='bg-red-500 p-2 rounded hover:bg-red-400 hover:text-black' onClick={() => showPromiseConfirm(record.code)}>Apagar</a>
          <a className='bg-green-500 p-2 rounded hover:bg-green-400 hover:text-black' href={`/visitantes/editar/${record.code}`}>Editar</a>
          <a className='bg-blue-500 p-2 rounded hover:bg-blue-400 hover:text-black' href={`/visitantes/visualizar/${record.code}`}>Ver</a>
        </span>
      ),
    },
  ]
  return(
    <>
      {contextHolder}
      <Table style={{textAlign: 'center' }} dataSource={visitantes} columns={tableColumns} />
    </>
  );
}