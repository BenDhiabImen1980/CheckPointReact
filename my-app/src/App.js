import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from './Buttons'
import Forms from './Forms'
import Navbar from './Navbar'
import Feet from './Feet'

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>   
      <Navbar/>
      <br></br>
      <Forms/>
      <br></br>
      <Buttons/>
      <br></br>
      <Feet/>
    </div>
  );
}

export default App;
