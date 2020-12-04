import axios from 'axios';

class AuthService{
    
    login(userCredentials){
        return axios.post('api/login', userCredentials, {
            headers: {'Content-Type': 'application/json', 'Accept':'application/json'}
        })
    }

    register(userData){
        return axios.post('api/register', userData, {
            headers: {'Content-Type': 'application/json', 'Accept':'application/json'}
        })
    }
    
}

export default new AuthService();