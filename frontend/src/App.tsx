import './App.css'
import Main from './components/main/main'
import { Routes, Route } from "react-router-dom";
import TodosVisitantes from './components/todosVisitantes/todosVisitante';
import VerVisitante from './components/verVisitante/verVisitante';
import EditVisitante from './components/editVisitante/editVisitante';
import NovoVisitante from './components/novoVisitante/novoVisitante';
import Pag404 from './components/pag404/pag404';
import Nav from './components/nav/nav';
import Administracao from './components/adminstracao/administracao';

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="*" element={<Pag404/>}/>
        <Route path="/" element={<Main/>}/>
        <Route path="/visitantes" element={<TodosVisitantes/>}/>
        <Route path="/visitantes/visualizar/:id" element={<VerVisitante/>}/>
        <Route path="/visitantes/editar/:id" element={<EditVisitante />}/>
        <Route path="/visitantes/cadastrar" element={<NovoVisitante/>}/>
        <Route path="/administracao" element={<Administracao/>}/> 
        
      </Routes>
    </>
  )
}

export default App
