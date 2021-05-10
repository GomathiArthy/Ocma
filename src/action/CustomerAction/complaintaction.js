import axios from "../../axios/axios";

const _addComplaint = (complaint) => ({

    type: 'ADD_COMPLAINT',
    complaint
});

export const addComplaint = (complaintData = {

    complaintId: "",
    consignmentNo: "",
    detailDescription: "",
    shortDescription: "",
    customerId: "",
    firstName : "",
    lastName: "",
    mobileNo: "",
    aadharNo: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    accountHoldername: "",
    accountNo: "",
    accountType: ""
    
}) => {
    return (dispatch) => {
        const complaint = {
            complaintId: complaintData.complaintId,
            consignmentNo: complaintData.consignmentNo,
            detailDescription: complaintData.detailDescription,
            shortDescription: complaintData.shortDescription,
            customer: {
            customerId: complaintData.customerId,
            firstName : complaintData.firstName,
            lastName: complaintData.lastName,
            mobileNo: complaintData.mobileNo,
            aadharNo: complaintData.aadharNo,
            },
            addr: {
                street: complaintData.street,
                city: complaintData.city,    
                state: complaintData.state,
                country: complaintData.country,
                zip: complaintData.zip
                },
            acct:
            {
            accountHoldername: complaintData.accountHoldername,
            accountNo: complaintData.accountNo,
            accountType: complaintData.accountType,
            }
        };
        console.log(complaint);
        return axios.post("http://localhost:9191/api/ocma/customer/add-complaint", complaint).then(() => {dispatch(_addComplaint(complaint));
    }).catch(error =>{alert (error.response.data);});
        
    };
};


