import './App.css';
import PersonCard from './components/person';


function App() {

  const person =[
    {
      firstName: "Doe",
      lastName: "Jane",
      age: 45,
      hairColor: "black"
    },
    {
      firstName: "Smith",
      lastName: "John",
      age: 88,
      hairColor: "Brown"
    },
    {
      firstName: "Fillmore ",
      lastName: "Millard",
      age: 50,
      hairColor: "Brown"
    },
    {
      firstName: "Smith",
      lastName: "Maria",
      age: 30,
      hairColor: "Brown"
    }
  ]
 

  return (
    <div className="App">
     <PersonCard person={person}/>
    </div>
  );
}

export default App;
