import React, { useState } from 'react';
import './App.css'
function App() {
  const [dados, setDados] = useState(0);

  return (
    <div className="cont-like">
      <p>SITE DO GOVERNO DO BRASIL: {dados}</p>

      <input type="email" placeholder="Digite seu email" />

      <input type="text" placeholder="Digite seu cpf" />

      <button onClick={() => setDados(dados + 1)}>
      CADASTRAR
      </button>
    </div>
  );
}

export default App;