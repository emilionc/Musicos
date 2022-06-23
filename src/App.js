import React, { useState } from 'react';
import Add from './Componentes/Add';
import './App.css';
import Musicos from './Componentes/Musicos';

function App() {
  

  const [artistas, setArtistas] = useState([{name: "lennon", id: 1}, {name: "harrison", id: 2}]);

  
  return (
    <div className="App">
      
      
        <Musicos artistas={artistas} />
        <Add />
      
    </div>
  );
}

export default App;
