import AddUser from '../component/Pages/LoginComponent/AddUser';
import LoginForm from '../component/Pages/LoginComponent/LoginForm';
import Redirected from '../component/Redirected'

import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import ManagerLogin from '../component/Pages/LoginComponent/ManagerLogin';
import EmployeeLogin from '../component/Pages/LoginComponent/EmployeeLogin';
import UserDashBoard from '../component/Bootstrap/UserDashBoard'
import AddOfficeForm from '../component/Pages/OfficeComponent/AddOfficeForm'
import OfficeComponent from '../component/Pages/OfficeComponent/OfficeComponent';
import Office from '../component/Pages/OfficeComponent/Office';

const LoginRouters = () =>  {
    return(
        <BrowserRouter>
            <Switch>
            <Route path ={`/login/user-login`} component = {LoginForm}></Route>
            <Route path ={`/login/add-user`} component={AddUser}></Route>
            <Route path ={`/login/managerlogin`} component ={ManagerLogin}></Route>
            <Route path ={`/login/employeelogin`} component ={EmployeeLogin}></Route>
            <Route exact path={`/login/Manager`} component={UserDashBoard} />
            <Route exact path={`/login/Manager/AddOffice`} component={AddOfficeForm} /><Route/>
            <Route exact path={`/login/Manager/getOfficeById/:officeId`} component={Office} /><Route/>

            {/* <PrivateRoute path="/" component={CustomerRouters}  exact={true} /> */}

            </Switch>
        </BrowserRouter>
    );
}

export default LoginRouters;