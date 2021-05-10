import React from 'react'
// import CourierValidations from './CourierValidations'
import Button from '@material-ui/core/Button';
import { FormControl, TextField } from '@material-ui/core';
import axios from 'axios';
import {Link} from "react-router-dom";
// import { makeStyles } from '@material-ui/core/styles';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormLabel from '@material-ui/core/FormLabel';
// import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';
// import { withRouter } from "react-router-dom";

class PaymentFormCash extends React.Component{ 
    constructor(props){
        super(props);

        this.state= {
         
            courierid:"",
            message:"",

        }

    
    }

    paymentCheck = async (courierid) => {
        console.log("this is courier ID", courierid);
        let result = await axios.get(`http://localhost:9191/api/ocma/byCash/${courierid}`);
        console.log("result data", result.data);
            this.setState({message:result.data});

    }

    handleChange = event => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({...this.state,[nam]:val});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.paymentCheck(this.state.courierid);
    }

    render(){
        return (


            <div>
                <form onSubmit={(event)=>this.handleSubmit(event)} >
                    
                <FormControl fullWidth ><h1>CASH PAYMENT</h1>
                            <TextField
                                required id="standard-number" label="Courier ID Number" placeholder="Enter courier ID" type="number"
                                name="courierid" onChange={event=>this.handleChange(event)} />
                        </FormControl>
                        <Button  style={style} type="submit" >Enter</Button>
                        
                </form>
                

                <div>
                    <h1>{this.state.message}</h1>
                </div>

            </div>

        )
    }

}
export default PaymentFormCash;
const style = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginLeft: "10px",
    };