import axios from 'axios';

class NewsService{

     getNews(url, category){
        return axios.all([
            axios.get(`${url}/${category[0]}`),
            axios.get(`${url}/${category[1]}`)
          ]);
    }
}

export default new NewsService();