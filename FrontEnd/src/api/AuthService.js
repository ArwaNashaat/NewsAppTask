import axios from 'axios';

class AuthService{
    
     login($userCredentials){
        return axios.post('http://localhost:8001/api/login', $userCredentials, {
            headers: {'Content-Type': 'application/json', 'Accept':'application/json'}
        })
    }

    register($userData){
        return axios.post('http://localhost:8001/api/register', $userData, {
            headers: {'Content-Type': 'application/json', 'Accept':'application/json'}
        })
    }

    getNews($url, $category){
        axios.all([
            axios.get($url+'/'+$category[0]),
            axios.get($url+'/'+$category[1])
          ])
          .then(axios.spread((businessNews, sportNews) => {
            console.log('Business News: ', businessNews);
            console.log('Sport News: ', sportNews);
          }));
    }
}

export default new AuthService();