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
                    <tbody>
                        <tr>
                            {headerNames.map( (value,index) => <th key={index}>{value}</th>)}
                        </tr>
                    </tbody>

                    {this.state.news.map(news =>
                    <tbody>    
                        <tr>
                            <td><img src={news.urlToImage} width="200" height="100"></img></td>
                            <td>{news.title}</td>
                            <td>{news.description}</td>
                            <td>{news.author}</td>
                            <td>{new Date(news.publishedAt).toLocaleString()}</td>
                            <td><a href={news.url}>{news.source.name}</a></td>
                            
                        </tr>
                    </tbody>
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