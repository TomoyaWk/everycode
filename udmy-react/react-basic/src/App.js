import logo from './logo.svg';
import './App.css';
// import Basic from './components/Basic';
// import Basic2 from './components/Basic2';
// import  BasicUseEff from "./components/BasicUseEff";
// import TimerContainer from "./components/TimerContainer";
import ApiFetch from "./components/ApiFetch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* <Basic name="FOOO!"></Basic> */}
        {/* <Basic2></Basic2> */}
        {/* <BasicUseEff /> */}
        {/* <TimerContainer /> */}
        <ApiFetch />
      </header>
      
    </div>
  );
}

export default App;
