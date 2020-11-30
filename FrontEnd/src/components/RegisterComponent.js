const { Component } = require("react");

 class RegisterComponent extends Component{
    render(){
        return(
        <div classname="registerComponent">
            User Name: <input type="text" name="username"/>
            <br></br>
            User Email: <input type="text" name="email"/>
            <br></br>
            Date of Birth: <input type="text" name="DOB"/>
            <br></br>
            <button>Register</button>
        </div>
        );
    }
}

export default RegisterComponent;