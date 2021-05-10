import { combineReducers } from "redux";
import CourierReducer from "../../reducer/courier/CourierReducer";
import {getAllCourierReducer, getCourierReducer } from "../../reducer/courier/CourierReducerType";


const RootReducer = combineReducers({
    CourierReducer,
    allCouriers : getAllCourierReducer,
    courier : getCourierReducer,
});

export default RootReducer;
