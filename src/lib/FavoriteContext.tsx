import { createContext, useState } from 'react';

type Favoritos = {
  id: number,
  nome: string,
  descricao: string,
  estrelas: number
}

export const FavoritosContext = createContext<Favoritos[]>([]);

export const FavoritosStorage = () => {
  const [ favoritosLocal, setFavoritosLocal ] = useState<Favoritos[]>([])

  return (
    <FavoritosContext.Provider value={favoritosLocal}>

    </FavoritosContext.Provider>
  )
}