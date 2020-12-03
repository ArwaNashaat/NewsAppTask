import NewsService from '../api/NewsService.js'

const { Component } = require("react");

class NewsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            country: "eg",
            category: ["business", "sports"],
            news:[]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.url = 'http://localhost:8001/api/news/' + this.state.country;
        NewsService.getNews(this.url, this.state.category)
        .then(response => {
            
            this.setState({
                news: this.getNewsArticles(response[0]).concat(this.getNewsArticles(response[1]))
            })
            console.log(this.state.news)
        });  
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

    }
    
    getNewsArticles(response){
        return response.data.news.articles;
    }
}

export default NewsComponent;