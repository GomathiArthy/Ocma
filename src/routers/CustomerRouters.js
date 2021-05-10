import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import PrivateRoute from '../routers/PrivateRoute';



import AddOfficeForm from "../component/Pages/OfficeComponent/AddOfficeForm"
import UserDashBoard from "../component/Bootstrap/UserDashBoard";
import Office from "../component/Pages/OfficeComponent/Office"


const CustomerRouters = () =>  {
    return(
        <BrowserRouter>
        <div className='container'>
            <Switch>
             {/* <Route exact path={`login/Manager`} component={UserDashBoard} />
            <Route exact path={`Manager/addOffice`} component={AddOfficeForm} /> */}
            <Route exact path ={`Manager/getOfficeById/:officeId`} component={Office} />
            {/* <PrivateRoute path="/" component={CustomerRouters}  exact={true} /> */}

            </Switch>
            </div>
        </BrowserRouter>
    );
}

export default CustomerRouters;