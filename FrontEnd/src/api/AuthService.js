import axios from 'axios';
import * as Helper from '../Helper.js'

class AuthService {
    
    login(userCredentials) {
        return  axios({url: Helper.url,
            method: 'post', 
            data: {
                query: `mutation {
                    login(email:"${userCredentials.email}", password:"${userCredentials.password}")
                } `
            }
        })
    }

    register(userData) {

        return axios({
            url: Helper.url,
            method: 'post',
            data: {
                query: `mutation {
                    register(
                        name: "${userData.name}"
                        email:"${userData.email}"
                        dateOfBirth: "${userData.dateOfBirth}"
                    ) {
                        id
                        name
                        email
                    }
                    }`
            }})

    }
}

export default new AuthService();
