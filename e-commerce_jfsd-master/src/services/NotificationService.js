import axios from "axios";

const URL = "http://localhost:8080/notification"

class NotificationService{

    async addNotification(data){
        return axios.post(`${URL}/save`,data)
    }

    async allNotifications(){
        return axios.get(`${URL}/all`)
    }

}
const a = new NotificationService()
export default a;