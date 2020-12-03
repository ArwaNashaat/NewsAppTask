import axios from 'axios';

class AuthService{
    
     login(userCredentials){
        return axios.post('http://localhost:8001/api/login', userCredentials, {
            headers: {'Content-Type': 'application/json', 'Accept':'application/json'}
        })
    }

    register(userData){
        return axios.post('http://localhost:8001/api/register', userData, {
            headers: {'Content-Type': 'application/json', 'Accept':'application/json'}
        })
    }
    
}

export default new AuthService();