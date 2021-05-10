
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { FormControl, TextField } from '@material-ui/core';
import store from '../../../store/store';
import { addOffice } from '../../../action/OfficeOutletAction/OfficeActions';


export default class AddOfficeForm extends React.Component {

    constructor(props) 
    {
        super(props);
        this.state = 
        { 
            
                officeId: "",                            
                openingTime: "",
                closingTime: "",
                
                  address: {
                    city: "",
                    country: "",
                    state: "",
                    street: "",
                    zip: "",
                  }
                
         }
         this.onSubmit = this.onSubmit.bind(this);
        
    }
    
    
    handleInputChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState[inputPropName] = event.target.value;
        newState.address[inputPropName] = event.target.value;
        this.setState(newState);
        // this.updateValidators(inputPropName, event.target.value);
    }



    // onCancel = () => {
    //     //this.props.handleCancel(); 
    //     this.props.history.push('/customer');
    // }

    onSubmit = (e) => 
    {
        e.preventDefault();
        console.log("Submitted");
        alert(this.state);
        console.log(this.state);
        // this.setState
        // (
        //     {
        //       officeId: this.state.officeId,
        //       openingTime: this.state.openingTime,
        //       closingTime: this.state.closingTime,
        //       city: this.state.address.city,
        //       country: this.state.address.country,
        //       state: this.state.address.state,
        //       street: this.state.address.street,
        //       zip: this.state.address.zip,
                
        //       }
        // )
        store().dispatch(addOffice(this.state));
        alert("added successfully");
        
    }

    render() {
        return (
            <Container>
           
           <form onSubmit={this.onSubmit} >

                    <div>
                        <Box color="primary.main"> <h2> ADD OFFICE:</h2></Box>
                    </div>
                    
                    <div>
                        <Box color="primary.main"> <h2> OFFICE DETAILS :</h2></Box>
                    </div>

                
                  <FormControl fullWidth>
                    <TextField
                         required id="openingTime" label="Opening Time" 
                        value={this.state.openingTime} onChange={event => this.handleInputChange(event, 'openingTime')} />
                        </FormControl>
                    <br />


                    <FormControl fullWidth>
                    <TextField
                         required id="closingTime" label=" Office Closing Time" 
                        value={this.state.closingTime} onChange={event => this.handleInputChange(event, 'closingTime')} />
                        </FormControl>
                    <br />

                    <FormControl fullWidth>
                    <TextField
                         required id="officeId" label="Office Id" type="textnpm" 
                        value={this.state.officeid} onChange={event => this.handleInputChange(event, 'officeId')} />
                        </FormControl>
                  
                        <div>
                        <Box color="primary.main"> <h2>OFFICE OUTLET ADDRESS DETAILS :</h2></Box>
                    </div>
                    
                    <FormControl fullWidth>
                    <TextField
                         required id="street" label="Street Name" 
                        value={this.state.address.street} onChange={event => this.handleInputChange(event, 'street')} />
                        </FormControl>
                    <br />
                    
                    
                    <FormControl fullWidth>
                    <TextField
                         required id="city" label="City" 
                        value={this.state.address.city} onChange={event => this.handleInputChange(event, 'city')} />
                        </FormControl>
                    <br />
                    
                    <FormControl fullWidth>
                    <TextField
                         required id="state" label="State" 
                        value={this.state.address.state} onChange={event => this.handleInputChange(event, 'state')} />
                        </FormControl>
                    <br />

                    <FormControl fullWidth>
                    <TextField
                         required id="country" label="Country" 
                        value={this.state.address.country} onChange={event => this.handleInputChange(event, 'country')} />
                        </FormControl>
                    <br />

                    <FormControl fullWidth>
                    <TextField
                         required id="zip" label="PinCode" type="text" 
                        value={this.state.address.zip} onChange={event => this.handleInputChange(event, 'zip')} />
                        </FormControl>
                    <br/>
                   <p> 
                         </p>
    
                    {this.state.error && <b className="m-1 text-danger">{this.state.error}</b>}

                    <Button style={style} type="submit">Submit</Button>
                    <Button style={style} onChange={this.onCancel}> Cancel</Button>
              </form>
           
            </Container>
        )
    }

}

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

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
    
