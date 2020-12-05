import './App.css';
import RegisterComponent from './components/RegisterComponent'
import LoginComponent from './components/LoginComponent'
import NewsComponent from './components/NewsComponent'
import FavoritesComponent from './components/FavoritesComponent'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
const { Component } = require("react");

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path='/' component={RegisterComponent} exact={true}/>
            <Route path='/Login' component={LoginComponent} exact={true}/>
            <Route path='/News' component={NewsComponent} exact={true}/>
            <Route path='/Favorites'component={FavoritesComponent} exact={true}/>
            <Route component={RegisterComponent}/>
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;