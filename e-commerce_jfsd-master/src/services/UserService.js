import axios from "axios";

const URL = "http://localhost:8080/user"
class UserService {

    addUser(user) {
        return axios.post(`${URL}/save`, user)
    }
    async getLoginEmail(email, data) {
       return  axios.post(`${URL}/email/${email}`, data)
    }

    async getAllUsers(){
        return axios.get(`${URL}/all`)
    }
    async deleteUser(id)
    {
        return axios.delete(`${URL}/delete/${id}`)
    }
    async UpdateActive(id)
    {
        return axios.put(`${URL}/active/${id}`,id)
    }
}
const a = new UserService();
export default a;