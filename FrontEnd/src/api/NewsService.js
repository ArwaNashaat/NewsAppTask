import axios from 'axios';

class NewsService{

  getNews(url, category){
        return axios.all([
            axios.get(`${url}/${category[0]}`),
            axios.get(`${url}/${category[1]}`)
          ]);
    }

    addToFavorite(url, favorite){
      let token = "Bearer " + localStorage.getItem('token');
      return axios.post(url, favorite, {
            headers: {'Content-Type': 'application/json', 'Accept':'application/json', 'Authorization':token}
        });
    }

    removeFromFavorites(url){
      let token = "Bearer " + localStorage.getItem('token');
      
      return axios.delete(url,{
        headers: {'Content-Type': 'application/json', 'Accept':'application/json', 'Authorization':token}
      });
    }
}

export default new NewsService();