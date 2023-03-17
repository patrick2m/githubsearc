import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../lib/axios'

type UserInfo = {
  id: number,
  name: string,
  login: string,
  company: string,
  location: string,
  public_repos: string,
  avatar_url: string,
  followers: number
}
type UserReposInfo = {
  id: number,
  name: string,
  description: string,
  stargazers_count: number,
  created_at: string
}

const Usuario = () => {
  const params = useParams().nome;
  const [Usuario, setUsuario] = useState<UserInfo>()
  const [UsuarioRepos, setUsuarioRepos] = useState<UserReposInfo[]>()

  useEffect(() => {
    api.get(`/users/${params}`).then(res => {
      setUsuario(res.data)
    });
    api.get(`/users/${params}/repos?direction=desc`).then(res => {
      setUsuarioRepos(res.data)
    });
  }, [params])

  return (
    <div>
      <div>
        {Usuario ? (
          <>
            <img src={Usuario.avatar_url} alt={Usuario.name} />
            <p>{Usuario.name}</p>
            <p>{Usuario.login}</p>
            <p>{Usuario.company}</p>
            <p>{Usuario.location}</p>
            <p>{Usuario.public_repos}</p>
            <p>{Usuario.followers}</p>
          </>
        ):(
          <p>Carregando...</p>
        )}
      </div>
      <div>
      {UsuarioRepos && UsuarioRepos.map((repo:UserReposInfo) => {
          return (
            <div key={repo.id} className="UsuarioRepositorio">
              <div className='UsuarioHeader'>
                <h1>{repo.name}</h1>
                <p>Estrela</p>
              </div>
              <p>{repo.description}</p>
              <p>{repo.stargazers_count}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Usuario;