import { useState } from "react"


function Pesar() {
    const [peso, setPeso] = useState()

    function calcular() {
        let altura = Number(prompt("Qual a sua altura?"))
        let genero = prompt("Qual o seu gênero? (M/F): ")
        if (genero === "F") {
            setPeso("Seu peso ideal é: " + (62.1 * altura - 44.7).toFixed(2) + "kg")
        } else if (genero === "M") {
            setPeso("Seu peso ideal é: " + (72.7 * altura - 58).toFixed(2) + "kg")
        } else {
            setPeso("Gênero inválido. Por favor, insira 'M' para masculino ou 'F' para feminino.")
        }
    }

    return (
        <div>
            <h2>Calcular Peso Ideal</h2>
            <button onClick={calcular}>Calcular Peso Ideal</button>
            <p>{peso}</p>
        </div>
    )
}

export default Pesar