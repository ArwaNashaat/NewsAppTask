import axios from 'axios';

const { Component } = require("react");

class NewsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            country: "eg"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (

            <form className="newsComponent">
                <button value='eg' onClick={this.handleClick}>Egypt News</button> <br></br><br></br>
                <button value='ae' onClick={this.handleClick}>UAE News</button>
            </form>
        );
    }

    async handleClick(event) {

        await this.setState({ country: event.target.value });
        this.getNews(event);

    }

    getNews(event) {
        event.preventDefault();
        this.url = 'http://localhost:8001/api/news/' + this.state.country;

        axios.get(this.url)
            .then((response) => {
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
            });
        }
}

export default NewsComponent;