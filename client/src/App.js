import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from '../src/pages/Home/Home';
import Styles from '../src/pages/Styles/Styles';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/beers/:beerId" component={Styles}/>
      <Route path="/beers" exact component={Styles}/>
      
    </Switch>
    </BrowserRouter>
  );
}

export default App;
