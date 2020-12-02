import axios from 'axios';

const { Component } = require("react");

class LoginComponent extends Component {
    

    constructor(props){
        super(props)
        this.state = {
            email: "Email",
            password: "****",
            redirect: "/News",

        }
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }
    
    render() {
        return (
            
            <form className="loginComponent">
                <label for="email">Email:</label><br></br>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange} /><br></br><br></br>

                <label for="password">Password:</label><br></br>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br></br><br></br>

                <button onClick={this.login}>Login</button>
            </form>
        );
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    login(e){

        e.preventDefault();
        
        axios.post('http://localhost:8001/api/login', this.state, {
            headers: {'Content-Type': 'application/json', 'Accept':'application/json'}
        })
        .then(respone =>{ 
            this.props.history.push("/News");
        })
        .catch(error => alert("Wrong Email or Password"))
    }
}

export default LoginComponent;