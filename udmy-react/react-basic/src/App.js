import logo from './logo.svg';
import './App.css';
import Basic from './components/Basic';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <Basic name="FOOO!"></Basic>
      </header>
      
    </div>
  );
}

export default App;
