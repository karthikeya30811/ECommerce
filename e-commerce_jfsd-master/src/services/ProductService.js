import axios from "axios";

const URL = "http://localhost:8080/product"

class ProductService
{
    async saveUser(data)
    {
        return await axios.post(`${URL}/save`,data)
    }
    async getData(email)
    {
        return await axios.get(`${URL}/email/${email}`)
    }
    async deleteProduct(id)
    {
        await axios.delete(`${URL}/del/${id}`)
    }
}
export default new ProductService();