import { useState } from 'react'

import yellowstar from '../assets/star-yellow.svg'
import blackstar from '../assets/star-black.svg'

type RepoInfos = {
  id: number,
  nome: string,
  descricao: string,
  estrelas: number
}

const StarButton = (repositorio: RepoInfos) => {
  const [ existe, setExiste ] = useState(false);

  function alterarFavorito(repositorio: RepoInfos){
    console.log(repositorio)
  }

  return (
    <button
      onClick={() => alterarFavorito(repositorio)}
    >
      {existe ? (
        <img src={yellowstar} alt="Favoritado" />
      ):(
        <img src={blackstar} alt="Favoritado" />
      )}
    </button>
  )
}

export default StarButton