import React from "react";
// import { login } from "../../../action/signup/SignUp";
// import store from '../../../store/Store';
// import User from '../wallet/User'
import store from "../../../store/store"
import { login } from "../../../action/UserAction/UserActions";


export default class EmployeeLogin extends React.Component{

   
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
        store().dispatch(login(this.state));
        // console.log(user);
        // setTimeout(this.checkLogin,1000);
        
    }
     render() {
        return(
          <div className="banner">
          <div className="container">
          <div className="w-75 mx-auto shadow p-5">
          <div className="font-weight-bold">
          <h2 className="text-center mb-4">EMPLOYEE LOGIN</h2>
          </div>
              <form>
              <div className="form-group">
                  <input 
                  className="form-control form-control-lg"
                  placeholder="Enter Employee ID"
                  name="userId"
                  type="number"
                  min={1} 
                  onChange={event=>this.handleIdChange(event)}/>
                  </div>
                  <div className="form-group">
                  <input 
                  className="form-control form-control-lg"
                  placeholder="Enter Password"
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
                    

                        </form>
                    </div>
                </div>
            </div>
        
      );
    };
}
