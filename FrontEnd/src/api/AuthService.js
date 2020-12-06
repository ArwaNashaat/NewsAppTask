import axios from 'axios';
import * as Helper from '../Helper.js'

class AuthService {

    login(userCredentials) {
        return axios.post('api/login', userCredentials, {
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
        })
    }

    register(userData) {

        console.log(userData)
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
            }}).then(res => {
                console.log(res.data)
                if (res.data.data.register == null)
                    alert("Email Already Exists")
                else
                    alert("Successfully Registered, please login")
            })

    }
}

export default new AuthService();
