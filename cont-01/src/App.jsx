import React, { useState } from 'react'

function App() {
  const [like, setLike] = useState(0);
  function darLike(){
      setLike(like + 1);

  }
  return (
    <div>
      <p>Quantidades de likes: {like}</p>
      <button onClick={darLike}>LIkes</button>


    </div>

  );
}

export default App