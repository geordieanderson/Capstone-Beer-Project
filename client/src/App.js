import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import logo from './assets/images/hops_logo.png'

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <div className="App">
      <header className="App-header">
        <h1>CRAFT BEER SITE</h1>
        <h3>Project Doneski!</h3>
        <img className="logo" src={logo} alt="logo"></img>
      </header>
    </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
