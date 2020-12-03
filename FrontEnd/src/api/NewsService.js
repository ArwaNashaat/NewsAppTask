import axios from 'axios';

class NewsService{

    getNews(url, category){
        axios.all([
            axios.get(`${url}/${category[0]}`),
            axios.get(`${url}/${category[1]}`)
          ])
          .then(axios.spread((businessNews, sportNews) => {
            console.log('Business News: ', businessNews);
            console.log('Sport News: ', sportNews);
          }));
    }
}

export default new NewsService();