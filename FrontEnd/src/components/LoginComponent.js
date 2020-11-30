const { Component } = require("react");

 class LoginComponent extends Component{
    render(){
        return(
        <div classname="loginComponent">
            User Name: <input type="text" name="username"/>
            <br></br>
            User Password: <input type="password" name="userpassword"/>
            <br></br>
            <button>Login</button>
        </div>
        );
    }
}

export default LoginComponent;