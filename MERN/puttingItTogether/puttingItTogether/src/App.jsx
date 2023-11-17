import './App.css';
import Person from './components/PersonalCard.jsx';
import { useState } from 'react';

function App() {
  const [janeAge, setJaneAge] = useState(45);
  const [johnAge, setJohnAge] = useState(88);

  function increaseJaneAge() {
    setJaneAge(janeAge + 1);
  }

  function increaseJohnAge() {
    setJohnAge(johnAge + 1);
}
    return (
        <div className="App">
            <Person firstName={ "Jane" } lastName = { "Doe" } age={janeAge} hairColor={"Black"} />
            <button onClick ={increaseJaneAge}>Birthday Button for Jane Doe</button>
            <Person firstName={ "John" } lastName = { "Smith" } age={johnAge} hairColor={"Brown"} />
            <button onClick ={increaseJohnAge}>Birthday Button for John Smith</button>
        </div>
    );
}

export default App;