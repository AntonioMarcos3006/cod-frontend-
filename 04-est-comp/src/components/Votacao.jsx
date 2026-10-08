import { useState } from "react"


function Votacao() {
    const [votos, setVotos] = useState()

    function votar() {
        let idade = Number(prompt("Qual a sua idade?"))
        if (idade < 16) {
            setVotos("Você não pode votar, mas quando puder vote no Renan 14.")
        } else if (idade >=16 && idade < 18) {
            setVotos("Você pode votar, mas o voto é facultativo, por isso vote Renan 14.")
        }else if (idade >= 18 && idade < 70) {
            setVotos("Você pode votar, e o seu voto é obrigatório, por isso vote Renan 14.")
        }else if (idade >= 70 && idade < 120) {
            setVotos("Você pode votar, mas o voto é facultativo, por isso vote Renan 14.")
        }else{
            setVotos("Você morreu, mas se estivesse vivo votaria no Renan 14.")
        }
    }

    return (
        <div className="votacao">
            <h2>Vote Renan Santos 14</h2>
            <button onClick={votar}>Votar</button>
            <p>{votos}</p>
        </div>
    )
}

export default Votacao