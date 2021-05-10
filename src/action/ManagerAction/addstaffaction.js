import axios from "../../axios/axios"

const _addStaffMember = (staffMember) => ({

    type: 'ADD_STAFF',
    staffMember
});

export const addStaffMember = (staffMemberData = {
  
    
        empid: "",                        
        role: "",
        name: "",
        city: "",
        country: "",
        state: "",
        street: "",
        zip: "",
        managerid: "",
        city: "",
        country: "",
        state: "",
        street: "",
        zip: "",
        closingTime: "",
        officeId: "",
        officeid: "",
        openingTime: ""   
      }) => {
        return (dispatch) => {
            const staffMember = {
                empid: staffMemberData.empid,                        
                role: staffMemberData.role,
                name: staffMemberData.name,
                  address: {
                    city: staffMemberData.city,
                    street: staffMemberData.street,
                    state: staffMemberData.state,
                    country: staffMemberData.country,
                    zip: staffMemberData.zip,
                  },
                  manager: {
                    managerid: staffMemberData.managerid,
                  },
                
                  officeOutlet: {
                    closingTime: staffMemberData.closingTime ,
                    officeId: staffMemberData.officeId,
                    officeid: staffMemberData.officeid,
                    openingTime: staffMemberData.openingTime,
                
                    address: {
                      city: staffMemberData.city,
                      street: staffMemberData.street,
                      state: staffMemberData.state,
                      country: staffMemberData.country,
                      zip: staffMemberData.zip,
                    },
                
                   
                  },
                }
                
       
          console.log(staffMember);
           return axios.post("http://localhost:9191/api/ocma/manager/add-staff", staffMember).then(() =>{dispatch(_addStaffMember(staffMember));
         }).catch(error =>{alert (error.response.data);
       });
        
       };
    };
 
  //   const deleteStaffMember = ({ empId } = {}) => ({
  //     type:"DELETE_OFFICE" ,
  //     empid
  // });
  