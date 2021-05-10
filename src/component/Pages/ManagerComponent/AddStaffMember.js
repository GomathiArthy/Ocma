
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
import { addStaffMember } from '../../../action/ManagerAction/addstaffaction';


export default class AddStaffMember extends React.Component {

    constructor(props) 
    {
        super(props);
        this.state = 
        {
            
                empid: "3",                            
                role: "",
                name: "",
                
                  address: {
                    city: "",
                    country: "",
                    state: "",
                    street: "",
                    zip: "",
                  },
                
                  manager: {
                    managerid: "",
                  },
                
                  officeOutlet: {
                    closingTime: "",
                    officeId: "",
                    officeid: "",
                    openingTime: "",
                
                    address: {
                      city: "",
                      country: "",
                      state: "",
                      street: "",
                      zip: "",
                    },
                
                   
                  },
                }
            
        
    }
    
    
    handleInputChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState[inputPropName] = event.target.value;
        newState.address[inputPropName] = event.target.value;
        newState.officeOutlet[inputPropName] = event.target.value;
        newState.officeOutlet.address[inputPropName] = event.target.value;
        this.setState(newState);
        // this.updateValidators(inputPropName, event.target.value);
    }

    handleInputIdChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
       newState.manager[inputPropName] = event.target.value;
        this.setState(newState);
        // this.updateValidators(inputPropName, event.target.value);
    }
   



    // onCancel = () => {
    //     //this.props.handleCancel(); 
    //     this.props.history.push('/customer');
    // }

    onSubmit = (event) => 
    {
        event.preventDefault();
        console.log("Submitted");
        alert(this.state);
        console.log(this.state);
        this.setState
        (
            {
              empid: this.state.empid,                        
              role: this.state.role,
              name: this.state.name,
              city: this.state.address.city,
              country: this.state.address.country,
              state: this.state.address.state,
              street: this.state.address.street,
              zip: this.state.address.zip,
              managerid: this.state.manager.managerid,
              city: this.state.officeOutlet.address.city,
              country: this.state.officeOutlet.address.country,
              state: this.state.officeOutlet.address.state,
              street: this.state.officeOutlet.address.street,
              zip: this.state.officeOutlet.address.zip,
              closingTime: this.state.officeOutlet.closingTime,
              officeid: this.state.officeOutlet.officeid,
              openingTime: this.state.officeOutlet.openingTime,
                
              }
        )
        store().dispatch(addStaffMember(this.state));
        alert("added successfully");
        
    }

    render() {
        return (
            <Container>
           
           <form onSubmit={this.onSubmit} >

                    <div>
                        <Box color="primary.main"> <h2> ADD STAFF:</h2></Box>
                    </div>
                    
                    <FormControl fullWidth>
                    <TextField
                         required id="name" label=" Name" placeholder=" Enter First Name"
                        value={this.state.name} onChange={event => this.handleInputChange(event, 'name')} />
                        </FormControl>
                    <br />

                    <FormControl fullWidth>
                    <TextField
                         required id="role" label="Role" placeholder="Enter Role"
                        value={this.state.role} onChange={event => this.handleInputChange(event, 'role')} />
                        </FormControl>
                    <br />
                  

                    <div>
                        <Box color="primary.main"> <h2>STAFF ADDRESS DETAILS :</h2></Box>
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
                    <br />

                    <FormControl fullWidth>
                    <TextField
                         required id="managerId" label="Manager Id" type="text" 
                        value={this.state.manager.managerid} onChange={event => this.handleInputIdChange(event, 'managerid')} />
                        </FormControl>
                    <br />


                    <div>
                        <Box color="primary.main"> <h2>OFFICE OUTLET ADDRESS DETAILS :</h2></Box>
                    </div>
                    
                    <FormControl fullWidth>
                    <TextField
                         required id="street" label="Street Name" 
                        value={this.state.officeOutlet.address.street} onChange={event => this.handleInputChange(event, 'street')} />
                        </FormControl>
                    <br />
                    
                    
                    <FormControl fullWidth>
                    <TextField
                         required id="city" label="City" 
                        value={this.state.officeOutlet.address.city} onChange={event => this.handleInputChange(event, 'city')} />
                        </FormControl>
                    <br />
                    
                    <FormControl fullWidth>
                    <TextField
                         required id="state" label="State" 
                        value={this.state.officeOutlet.address.state} onChange={event => this.handleInputChange(event, 'state')} />
                        </FormControl>
                    <br />

                    <FormControl fullWidth>
                    <TextField
                         required id="country" label="Country" 
                        value={this.state.officeOutlet.address.country} onChange={event => this.handleInputChange(event, 'country')} />
                        </FormControl>
                    <br />

                    <FormControl fullWidth>
                    <TextField
                         required id="zip" label="PinCode" type="text" 
                        value={this.state.officeOutlet.address.zip} onChange={event => this.handleInputChange(event, 'zip')} />
                        </FormControl>
                    <br />

                    <div>
                        <Box color="primary.main"> <h2> OFFICE DETAILS :</h2></Box>
                    </div>

                
                  <FormControl fullWidth>
                    <TextField
                         required id="openingTime" label="Opening Time" 
                        value={this.state.officeOutlet.openingTime} onChange={event => this.handleInputChange(event, 'openingTime')} />
                        </FormControl>
                    <br />


                    <FormControl fullWidth>
                    <TextField
                         required id="closingTime" label=" Office Closing Time" 
                        value={this.state.officeOutlet.closingTime} onChange={event => this.handleInputChange(event, 'closingTime')} />
                        </FormControl>
                    <br />

                    <FormControl fullWidth>
                    <TextField
                         required id="officeid" label="Office Id" type="textnpm" 
                        value={this.state.officeOutlet.officeid} onChange={event => this.handleInputChange(event, 'officeid')} />
                        </FormControl>
                    <br />
                    
                   
                   
                   
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
    
