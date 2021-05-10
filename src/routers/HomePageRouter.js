


import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";




import UserDashBoard from '../component/Bootstrap/UserDashBoard';

import AddOfficeForm from '../component/Pages/OfficeComponent/AddOfficeForm';
import Office from '../component/Pages/OfficeComponent/Office';


const HomePageRouter = () =>  {
    return(
        <BrowserRouter>
            <Switch>
            <Route path ={`/office`} component = {UserDashBoard}></Route>
            <Route path ={`/addOffice`} component={AddOfficeForm}></Route>
            <Route path ={`/checkOffice/:officeid`} component ={Office}></Route>
        
            {/* <PrivateRoute path="/" component={CustomerRouters}  exact={true} /> */}

            </Switch>
        </BrowserRouter>
    );
}

export default HomePageRouter;