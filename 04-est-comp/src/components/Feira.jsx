import { useState } from "react"


function Feira() {
    const [feira, setFeira] = useState()

    function preco() {
        let quantidade = Number(prompt("Digite a quantidade de maçãs que deseja comprar: "))
        if (quantidade < 12) {
            setFeira(`O preço total das maçãs é: R$${(quantidade * 0.30).toFixed(2)}`)
        } else {
            setFeira(`O preço total das maçãs é: R$${(quantidade * 0.25).toFixed(2)}`)
        }
    }

  return (
    <div>
      <h2>Feira da Rua</h2>
      <button onClick={preco}>Calcular Preço</button>
      <p>{feira}</p>
    </div>
  )
}

export default Feira