import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home/Home';
import Styles from '../src/pages/Styles/Styles';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/styles" component={Styles}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
