import { useState } from 'react'

function Jogo() {
const [resultado, setResultado] = useState()
  
  function classificar() {
    let pontos = Number(prompt("Quantos Pontos o Mano Jucalindo fez:"))
    if(pontos <= 10) {
      setResultado("Deu Ruim, pro Mano Jucalindo.")
    }else if(pontos <= 100) {
        setResultado("Mantenha a esperança Mano Jucalindo.")
    }else if(pontos <= 200) {
        setResultado("Supimpa, Mano Jucalindo.")
    }else{
        setResultado("O Mano Jucalindo é o melhor do mundo.")
    }
    }

  return (
    <div className="jogo">
        <h2>Jogo do Mano Jucalindo.</h2>
        <button onClick={classificar}>Classificar</button>
        <p>{resultado}</p>
    </div>
  )

}
export default Jogo