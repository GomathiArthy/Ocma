import axios from "../../axios/axios";


const _addCustomer = (customer) => ({
    type: 'ADD_CUSTOMER',
    customer
});

export const addCustomer = (customerData = {
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
        const customer = {
            firstName : customerData.firstName,
            lastName: customerData.lastName,
            mobileNo: customerData.mobileNo,
            aadharNo: customerData.aadharNo,
            addr: {
                street: customerData.street,
                city: customerData.city,    
                state: customerData.state,
                country: customerData.country,
                zip: customerData.zip
                },
            acct:
            {
            accountHoldername: customerData.accountHoldername,
            accountNo: customerData.accountNo,
            accountType: customerData.accountType,
            }
           
        };
        
        console.log(customer);
        return axios.post("http://localhost:9191/api/ocma/customer/add-customer", customer).then(() => {dispatch(_addCustomer(customer));
    }).catch(error =>{alert (error.response.data);});
        
    };
};
