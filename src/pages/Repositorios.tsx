import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../lib/axios';

import blackstar from '../assets/star-black.svg'

type ReposInfo = {
  id: number,
  name: string,
  description: string,
  stargazers_count: number,
}

const Repositorios = () => {
  const params = useParams().nome;
  const [quantidade, setQuantidade] = useState(2);

  const [listaRepositorios, setListaRepositorios] = useState<ReposInfo[]>([])

  useEffect(() => {
    api.get(`/search/repositories?q=${params}`).then(res => {
      setListaRepositorios(res.data.items)
    })
  }, [params])
  


  return (
    <div>
      {
        listaRepositorios ? (
          <>
            {listaRepositorios.map((repositorio) => {
              const repo = {
                id: repositorio.id,
                name: repositorio.name,
                description: repositorio.description,
                curtidas: repositorio.stargazers_count
              }
              return (
                <div key={repo.id}>
                  <div>
                    <h1>{repo.name}</h1>
                    <p>{repo.name}</p>
                    <div>
                      <img src={blackstar} alt="Curtidas" />
                      <p>{repo.curtidas}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </>
        ) : (
          <>
            <p>Carregando...</p>
          </>
        )
      }
    </div>
  )
}

export default Repositorios