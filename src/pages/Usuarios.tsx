import { useEffect, useState } from "react"
import { api } from "../lib/axios"
import { Link, useParams } from 'react-router-dom';

type UserInfo = {
  id: number,
  name: string,
  login: string,
  avatar_url: string,
}

const Usuarios = () => {
  const [ listaUsuarios, setListaUsuarios ] = useState<UserInfo[]>([])
  const params = useParams().nome;

  useEffect(() => {
    api.get(`/search/users?q=${params}`).then(res => {
      setListaUsuarios(res.data.items)
    })
  }, [params])
  
  return (
    <div>
      {
        listaUsuarios ? (
          <>
            {listaUsuarios.map((usuario) => {
              const user = {
                id: usuario.id,
                name: usuario.name,
                login: usuario.login,
                avatar_url: usuario.avatar_url
              }
              return (
                <Link key={user.id} to={`/Usuario/${user.login}`}>
                  <div>
                    <img src={user.avatar_url} alt={user.name} />
                    <span>{user.login}</span>
                  </div>
                </Link>
              )
            })}
          </>
        ) : (
          <p>Carregando...</p>
        )
      }
    </div>
  )
}

export default Usuarios