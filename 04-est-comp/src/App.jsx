  
import './App.css'
import Feira from './components/Feira'
import Jogo from './components/Jogo'
import Pesar from './components/Pesar'
import Pousada from './components/Pousada'
import Votacao from './components/Votacao'

function App() {
  return (
   <div className="app">
    <h1>04 estados e componentes</h1>
    <Feira />
    <Pesar />
    <Votacao />
    <Pousada />
    <Jogo />

   </div>
  )
}

export default App
