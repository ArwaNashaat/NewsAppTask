import './App.css';
import RegisterComponent from './components/RegisterComponent'
import LoginComponent from './components/LoginComponent'
import NewsComponent from './components/NewsComponent'
import {BrowserRouter, Route} from 'react-router-dom';
const { Component } = require("react");

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <Route path='/' exact component={RegisterComponent} />
          <Route path='/Login' exact component={LoginComponent} />
          <Route path='/News' exact component={NewsComponent} />
          <Route component={RegisterComponent}/>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;

// ReactDOM.render(routes, document.getElementById("app"));