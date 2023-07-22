//import logo from './logo.svg';
import './App.css';
//import Hello from './components/funtion';
//import New from './components/class';
//import Property from './components/funcprops';
//import State from './components/state';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Hello from './components/function';
import Page from './components/enter';
function App() {
  return (
    <div className="App">
      <Page/>
    </div>
  )
}

export default App;
