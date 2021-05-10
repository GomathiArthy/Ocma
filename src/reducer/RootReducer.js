  
import { combineReducers } from "redux";
import OfficeOutletReducer from "../reducer/officeoutlet/OfficeOutletReducer"
import LoginReducer from "./customer/LoginReducer"
import {getOfficeReducer,getAllOfficesReducer} from "../reducer/officeoutlet/OfficeOutletReducerTypes"
import CourierReducer from "../reducer/courier/CourierReducer"
import {getAllCourierReducer,getCourierReducer} from "../reducer/courier/CourierReducerType"

const RootReducer = combineReducers({
    OfficeOutletReducer,LoginReducer,CourierReducer,
    allOffices : getAllOfficesReducer,
    office : getOfficeReducer,
    
    allCouriers : getAllCourierReducer,
    courier : getCourierReducer,

});

export default RootReducer;