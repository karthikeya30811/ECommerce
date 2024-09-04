import axios from "axios";

const URL = "http://localhost:8080/contact"

class ContactService{
    async addContact(data)
    {
        return await axios.post(`${URL}/save`,data)
    }
    async getAllContact(){
        return await axios.get(`${URL}/all`)
    }
    async deleteById(id){
        return await axios.delete(`${URL}/delete/${id}`);
    }
}
const a = new ContactService();
export default a;