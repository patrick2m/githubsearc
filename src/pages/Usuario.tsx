import React, { useEffect, useState } from 'react'
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

const Usuario = () => {
  const nome = 'patrick2m'

  const [Usuario, setUsuario] = useState<UserInfo>()
  const [UsuarioRepos, setUsuarioRepos] = useState()

  useEffect(() => {
    api.get(`/users/${nome}`).then(res => {
      setUsuario(res.data)
    });
    api.get(`/users/${nome}/repos?direction=desc`).then(res => {
      setUsuarioRepos(res.data)
    });
  }, [nome])
  
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
    </div>
  )
}

export default Usuario