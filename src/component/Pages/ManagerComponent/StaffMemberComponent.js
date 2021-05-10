import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


const StaffMemberComponent = () => {
    const staffMember = useSelector((state) => state.StaffMemberReducer.staffMember);
if(office!=null){
    const renderList = staffMember.map((staffMember) => {
        const {empid, role, name} = staffMember;
        return(
            <div key={empid} className = "container" >
                <Link to={`/manager/get-staff/${empid}`}>
                     
                     <div class = "row-sm-4">
                               <div  class="list-group-item active">Employee ID:{empid}</div> <br/>
                               <div class="list-group-item list-group-item-warning">Role:{role}</div> <br/>
                               <div class="list-group-item list-group-item-danger">Name:{name}</div> <br/>

                               <br/> <br/>
                     </div>
                              
                </Link>
            </div>
        );
    });
    return <>{renderList}</>;
} else {
    return <p> please wait </p>
}
};

export default StaffMemberComponent;