import axios from '../../axios/axios'
import { CourierActionTypes } from "./CourierActionTypes";


const _addCourier = (courier) => ({
    type: CourierActionTypes.ADD_COURIER,
    courier
});

export const addCourier = (courierData = {
                consignmentNo: "" ,
                deliveredDate: "",
                initiatedDate: "",
                status: "",
                 

                    raadharNo: "",

                
                  accountHolderName: "",
                  accountNo: "",
                  accountType: "",
                    
                
                    city: "",
                    country: "",
                    state: "",
                    street: "",
                    zip: "",
                 
                             
                  customerId: "",
                  firstName: "",
                  lastName: "",
                  mobileNo: "",
                

        

                  saadharNo: "",

             
                  accountHolderName: "",
                  accountNo: "",
                  accountType: "",
             
             
                    city: "",
                    country: "",
                    state: "",
                    street: "",
                    zip: "",
         

                  customerId: "",
                  firstName: "",
                  lastName: "",
                  mobileNo: "",
         
                  

}) => {
    return (dispatch) => {
        const courier = {
           
            consignmentNo: courierData.consignmentNo,
            deliveredDate: courierData.deliveredDate,
            initiatedDate: courierData.initiatedDate,
            status: courierData.status,
            
            receiver:
            {
                aadharNo: courierData.raadharNo,
                acct:{
                    accountHolderName: courierData.accountHolderName,
                    accountNo: courierData.accountNo,
                    accountType: courierData.accountType,

                },

                addr:{
                    city: courierData.city,
                    country: courierData.country,
                    state: courierData.state,
                    street: courierData.street,
                    zip: courierData.zip,

                },

            customerId: courierData.customerId,
            firstName: courierData.firstName,
            lastName: courierData.lastName,
            mobileNo: courierData.mobileNo,
            },
            sender:
            {
                aadharNo: courierData.saadharNo,
                acct:{
                    accountHolderName: courierData.accountHolderName,
                    accountNo: courierData.accountNo,
                    accountType: courierData.accountType,

                },

                addr:{
                    city: courierData.city,
                    country: courierData.country,
                    state: courierData.state,
                    street: courierData.street,
                    zip: courierData.zip,

                },


            customerId: courierData.customerId,
            firstName: courierData.firstName,
            lastName: courierData.lastName,
            mobileNo: courierData.mobileNo,
            
            
            
            }
        };
        console.log(courier);
        return axios.post("http://localhost:9191/api/ocma/addCourier",courier).then(() => {
            dispatch(_addCourier(courier));
        }).catch(error => {
            alert (error.response);
        });
    };
};

export const _getCourier = (courier) => {
    return {
        type: CourierActionTypes.GET_COURIER,
        payload: courier
    }
};

export const getCourier = (courierId) => {
    return (dispatch) => {
        return axios.get(`/checkStatus/${courierId}`)
            .then(response => {
                dispatch(_getCourier(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const getCourierI = (courierId) => {
    return (dispatch) => {
        return axios.get(`/initiateShipment/${courierId}`)
            .then(response => {
                dispatch(_getCourier(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const getCourierR = (courierId) => {
    return (dispatch) => {
        return axios.get(`/rejectShipment/${courierId}`)
            .then(response => {
                dispatch(_getCourier(response))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const getCourierC = (courierId) => {
    return (dispatch) => {
        return axios.get(`/closeShipment/${courierId}`)
            .then(response => {
                dispatch(_getCourier(response))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const getAllCouriers = (couriers) => {
    return {
        type: CourierActionTypes.GET_ALL_COURIER,
        payload: couriers
    }
};



