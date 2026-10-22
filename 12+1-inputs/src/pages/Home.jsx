import React, { useState } from 'react'

function Home() {
    const [inputLogin, setInputLogin] = useState('')
    function efetuarLogin() {
        if(inputLogin == 'admin') {
            alert('Voce recebeu acesso de administrador do sistema')
        }else {
            alert('Voce recebeu acesso de usuario do sistema')
        }
    }
  return (
    <div className='home'>
<h1>Inputs Controlados</h1>
    <label htmlFor="">Login:</label>
    
    <input type="text"
    value={inputLogin}
    onChange={(e) => setInputLogin(e.target.value)}
    />
    <button onClick={efetuarLogin}>Entrar</button>
    <p>
        {/* {inputLogin} */}
    </p>
    
    </div>
  )
}

export default Home