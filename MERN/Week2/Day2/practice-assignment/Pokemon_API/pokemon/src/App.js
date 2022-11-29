import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
const [pokemon, setPokemons] = useState([]);

const fetchPokemons =()=> {
  fetch("https://pokeapi.co/api/v2/pokemon")
  .then(response => {
    return response.json();
}).then(response => {
    setPokemons (response.results)
    console.log(response);

}).catch(err=>{
    console.log(err);
});
  
}
  return (
    <div className="App">
      <div className='container mt-5'>
  
        <button className='btn btn-outline-dark shadow p-3 mb-5 rounded' onClick={fetchPokemons}>Fetch pokemon</button>
     
      <table className='table table-hover table-bordered'>
        
            
        
              {pokemon.map((pok, idx) => {
              return (
                <ul key={idx}>
                  <li>{pok.name}</li>
                </ul>
              )
            })}
            
          

      </table>

      </div>

      
    </div>
  );
}

export default App;