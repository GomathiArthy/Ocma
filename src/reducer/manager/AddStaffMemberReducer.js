const staffMemberReducerDefaultState = [];

const AddStaffMemberReducer =  (state = staffMemberReducerDefaultState, action) => {
    switch (action.type) {
       

            case 'ADD_STAFF':
                return [
                    ...state,
                    action.staffMember
                ];
                case "DELETE_STAFF_MEMBER":
                    return state.filter(({ empid}) => empid !== action.empid);
        
                case "GET_ALL_STAFF_MEMBER":
                    return [
                        ...state,
                        action.staffMember
                    ]
            default:
                return state;
        }
    }
    
       
export default AddStaffMemberReducer   ;