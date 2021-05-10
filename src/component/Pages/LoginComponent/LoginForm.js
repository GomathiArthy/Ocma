import React from "react";
// import { login } from "../../../action/signup/SignUp";
import {Link} from 'react-router-dom';
// import store from '../../../store/Store';
// import User from '../wallet/User'
import user from '../../../component/Pages/LoginComponent/user'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import AddUser from './AddUser'
import store from "../../../store/store"
import { login } from "../../../action/UserAction/UserActions";
import axios from '../../../axios/axios'


export default class LoginForm extends React.Component{

   
    constructor(props){
        super(props);

        this.state={
              userId:"",
              password:"",
          
        }
    }
    handleIdChange = event => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({...this.state, [nam]:val});
    }
    handleChange = event => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({...this.state, [nam]:val});
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        this.validateLogin(this.state);
    
        
    }
                    
    validateLogin = async (user) => {
        console.log("this is validateLogin()", user);
        let result = await axios.post(`http://localhost:9191/api/ocma/login/user-login`, user)
        console.log("result data", result.data)
        alert(result.data)
        if (result.data === "User Logged In Successfuly")
            this.props.history.push('/customer');
        else {            
            alert("Login Failed! User Name and Password does not Match");
                                 
        }
    }    
     render() {
         
        return(
          <div className="banner">
          <div className="container" >
    
          
              <Header/>
              <br/>
          <h2 className="text-center mb-4">USER LOGIN</h2>
              <form>
              <div className="form-group">
                  <input 
                  className="form-control form-control-lg"
                  placeholder="Enter your User ID"
                  name="userId"
                  type="number"
                  min={1} 
                  onChange={event=>this.handleIdChange(event)}/>
                  </div>
                  <div className="form-group">
                  <input 
                  className="form-control form-control-lg"
                  placeholder="Enter your Password"
                  name="password"
                  type="password"
                  onChange={event=>this.handleChange(event)}/>
                  </div>
                    <div>
                    <div className="row">
                    <div className="input-field col s12 signup-btn">
                    <button className="btn btn-primary btn-block" type="submit" onClick={event=>this.handleSubmit(event)}>
                     Login
                    </button>
                    <p>{this.props.message}</p>
                    
                    </div>
                    </div>
                    </div>
                    <br/>
                    <div className="row">
                    <div className="input-field col s12 signup-btn">
                     <Link to={`/add-user`}> 
                        <button type="button" className="btn btn-primary btn-block">SignUp</button>
                     </Link> 
                    </div>
                    </div>
                    {/* <br/>
                    <h3 className="text-center">OR</h3> */}
                    {/* <br/>
                    <div className="row">
                    <div className="input-field col s12 signup-btn">
                    <Link to={`/login/managerlogin`}> 
                        <button className="btn btn-primary btn-block" type="button" onClick>Manager Login</button>
                     </Link>    
                    </div>
                    </div> */}
                    <br/>
                    <div className="row">
                    <div className="input-field col s12 signup-btn">
                    <Link to={`/employee`}> 
                        <button type="button" className="btn btn-primary btn-block" onClick>Employee Login</button>
                    </Link> 
                    </div>
                    </div>
                     </form>
                     <br/>
                        <Footer/>
                    </div>
                </div>
            
        
      );
    };
}


