import AuthService from '../api/AuthService.js'
import axios from 'axios';

const { Component } = require("react");

class NewsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            country: "eg",
            category: ["business", "sports"]
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
        AuthService.getNews(this.url, this.state.category)
        // axios.all([
        //     axios.get(this.url+'/'+this.state.categoryBusiness),
        //     axios.get(this.url+'/'+this.state.categorySports)
        //   ])
        //   .then(axios.spread((businessNews, sportNews) => {
        //     console.log('Business News: ', businessNews);
        //     console.log('Sport News: ', sportNews);
        //   }));

        // axios.all([
        //     axios.get($url+'/'+$category[0]),
        //     axios.get($url+'/'+$category[1])
        //   ])
        //   .then(axios.spread((businessNews) => {
        //     console.log('Business News: ', businessNews[0]);
        //     console.log('Sport News: ', businessNews[1]);
        //   }));
    }
}

export default NewsComponent;