import axios from "axios"

const URL = "http://localhost:8080/feedback"

class FeedbackService{

    async addFeedBack(f)
    {
        return await axios.post(`${URL}/save`,f)
    }

    async getAllFeedBack()
    {
         
        const ans =  await axios.get(`${URL}/all`)
        console.log("ans",ans)
        return ans;
    }

    async getById(id){
        return axios.get(`${URL}/one/${id}`)
    }
    async deleteByid(id)
    {
        return axios.delete(`${URL}/delete/${id}`)
    }
}
export default new FeedbackService();