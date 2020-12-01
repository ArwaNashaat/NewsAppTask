import './App.css';
import RegisterComponent from './components/RegisterComponent'
import LoginComponent from './components/LoginComponent'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
const { Component } = require("react");

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <Route path='/' component={RegisterComponent} exact={true}/>
          <Route path='/Login' component={LoginComponent} exact={true}/>
        </div>
      </BrowserRouter>

    );
  }
}


const routes=(
  <BrowserRouter>
    <div>
      <Route path='/login' component={LoginComponent}/>
    </div>
  </BrowserRouter>
)

export default App;

// ReactDOM.render(routes, document.getElementById("app"));