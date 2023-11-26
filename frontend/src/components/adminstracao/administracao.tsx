import {  Modal, message } from 'antd';
import TodosVisitantes from '../todosVisitantes/todosVisitante';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import client from '../../axiosClient';
import { useState } from 'react';

export default function Administracao() {
  const [open, setOpen] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();


  const showPromiseConfirm = () => {

    Modal.confirm({
      title: 'Apagar todos os dados do banco',
      icon: <ExclamationCircleOutlined />,
      content: 'Você tem certeza que quer deletar todo o banco de dados? Essa operação não pode ser desfeita! E é irreversível!',
      onOk() {
        const handleDelete = async () => {
          try{
            await client.post('/deleteVisitante', {
              deleteAll: true
            });
            window.location.reload()
          }catch(error){
            console.log(error)
          }
        };
        handleDelete();
      },
      onCancel() {},
    });
  }

  const autenticacao = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      login: { value: string };
      senha: { value: string };
    };

    if (target.login.value === 'admin' && target.senha.value === 'admin') {
      success();
      setOpen(false);
    } else {
      error();
    }
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Autenticação efetuada com sucesso',
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Login ou senha incorretos',
    });
  };

  return(
    <>
    {contextHolder}
    {!open ? 
    <div>

      <h1 className='text-4xl'>Administração</h1>
      <TodosVisitantes />
      <div className="flex justify-center">
        <a className="bg-red-400 p-2 rounded hover:bg-red-500 w-40" onClick={() => showPromiseConfirm()}>Apagar Tudo</a>
      </div> 
    </div>:

      <Modal
        open={open}
        title="Fake autenticação"
        footer={false}
        onCancel={() => window.location.href = '/'}
      >
        <form action="" onSubmit={autenticacao}>
          <div className='flex gap-3'>

          <label htmlFor="">Login</label>
          <input type="text" name="login" placeholder='login' className='bg-white rounded border-slate-500 border' required/>
          <label htmlFor="">Senha</label>           
          <input type="password" name="senha" placeholder='Senha' className='bg-white rounded border-slate-500 border' required/>
          </div>
          <div className='flex mt-5 justify-end gap-3'>
            <input className='bg-red-400 hover:bg-red-500 p-2 rounded ml-3' type="reset" value="Limpar"/>
            <input className='bg-green-400 hover:bg-green-500 p-2 rounded' type="submit"  value="Autenticar"/>
          </div>
        </form>
      </Modal>}
    </>
  )
}
