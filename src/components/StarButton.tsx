import React from 'react'

type Props = {
  repositorio: {
    id: number,
    nome: string,
    descricao: string,
    estrelas: number
  }
}

const StarButton = (props: Props) => {
  return (
    <div>StarButton</div>
  )
}

export default StarButton