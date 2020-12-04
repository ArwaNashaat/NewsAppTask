import NewsService from '../api/NewsService.js'

const { Component } = require("react");

class NewsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            country: "eg",
            category: ["business", "sports"],
            news:[],
            favorite: null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount(){
        
        this.getNews();
    }

    render() {
        const headerNames = ["","Title", "Content", "Author", "Date/Time", "Source", "Favorite"];
        
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

                    {this.state.news.map((news,index) =>
                    <tbody key={index}>    
                        <tr>
                            <td><img src={news.urlToImage} alt="" width="100" height="50"></img></td>
                            <td>{news.title}</td>
                            <td>{news.description}</td>
                            <td>{news.author}</td>
                            <td>{new Date(news.publishedAt).toLocaleString()}</td>
                            <td><a href={news.url}>{news.source.name}</a></td>
                            <td><input type="checkbox" value={index} onClick={this.handleClick}/></td>
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
    
    async handleClick(event) {

        await this.setState({ favorite: this.state.news[event.target.value] });
        this.addToFavorite();

    }
    
    addToFavorite(){
        this.url = 'api/addToFavorites';
        
        NewsService.addToFavorite(this.url, {"Fav":this.state.favorite})
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {console.log(error)})
    }
    
    getNews(){
        this.url = 'api/news/' + this.state.country;
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