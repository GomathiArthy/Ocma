import 'bootstrap/dist/css/bootstrap.min.css';
import { CourierActionTypes } from '../../action/CourierAction/CourierActionTypes'

const CourierReducerDefaultState = [];

const CourierReducer =  (state = CourierReducerDefaultState, action) => {
    switch (action.type) {
        case CourierActionTypes.ADD_COURIER:
            return [
                ...state,
                action.courier
            ];

            case CourierActionTypes.GET_ALL_COURIER:
                return [
                    ...state,
                    action.couriers
                ]

        default:
            return state; 
    }
}
export default CourierReducer;

