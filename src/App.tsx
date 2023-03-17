import './App.css'
import { api } from './lib/axios'

type UserInfo = {
  id: number,
  name: string,
}

function App() {

  async function resgataUser(){
    await api.get('/users/patrick2m').then((response) => {
      console.log(response)
    })
    return
  }

  const usuarioInfo = resgataUser()
  
  
  
  return (
    <div className="App">
    </div>
  )
}

export default App
