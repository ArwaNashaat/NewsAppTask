import axios from 'axios';

const { Component } = require("react");

class NewsComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            country:"eg"
        }
        this.handleClick = this.handleClick.bind(this);
        // this.login = this.login.bind(this);
    }
    
    render() {
        return (
            
            <form className="newsComponent">
                <button value='eg' onClick={this.handleClick}>Egypt News</button> <br></br><br></br>
                <button value ='ae' onClick={this.handleClick}>UAE News</button>
            </form>
        );
    }

    handleClick(event){
        this.setState({
            [event.target.name]: event.target.value
        });

    }
}

export default NewsComponent;