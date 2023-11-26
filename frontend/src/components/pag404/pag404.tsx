export default function Pag404() {
  return (
    <>
      <h1>Página não encontrada</h1>
      <h2>Tente essas opções</h2>
      <ul className="flex flex-row gap-3">
        <li><a className="bg-slate-400 p-2 rounded hover:cursor-pointer hover:bg-slate-500" href="/">Página inicial</a></li>
        <li><a className="bg-slate-400 p-2 rounded hover:cursor-pointer hover:bg-slate-500" href="/visitantes">Todos os visitantes</a></li>
        <li><a className="bg-slate-400 p-2 rounded hover:cursor-pointer hover:bg-slate-500" href="/visitantes/cadastrar">Cadastrar visitante</a></li>
      </ul>

    </>
  )
}