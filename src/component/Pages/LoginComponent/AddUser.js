import React from 'react';
import {createAccount} from '../../../action/UserAction/UserActions';
import store from '../../../store/store';
import { useHistory, useParams } from 'react-router';



export default class AddUser extends React.Component{

    constructor(props){
        super(props);
        this.state={
          user:{
            password: "",
            userId: "0",
            }
        }
       
    
    
   
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }

       handleChange = event =>{
        let nam = event.target.name;
        let val = event.target.value;
        // this.updateValidators(nam,event.target.value);
        this.setState({user:{...this.state.user,[nam]:val}});
    }

    handleSubmit = event =>{
        event.preventDefault();
        store().dispatch(createAccount(this.state.user));
        
    }
     
    render() {
        return(
           
            <div className="w-75 mx-auto shadow p-5">
            <div className="font-weight-bold">
            <h2 className="text-center mb-4">CREATE USER ACCOUNT</h2>
            </div>
                 <form onSubmit={event=>this.handleSubmit(event)}>
                    <div className="form-group">
                    <input 
                    id="userId"
                    className="form-control form-control-lg"
                    placeholder="Unique User ID"
                    name="userId"
                    type="number"
                    min={1} 
                    onChange={(event)=>this.handleChange(event)}/>
                    </div>
                    <div className="form-group">
                    <input 
                    id="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    type="password"
                    onChange={(event)=>this.handleChange(event)}/>
                    </div>
                    <div className="row">
                    <div className="input-field col s12 signup-btn">
                    <button className={`btn btn-primary btn-block` } type="submit">
                     SignUp
                    </button>
                    </div>
                    </div>
                    </form>
                    </div>
                   
                    
        );
    }
}
