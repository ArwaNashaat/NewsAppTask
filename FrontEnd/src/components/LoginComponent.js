import AuthService from '../api/AuthService.js'
const { Component } = require("react");

class LoginComponent extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
            email: "Email",
            password: "****",
            isLogged:null

        }
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    render() {
        return (
            
            <form className="loginComponent">

                <label className="stateLable">{this.state.isLogged}</label> <br/><br/><br/><br/>

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

    async login(event) {

        event.preventDefault();
        await this.setState({isLogged: "Logging..."})
        let response = await AuthService.login(this.state)
        // console.log(response)
        if(this.checkError(response)){
            this.stopLogginLable()
            return
        }
        this.stopLogginLable();
        localStorage.setItem('token', response.data.token)
        this.routeToNewsPage();
    }

    async stopLogginLable(){
        await this.setState({isLogged: null})
    }

    checkError(response){
        if(response.data.errors){
            alert("Wrong Email or Password")
            return true;
        }
        return false;
    }
    routeToNewsPage() {
        this.props.history.push("/News");
    }
}

export default LoginComponent;