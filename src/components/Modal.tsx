import alert from '../assets/atencao.svg'

const Modal = () => {
  return (
    <div>
      <img src={alert} alt="Atenção" />
      <h1>Alerta</h1>
      <h3>Não foi encontrado nenhuma resposta para esta busca</h3>
    </div>
  )
}

export default Modal