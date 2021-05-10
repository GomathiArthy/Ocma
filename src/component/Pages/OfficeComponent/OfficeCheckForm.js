import React from 'react'
import Button from '@material-ui/core/Button';
import { FormControl, TextField } from '@material-ui/core';
import axios from 'axios'


 class OfficeCheckForm extends React.Component{ 
    constructor(props){
        super(props);

        this.state= {
         
            officeId:"",
            message:"",

        }

    
    }

    CheckOffice = async (officeId) => {
        console.log("this is office Id", officeId);
        let result = await axios.get(`http://localhost:9191/api/ocma/Office/CheckOfficeAvailability/${officeId}`);
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
        this.CheckOffice(this.state.officeId);
    }

    render(){
        return (


            <div>
                <form onSubmit={(event)=>this.handleSubmit(event)} >
                    
                <FormControl fullWidth >
                            <TextField
                                required id="standard-number" label="Office Id" placeholder="Enter Office Id" type="number"
                                name="officeId" onChange={event=>this.handleChange(event)} />
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
export default OfficeCheckForm;