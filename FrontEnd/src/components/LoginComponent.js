import AuthService from '../api/AuthService.js'
const { Component } = require("react");

class LoginComponent extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
            email: "Email",
            password: "****"

        }
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    render() {
        return (
            
            <form className="loginComponent">
                <label htmlFor="email">Email:</label><br></br>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange} /><br></br><br></br>

                <label htmlFor="password">Password:</label><br></br>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br></br><br></br>

                <button onClick={this.login}>Login</button>       
            </form>
        );
    }

    async handleChange(event) {
        await this.setState({
            [event.target.name]: event.target.value
        });
    }

    login(event) {

        event.preventDefault();
        AuthService.login(this.state)
            .then(response => {
                localStorage.setItem('token', response.data.token)
                this.routeToNewsPage();
            })
            .catch(error => alert("Wrong Email or Password"))
    }

    routeToNewsPage() {
        this.props.history.push("/News");
    }
}

export default LoginComponent;