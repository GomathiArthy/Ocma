const complaintReducerDefaultState = [];

const ComplaintReducer =  (state = complaintReducerDefaultState, action) => {
    switch (action.type) {
       

            case 'ADD_COMPLAINT':
                return [
                    ...state,
                    action.complaint
                ];
    
        default:
            return state;
    }
}

export default ComplaintReducer;