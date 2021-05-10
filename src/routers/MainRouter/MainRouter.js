import UserHomePage from "../../component/Layout/UserHomePage";
import LoginForm from "../../component/Pages/LoginComponent/LoginForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ManagerLogin from "../../component/Pages/LoginComponent/ManagerLogin";
import AddUser from "../../component/Pages/LoginComponent/AddUser";
import PrivateRoute from "../PrivateRoute";
import AddCustomerForm from "../../component/Pages/CustomerComponent/AddCustomerForm"
import AddCourierForm from "../../component/Pages/CourierComponent/AddCourierForm"
import CheckStatusForm from "../../component/Pages/CourierComponent/CheckStatusForm";
import AddComplaintForm from "../../component/Pages/CustomerComponent/AddComplaint"
import OfficeList from "../../component/Pages/OfficeComponent/OfficeList";
import UserDashBoard from "../../component/Bootstrap/UserDashBoard";
import OfficeCheckForm from "../../component/Pages/OfficeComponent/OfficeCheckForm"
import PaymentFormCash from "../../component/Pages/PaymentComponent/PaymentFormCash";
import PaymentForm from "../../component/Pages/PaymentComponent/PaymentForm";
import ManagerHomePage from "../../component/Layout/ManagerHomePage";
import AddOfficeForm from "../../component/Pages/OfficeComponent/AddOfficeForm"
import AddStaffMember from "../../component/Pages/ManagerComponent/AddStaffMember"
import CourierDashBoard from "../../component/Pages/CourierComponent/CourierDashboard";
import CourierRej from "../../component/Pages/CourierComponent/CourierRej"
import CourierClose from "../../component/Pages/CourierComponent/CourierClose"
import CourierInit from "../../component/Pages/CourierComponent/CourierInit"
import Courier from "../../component/Pages/CourierComponent/Courier"

const MainRouter = () => (
    
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path={"/"} component={LoginForm} />
                <Route exact path={`/employee`} component={ManagerLogin} />
                <Route exact path={`/add-user`} component = {AddUser}/>
                <Route exact = {true} path ="/customer" component = {UserHomePage}></Route>
                <Route path ="/add-customer" component = {AddCustomerForm}></Route>
                <Route path ="/add-courier"  component = {AddCourierForm}></Route>
                <Route path ="/check-status"  component = {CheckStatusForm}></Route>
                <Route path ="/add-complaint"  component = {AddComplaintForm}></Route>
                <Route path = {`/getOffices`}  component = {UserDashBoard}></Route>
                <Route path = {`/get`}  component = {OfficeCheckForm}> </Route>
                <Route path = {`/payment`} component = {PaymentForm}></Route>
                <Route path = {`/paymentbycash`} component = {PaymentFormCash}></Route>
                <Route path = {`/emp`} component = {ManagerHomePage}></Route>
                <Route path ={`/add-office`} component = {AddOfficeForm}></Route>
                <Route path ={`/add-staff`} component = {AddStaffMember}></Route>
                <Route path = {`/check`} component = {CourierDashBoard}></Route>
                <Route path = {`/checkStatus`} component = {Courier}></Route>
                <Route path = {`/initiateShipment`} component = {CourierInit}></Route>
                <Route path = {`/rejectShipment`} component = {CourierRej}></Route>
                <Route path = {`/closeShipment`} component = {CourierClose}></Route>
                

                </Switch>
        </div>
    </BrowserRouter>
);

export default MainRouter;

                
                
