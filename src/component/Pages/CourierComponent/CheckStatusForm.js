import React from 'react'
import Button from '@material-ui/core/Button';
import { FormControl, TextField } from '@material-ui/core';
import axios from 'axios';


class CheckStatusForm extends React.Component{ 
    constructor(props){
        super(props);

        this.state= {
         
            consignmentNo:"",
            message:"",

        }

    
    }

    CheckStatus = async (consignmentNo) => {
        console.log("Enter Consignment No", consignmentNo);
        let result = await axios.get(`http://localhost:9191/api/ocma/customer/checkStatus/${consignmentNo}`);
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
        this.CheckStatus(this.state.consignmentNo);
    }

    render(){
        return (


            <div>
                <form onSubmit={(event)=>this.handleSubmit(event)} >
                    
                <FormControl fullWidth >
                    <h1> CHECK COURIER STATUS</h1>
                            <TextField
                                required id="standard-number" label="Consignment No" placeholder="Enter Consignment No" type="number"
                                name="consignmentNo" onChange={event=>this.handleChange(event)} />
                        </FormControl>
                        <Button   type="submit" >Enter</Button>
                </form>
                

                <div>
                    <h1>{this.state.message}</h1>
                </div>

            </div>

        )
    }

}
export default CheckStatusForm;