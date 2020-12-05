import axios from 'axios';
import Helper from '../Helper.js';

class NewsService{
  
  getNews(url, category){
        return axios.all([
            axios.get(`${url}/${category[0]}`),
            axios.get(`${url}/${category[1]}`)
          ]);
    }

    addToFavorite(url, favorite){
      
      return axios.post(url, favorite, {
            headers: Helper.getHeader(),
        });
    }

    removeFromFavorites(url){
  
      return axios.delete(url,{
        headers: Helper.getHeader()
      });
    }

    async getAllFavorites(url){

      return axios.get(url,{
        headers: Helper.getHeader()
      })

    }
}

export default new NewsService();