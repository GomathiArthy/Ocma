import { BrowserRouter, Route, Switch } from "react-router-dom";
//import LoginPage from "../containers/common/LoginPage";
import HomePage from "../containers/common/HomePage";
// import TenantDashBoard from "../containers/modules/tenant/TenantDashBoard";
// import AddTenant from "../containers/modules/tenant/AddTenant";
// import UpdateTenant from "../containers/modules/tenant/UpdateTenant";
// import Tenant from "../containers/modules/tenant/Tenant";
import AboutUs from "../containers/common/AboutUs";
import ContactUs from "../containers/common/ContactUs";
import Login from "../containers/common/Login";

const HomeRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path={`/homepage`} component={HomePage} />
                <Route path={`/aboutus`} component={AboutUs} />
                <Route path={`/contactus`} component={ContactUs} />
                <Route path={`/courier`} component={CourierDashBoard} />
                <Route path={`/addCourier`} component={AddCourier} />
                <Route path={`/checkStatus/:courierId`} component={Courier} />
               
            </Switch>
        </div>
    </BrowserRouter>
);

export default HomeRouter;