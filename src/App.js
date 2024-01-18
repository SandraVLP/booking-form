import './App.css';
import Form from './Components/Form/Form';

function App() {

  let floors = [];

  for (let i = 3; i < 28; i++) {
    floors.push(i);
 } 

 let rooms = [];

 for (let i = 1; i < 11; i++) {
  rooms.push(i);
}  

  return (
    <div className="App">
<Form floors={floors} rooms={rooms} />
    </div>
  );
}

export default App;
