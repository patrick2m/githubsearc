import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/axios';

import gitlogo from '../assets/github.svg';

const Home = () => {
  const navigate = useNavigate();
  const [tipo, setTipo] = useState('')
  const [busca, setBusca] = useState('')

  async function verificarRepos(busca: string){
    await api.get(`/search/repositories?q=${busca}`).then(res => {
      if (res.data.total_count > 0) {
        navigate(`/Repositorios/${busca}`)
      } else {
        alert('Modal pois não houve repositorios na busca feita')
      }
    })
  }

  async function verificarUsers(busca: string){
    await api.get(`/search/users?q=${busca}`).then(res => {
      if (res.data.total_count > 0 ) {
        navigate(`/Usuario/${busca}`)
      } else {
        alert('Modal pois não houve usuários na busca feita')
      }
    })
  }

  function handleSubmit(event: FormEvent){
    event.preventDefault();
    {tipo === 'repos' ? verificarRepos(busca) : verificarUsers(busca)}
  }

  return (
    <div>
      <img src={gitlogo} alt="" />
      <form onSubmit={handleSubmit}>
        <div>
          <div onClick={() => setTipo('repos')}>Repositorios</div>
          <div onClick={() => setTipo('user')}>Usuarios</div>
        </div>
        <input
          type="text"
          placeholder='Buscar...'
          autoFocus
          value={busca}
          onChange={event => setBusca(event.target.value)}
        />
      </form>
    </div>
  )
}

export default Home