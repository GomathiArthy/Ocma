import 'bootstrap/dist/css/bootstrap.min.css';

const OfficeOutletReducerDefaultState = [];

const OfficeOutletReducer =  (state = OfficeOutletReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_OFFICE':
            return [
                ...state,
                action.office
            ];
            case "DELETE_OFFICE":
                return state.filter(({ officeId}) => officeId !== action.officeId);
    
            case "GET_ALL_OFFICES":
                return [
                    ...state,
                    action.office
                ]
        default:
            return state;
    }
}
export default OfficeOutletReducer;