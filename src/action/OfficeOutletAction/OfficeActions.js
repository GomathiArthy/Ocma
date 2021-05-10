import axios from "../../axios/axios";


export const _addOffice = (office) => ({
    type: 'ADD_OFFICE',
    office
});

export const addOffice = (officeData = {
    officeId: '',
    openingTime: '',
    closingTime:'',
    city: '',
    state: '',
    street:'',
    country: '',
    zip: ''
    
}) => {
    return (dispatch) => {
        const office = {
            officeId: officeData.officeId,
            openingTime: officeData.openingTime,
            closingTime: officeData.closingTime,
            address:
            {
            city: officeData.city,
            state: officeData.state,
            street: officeData.street,
            country: officeData.country,
            zip:officeData.zip
            }
        };
        console.log(office);
        return axios.post("http://localhost:9191/api/ocma/Office/addOffice", office).then(() => {
            dispatch(_addOffice(office));
        }).catch(error => {
            throw (error);
        });
    };
};

 export const deleteOfficeSuccess = ({ officeid } = {}) => ({
    type:"DELETE_OFFICE" ,
    officeid
});

export const deleteOffice = ({ officeId} = {}) => {
    return (dispatch) => {
        return axios.delete(`http://localhost:9191/api/ocma/Office/deleteOffice/${officeId}`)
            .then(() => {
                dispatch(deleteOfficeSuccess({ officeId}));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const getOfficeSuccess = (office) => {
    return {
        type: "GET_OFFICE",
        payload: office
    }
};

export const getOffice = (officeId) => {
    return (dispatch) => {
        return axios.get(`http://localhost:9191/api/ocma/Office/getOffice/${officeId}`)
            .then(response => {
                dispatch(getOfficeSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const getAllOffices = (offices) => {
    return {
        type: "GET_ALL_OFFICES",
        payload: offices
    }
};
