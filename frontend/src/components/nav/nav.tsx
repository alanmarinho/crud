
export default function Nav() {
  return(
    <div className="flex flex-col gap-3">
     <nav>
        <ul className="flex flex-row gap-3">
          <li>
            <a href="/" className="text-blue-500 hover:text-blue-800">Home</a>
          </li>
          <li>
            <a href="/visitantes" className="text-blue-500 hover:text-blue-800">Todos Visitantes</a>
          </li>
          <li>
            <a href="/visitantes/cadastrar" className="text-blue-500 hover:text-blue-800">Cadastrar Visitante</a>
          </li>
          <li>
            <a href="/administracao" className="text-blue-500 hover:text-blue-800">Administração</a>
          </li>
        </ul>
     </nav>
    </div>
  )
}