import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Styles from '../src/pages/Styles/Styles';
import About from '../src/pages/About/About';
import FindBeer from '../src/pages/FindBeer/FindBeer';
import HomePage from '../src/pages/HomePage/HomePage';
import Favourites from '../src/components/Favourites/Favourites';
import MockAgeGate from './pages/MockAgeGate/MockAgeGate';
import FavouritesMock from './pages/FavouritesMock/FavouritesMock';

function App() {

  return (
    <BrowserRouter>
    <Switch>
      <Route path ="/" exact component={MockAgeGate}/>
      <Route path="/home" component={HomePage}/>
      <Route path="/beers/:beerId" component={Styles}/>
      <Route path="/beers" exact component={Styles}/>
      <Route path="/about" component={About}/>
      <Route path="/find" component={FindBeer}/>   
      <Route path="/favourites" component={Favourites}/>
      <Route path="/myfavourites" component={FavouritesMock}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
