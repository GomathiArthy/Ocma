
const customerReducerDefaultState = [];

const CustomerReducer =  (state = customerReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_CUSTOMER':
            return [
                ...state,
                action.customer
            ];

            case 'ADD_COMPLAINT':
                return [
                    ...state,
                    action.complaint
                ];
    
        default:
            return state;
    }
}

export default CustomerReducer;