import { CourierActionTypes } from '../../action/CourierAction/CourierActionTypes'

const initialState ={
    couriers:[]
};

export const getAllCourierReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case CourierActionTypes.GET_ALL_COURIER:
            return {...state,couriers:payload}
    
        default:
            return state;
            
    }
};

export const getCourierReducer = (state = {} ,{type,payload}) => {
    switch (type) {
        case CourierActionTypes.GET_COURIER:
            return {...state,...payload}         
            
        default:
            return state;
    }
}