import NewsService from '../api/NewsService.js'

const { Component } = require("react");

class FavoritesComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            favorites:[],
            title:null,
            source:null,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.getAllFavorites();
    }

    render() {
        const headerNames = ["","Title", "Content", "Author", "Date/Time", "Source", "Remove from Favorites"];
        return (
            <form className="favoritesComponent">
                                
                <table border="1">
                    <tbody>
                        <tr>
                            {headerNames.map( (value,index) => <th key={index}>{value}</th>)}
                        </tr>
    
                    </tbody>

                    {this.state.favorites.map((news,index) =>
                    <tbody key={index}>    
                        <tr>
                            <td><img src={news.urlToImage} alt="" width="100" height="50"></img></td>
                            <td>{news.title}</td>
                            <td>{news.description}</td>
                            <td>{news.author}</td>
                            <td>{new Date(news.publishedAt).toLocaleString()}</td>
                            <td><a href={news.url}>{JSON.parse(news.source).name}</a></td>
                            {/* FavoritesComponent button is different from the one in NewsComponent 
                            so the page automatically refreshes after the remove button is clicked, but not refreshes after the add button is clicked*/}
                            <td><button id={index} onClick={this.handleClick}>Remove</button></td>
                        </tr>
                    </tbody>
                    )}  
                </table>
            </form>
        );
    }
    
    async handleClick(event){
        
        await this.setState({ title: this.state.favorites[event.target.id].title,
                            source: this.state.favorites[event.target.id].source});
        this.removeFromFavorite();
    }
    
    removeFromFavorite(){
        this.url = 'api/removeFromFavorites/'+this.state.title+'/'+this.state.source;

        NewsService.removeFromFavorites(this.url)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {console.log(error)})
    }

    getAllFavorites(){
        this.url = 'api/getAllFavorites';
        NewsService.getAllFavorites(this.url)
        .then(response => {
            this.setState({favorites: response.data.favorites});
        })
        .catch(error => {
            console.log(error)
        })
    }

    getNewsArticles(response){
        return response.data.news.articles;
    }

}

export default FavoritesComponent;