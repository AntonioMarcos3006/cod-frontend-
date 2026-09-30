import { useState } from 'react'
import './App.css'

function App() {
  const [saida, setSaida] = useState(0)

  function calcularMedia(){
    let n1 = Number(prompt("Nota 1: "))
    let n2 = Number(prompt("Nota 2: "))
    let media = (n1 + n2) / 2
    setSaida(media)
      }
      function rolarD6(){
        let n = Math.ceil(Math.random()*6)
        setSaida(n)
      }
      function rolarD7(){
        let n = Math.ceil(Math.random()*7)
        setSaida(n)
      }
      function rolarD8(){
        let n = Math.ceil(Math.random()*8)
        setSaida(n)
      }
      function rolarD12(){
        let n = Math.ceil(Math.random()*12)
        setSaida(n)
      }
      function rolarD67(){
        let n = Math.ceil(Math.random()*67)
        setSaida(n)
      }
      function rolarD100(){
        let n = Math.ceil(Math.random()*100)
        setSaida(n)
      }
      function rolarD20(){
        let n = Math.ceil(Math.random()*20)
        setSaida(n)
      }
      function validar(){
        let senha = Number(prompt('Digite a senha para entrar no pc: '))
        let a = "Acesso permitido"
        let b = "Some da minha frente"
        if(senha == 1234){
          setSaida(a)
        }else{
          setSaida(b)
        }
      }
      function leitura(){
          let perguntaA = Number(prompt("Digite o primeiro número: "))
          let perguntaB = Number(prompt("Digite o segundo número: "))
          if(perguntaA > perguntaB){
            setSaida('O numero maior é o A ')
          }else{
            setSaida('O numero maior é o B ')
          }
      }
      function radar(){
        let placa = Number(prompt("Digite o ultimo número da placa: "))
        if(placa == 0 || placa == 1){
          setSaida('Não pode rodar na segunda-feira!')
        }else if(placa == 2 || placa == 3){
          setSaida('Não pode rodar na terça-feira!')
        }else if(placa == 4 || placa == 5){
          setSaida('Não pode rodar na quarta-feira!')
        }else if(placa == 6 || placa == 7){
          setSaida('Não pode rodar na quinta-feira!')
        }else{
          setSaida('Não pode rodar na sexta-feira!')
        }
      }
      function palestras(){
        let numeroP = Number(prompt('Qual é o numero da palestra que você quer participar (1 e 5):  '))
        if(numeroP == 1){
          setSaida('Animações com scratch, laboratório 305, 19h')
        }else if(numeroP == 2){
          setSaida('Scratch para gamers, laboratório 512, 20h')
        }else if(numeroP == 3){
          setSaida('JavaScript para leigos, laboratório 101, 19h')
        }else if(numeroP == 4){
          setSaida('Tópicos avançados de JavaScript, laboratório 305, 20h')
        }else if(numeroP == 5){
          setSaida('Vida e carreira, auditório, 21h')
        }else{
          setSaida('Essa palestra não existe!')
        }
      }

  return (
   <div className="app">
    <h1>Estados!</h1>
   <button onClick={calcularMedia}>Média</button>
     <button onClick={rolarD6}>D6</button>
     <button onClick={rolarD7}>D7</button>
     <button onClick={rolarD8}>D8</button>
     <button onClick={rolarD12}>D12</button>
     <button onClick={rolarD20}>D20</button>
     <button onClick={rolarD67}>D67</button>
     <button onClick={rolarD100}>D100</button>
     <button onClick={validar}>Acessar</button>
     <button onClick={leitura}>Mano juca!</button>
     <button onClick={radar}>Permissão para andar</button>
     <button onClick={palestras}>palestras</button>
     <p>
      Resultado: {saida}
     </p>
     </div>
  )
}

export default App
