const { Component } = require("react");

 class RegisterComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: "Name",
            email: "Email",
            DOB: "Date of Birth"
        }
        this.handleChange = this.handleChange.bind(this);
        this.register = this.register.bind(this);

    }
    render(){
        return(
        <div className="registerComponent">
            User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            <br></br>
            User Email: <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
            <br></br>
            Date of Birth: <input type="text" name="DOB" value={this.state.DOB} onChange={this.handleChange}/>
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

    register(){
        if (this.state.email !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(this.state.email)) {
              alert("Enter a valid email")
            }
          }
    }
}


export default RegisterComponent;