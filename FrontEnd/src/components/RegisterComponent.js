import AuthService from '../api/AuthService.js'
const { Component } = require("react");


class RegisterComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "Name",
            email: "Email",
            dateOfBirth: "Date of Birth"
        }
        this.handleChange = this.handleChange.bind(this);
        this.register = this.register.bind(this);
    }
    render(){
        return(
            <form className="registerComponent">
                
                <label htmlFor="name">User name:</label><br></br>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br></br><br></br>
                
                <label htmlFor="email">Email:</label><br></br>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/><br></br><br></br>
                
                <label htmlFor="dateOfBirth">Date of Birth:</label><br></br>
                <input type="text" name="dateOfBirth" value={this.state.dateOfBirth} onChange={this.handleChange}/><br></br><br></br>

                <button onClick={this.register}>Register</button>
                <a href='/Login'>login</a>
            </form>
            
        );
    }
    
    async handleChange(event){
        await this.setState({
            [event.target.name]: event.target.value
        });
    }

    register(event){
        if(!this.verifyEmail()){
            alert("Wrong Email");
            return;
        }
        event.preventDefault();
        
        AuthService.register(this.state)
        .then(respone =>{
            alert("Successfully Registered, please login");
        })
        .catch(error => alert("Please Enter Your Data Correctly"))
    }

    verifyEmail(){
        if (this.state.email !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            
            if (!pattern.test(this.state.email)) {
                return false;
            }

            return true;
        }
    }
}


export default RegisterComponent;