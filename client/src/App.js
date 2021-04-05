import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Styles from '../src/pages/Styles/Styles';
import About from '../src/pages/About/About';
import FindBeer from '../src/pages/FindBeer/FindBeer';
import HomePage from '../src/pages/HomePage/HomePage'


function App() {

  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/beers/:beerId" component={Styles}/>
      <Route path="/beers" exact component={Styles}/>
      <Route path="/about" component={About}/>
      <Route path="/find" component={FindBeer}/>   
    </Switch>
    </BrowserRouter>
  );
}

export default App;
