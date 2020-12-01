import axios from 'axios';
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
                
                <label for="name">User name:</label><br></br>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br></br><br></br>
                
                <label for="email">Email:</label><br></br>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/><br></br><br></br>
                
                <label for="dateOfBirth">Date of Birth:</label><br></br>
                <input type="text" name="dateOfBirth" value={this.state.dateOfBirth} onChange={this.handleChange}/><br></br><br></br>

                <button onClick={this.register}>Register</button>
                <a href='/Login'>login</a>
            </form>
            
        );
    }
    
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    register(e){
        this.verifyEmail();
        e.preventDefault();
        console.log(this.state);
        
        axios.post('http://localhost:8001/api/register', this.state, {
            headers: {'Content-Type': 'application/json', 'Accept':'application/json'}
        })
        .then(respone =>{
            alert("Successfully Registered, please login");
        })
        .catch(error => alert("Please Check That You Entered Correct Email"))
    }

    verifyEmail(){
        if (this.state.email !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(this.state.email)) {
              alert("Enter a valid email")
            }
          }
    }
   
}


export default RegisterComponent;