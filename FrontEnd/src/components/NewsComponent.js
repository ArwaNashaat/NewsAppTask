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
        this.handleChange = this.handleChange.bind(this);
        
    }
    
    componentDidMount(){
        this.getNews();
    }

    render() {
        const headerNames = ["","Title", "Content", "Author", "Date/Time", "Source"];
        return (
            <form className="newsComponent">
                <label>Choose Country</label><br></br>
                <select onChange={this.handleChange} >
                    <option value="eg">Egypt</option>
                    <option value="ae">UAE</option>
                </select><br></br><br></br>
                <table border="1">
                    <tr>
                        {headerNames.map( value => <th>{value}</th>)}
                    </tr>
                    
                    {this.state.news.map(news =>
                        
                        <tr>
                            <td><img src={news.urlToImage} width="100" height="50"></img></td>
                            <td>{news.title}</td>
                            <td>{news.description}</td>
                            <td>{news.author}</td>
                            <td>{news.publishedAt}</td>
                            <td><a href={news.url}>{news.source.name}</a></td>
                            
                        </tr>
                    )}    
                </table>
            </form>
        );
    }

    async handleChange(event) {

        await this.setState({ country: event.target.value });
        this.getNews();

    }
    
    getNews(){
        this.url = 'http://localhost:8001/api/news/' + this.state.country;
        NewsService.getNews(this.url, this.state.category)
        .then(response => {
            
            this.setState({
                news: this.getNewsArticles(response[0]).concat(this.getNewsArticles(response[1]))
            })
            console.log(this.state.news)
        })
    }

    getNewsArticles(response){
        return response.data.news.articles;
    }
}

export default NewsComponent;