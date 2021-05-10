import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'



const OfficeComponent = () => {
    const office = useSelector((state) => state.OfficeOutletReducer.office);
if(office!=null){
    const renderList = office.map((office) => {
        const {officeid, openingTime, closingTime} = office;
        return(
            <div key={officeid} className = "container" >
                <Link to={`/Office/getOffice/${officeid}`}>
                     
                     <div class = "row-sm-4">
                               <div  class="list-group-item active">OfficeId:{officeid}</div> <br/>
                               <div class="list-group-item list-group-item-warning">openingTime:{openingTime}</div> <br/>
                               <div class="list-group-item list-group-item-danger">closingTime:{closingTime}</div> <br/>

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

export default OfficeComponent;