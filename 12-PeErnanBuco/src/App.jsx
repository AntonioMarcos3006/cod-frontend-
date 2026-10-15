import { useState } from 'react'
import './App.css'
import OraçãoDoDevCansado from './components/OraçãoDoDevCansado'
import OraçãoDoDesenvolvedorWeb from './components/OraçãoDoDesenvolvedorWeb'
import OraçãoDoBackend from './components/OraçãoDoBackend'
import OraçãoDoAprendiz from './components/OraçãoDoAprendiz'
import OraçãoDoFrontend from './components/OraçãoDoFrontend'

function App() {
  const [igreja, setIgreja] = useState(0)

  return (
    <div className="app">

    
      <h1>Orações Importantes para os Devs</h1>
      {igreja==0 && <OraçãoDoDevCansado />}
      {igreja==1 && <OraçãoDoDesenvolvedorWeb />}
      {igreja==2 && <OraçãoDoBackend />}
      {igreja==3 && <OraçãoDoAprendiz />}
      {igreja==4 && <OraçãoDoFrontend />}


      <nav>
      <button onClick={() => setIgreja(0)}>Dev Cansado</button>
      <button onClick={() => setIgreja(1)}>Desenvolvedor Web</button>
      <button onClick={() => setIgreja(2)}>Backend</button>
      <button onClick={() => setIgreja(3)}>Aprendiz</button>
      <button onClick={() => setIgreja(4)}>Frontend</button>
    </nav>

    </div>
  )
}

export default App
