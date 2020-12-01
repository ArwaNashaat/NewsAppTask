import axios from 'axios';
const { Component } = require("react");


 class RegisterComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "Name",
            email: "Email",
            dateOfBirth: "Date of Birth",
            password:"password"
        }
        this.handleChange = this.handleChange.bind(this);
        this.register = this.register.bind(this);
    }
    render(){
        return(
        <div className="registerComponent">
            User Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
            <br></br>
            User Email: <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
            <br></br>
            Date of Birth: <input type="text" name="dateOfBirth" value={this.state.dateOfBirth} onChange={this.handleChange}/>
            <br></br>
            <button onClick={this.register}>Register</button>
        </div>
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
            console.log(respone);
        })
        .catch(error => console.log(error))
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