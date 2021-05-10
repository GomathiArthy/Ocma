import axios from "../../axios/axios"

const _deletestaffMember = (staffMember) => ({

    type: 'DELETE_STAFF_MEMBER',
    staffMember
});

  export const deletestaffMember = ({ empid} = {}) => {
    return (dispatch) => {
        return axios.delete(`http://localhost:9191/api/ocma/Office/deletestaffMember/${empid}`)
            .then(() => {
                dispatch(deleteStaffMember({ officeId}));
            })
            .catch(error => {
                throw (error);
            });
    };
};


export const _getStaffMemberSuccess = (staffMember) => {
    return {
        type: "GET_STAFF_MEMBER",
        payload: staffMember
    }
};

export const getStaffMemberSuccess = (empid) => {
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

export const getAllStaffMember = (staffMember) => {
    return {
        type: "GET_ALL_STAFF_MEMBER",
        payload: staffMembers
    }
};



