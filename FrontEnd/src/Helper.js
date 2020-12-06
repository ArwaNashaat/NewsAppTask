export const url = 'http://localhost:8001/graphql'; 
class Helper{
    getToken(){
        return "Bearer " + localStorage.getItem('token');
    }    
    
    getHeader(){
        return {'Content-Type': 'application/json', 'Accept':'application/json'
        , 'Authorization':this.getToken()};
    }
    
}

export default new Helper();