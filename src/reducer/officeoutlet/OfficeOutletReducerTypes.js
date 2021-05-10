const initialState ={
    offices:[]
};

export const getAllOfficesReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case "GET_ALL_OFFICES":
            return {...state,offices:payload}
    
        default:
            return state;
            
    }
};

export const getOfficeReducer = (state = {} ,{type,payload}) => {
    switch (type) {
        case "GET_OFFICE":
            return {...state,...payload}
            
        case "DELETE_OFFICE":
            return{}
            
        default:
            return state;
    }
}