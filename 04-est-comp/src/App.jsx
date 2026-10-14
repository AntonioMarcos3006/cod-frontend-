  
import './App.css'
import Feira from './components/Feira'
import Jogo from './components/Jogo'
import Pesar from './components/Pesar'
import Pousada from './components/Pousada'
import Votacao from './components/Votacao'
import Ganso from './components/Ganso'
import Ganso2 from './components/Ganso2'
import Mistica from './components/Mistica'
import Eventos from './components/Eventos'


function App() {
  return (
   <div className="app">

    <h1>04 estados e componentes</h1>

    <h2>#0030</h2>
    <Ganso />
    <Ganso2 />
    <Mistica />
    <Eventos />

    <hr />

    <h2>#0027.sq5</h2>
    <Feira />
    <Pesar />
    <Votacao />
    <Pousada />
    <Jogo />

   </div>
  )
}

export default App
