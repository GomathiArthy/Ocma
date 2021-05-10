import axios from 'axios';

const  COURIER_API_BASE_URL = "http://localhost:9191//api/ocma/courier";

class CourierService {
addCourier(courier){
    return axios.post(COURIER_API_BASE_URL, courier);
}
}
export default new CourierService()