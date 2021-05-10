import React from 'react'
import CourierValidations from './CourierValidations'
import Button from '@material-ui/core/Button';
import { FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { withRouter } from "react-router-dom";
import store from '../../../store/store';
import { addCourier } from '../../../action/CourierAction/CourierActions';
import {Link} from 'react-router-dom'


class AddCourierForm extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            courier:{
                consignmentNo: "" ,
                deliveredDate: "",
                initiatedDate: "",
                status: "",
                receiver: {
                    aadharNo: "",
                    acct: {
                      accountHolderName: "",
                      accountNo: "",
                      accountType: "",
                    },
                    addr: {
                        city: "",
                        country: "",
                        state: "",
                        street: "",
                        zip: "",
                    },
                    customerId: "",
                    firstName: "",
                    lastName: "",
                    mobileNo: "",
                  },
                  sender: {
                    aadharNo: "",
                    acct: {
                      accountHolderName: "",
                      accountNo: "",
                      accountType: "",
                    },
                    addr: {
                      city: "",
                      country: "",
                      state: "",
                      street: "",
                      zip: "",
                    },
                    customerId: "",
                    firstName: "",
                    lastName: "",
                    mobileNo: "",
                
              }        
            }           
        };
    
        
        this.validators = CourierValidations;
        this.resetValidators();
    }

    updateValidators = (fieldName, value) => {
      this.validators[fieldName].errors = [];
      this.validators[fieldName].state = value;
      this.validators[fieldName].valid = true;
      this.validators[fieldName].rules.forEach((rule) => {
          if (rule.test instanceof RegExp) {
              if (!rule.test.test(value)) {
                  this.validators[fieldName].errors.push(rule.message);
                  this.validators[fieldName].valid = false;
              }
          } else if (typeof rule.test === 'function') {
              if (!rule.test(value)) {
                  this.validators[fieldName].errors.push(rule.message);
                  this.validators[fieldName].valid = false;
              }
          }
      });
  }

  resetValidators = () => {
    Object.keys(this.validators).forEach((fieldName) => {
        this.validators[fieldName].errors = [];
        this.validators[fieldName].state = '';
        this.validators[fieldName].valid = false;
    });
    }

    displayValidationErrors = (fieldName) => {
      const validator = this.validators[fieldName];
      const result = '';
      if (validator && !validator.valid) {
          const errors = validator.errors.map((info, index) => {
              return <span style={errorStyle} key={index}>* {info}</span>;
          }); 

          return (
              <div style={errorStyle} className="col s12 row">
                  {errors}
              </div>
          ); 
      }
      return result;
  }

  isFormValid = () => {
      let status = true;
      Object.keys(this.validators).forEach((field) => {
          if (!this.validators[field].valid) {
              status = false;
          }
      });
      return status;
  }

  handleCourierChange(event, inputPropName) {
      const newState = Object.assign({}, this.state);
      newState.courier[inputPropName] = event.target.value;
      this.setState(newState);
      this.updateValidators(inputPropName, event.target.value);
  }

  handleReceiverChange(event, inputPropName) {
    const newState = Object.assign({}, this.state);  
    newState.courier.receiver[inputPropName] = event.target.value;
    this.setState(newState);
    this.updateValidators(inputPropName, event.target.value);
}

handleAccountChange1(event, inputPropName) {
    const newState = Object.assign({}, this.state);  
    newState.courier.receiver.acct[inputPropName] = event.target.value;
    this.setState(newState);
    this.updateValidators(inputPropName, event.target.value);
}

handleAddressChange1(event, inputPropName) {
    const newState = Object.assign({}, this.state);  
    newState.courier.receiver.addr[inputPropName] = event.target.value;
    this.setState(newState);
    this.updateValidators(inputPropName, event.target.value);
}

handleSenderChange(event, inputPropName) {
    const newState = Object.assign({}, this.state);
    newState.courier.sender[inputPropName] = event.target.value;
    this.setState(newState);
    this.updateValidators(inputPropName, event.target.value);
}

handleAccountChange2(event, inputPropName) {
    const newState = Object.assign({}, this.state);
    newState.courier.sender.acct[inputPropName] = event.target.value;
    this.setState(newState);
    this.updateValidators(inputPropName, event.target.value);
}

handleAddressChange2(event, inputPropName) {
    const newState = Object.assign({}, this.state);
    newState.courier.sender.addr[inputPropName] = event.target.value;
    this.setState(newState);
    this.updateValidators(inputPropName, event.target.value);
}


  onStatusChange = (e) => {
    this.setState(state => ({courier: { ...state.courier, status: e.target.value }, }));
  }

  onSubmit = event => {

      console.log("Submitted");
      console.log(this.state);
      event.preventDefault();
      this.setState(
          {
            consignmentNo: this.state.courier.consignmentNo,
            deliveredDate: this.state.courier.deliveredDate,
            initiatedDate: this.state.courier.initiatedDate,
            
            status: this.state.courier.status,

            raadharNo: this.state.courier.receiver.aadharNo,
            accountHolderName: this.state.courier.receiver.acct.accountHolderName,
            accountNo: this.state.courier.receiver.acct.accountNo,
            accountType: this.state.courier.receiver.acct.accountType,
            city: this.state.courier.receiver.addr.city,
            country: this.state.courier.receiver.addr.country,
            state: this.state.courier.receiver.addr.state,
            street: this.state.courier.receiver.addr.street,
            zip: this.state.courier.receiver.addr.zip,
            customerId: this.state.courier.receiver.customerId,
            firstName: this.state.courier.receiver.firstName,
            lastName: this.state.courier.receiver.lastName,
            mobileNo: this.state.courier.receiver.mobileNo,

            saadharNo: this.state.courier.sender.aadharNo,
            accountHolderName: this.state.courier.sender.acct.accountHolderName,
            accountNo: this.state.courier.sender.acct.accountNo,
            accountType: this.state.courier.sender.acct.accountType,
            city: this.state.courier.sender.addr.city,
            country: this.state.courier.sender.addr.country,
            state: this.state.courier.sender.addr.state,
            street: this.state.courier.sender.addr.street,
            zip: this.state.courier.sender.addr.zip,
            customerId: this.state.courier.sender.customerId,
            firstName: this.state.courier.sender.firstName,
            lastName: this.state.courier.sender.lastName,
            mobileNo: this.state.courier.sender.mobileNo,
            
          }

      )
      store().dispatch(addCourier(this.state));
      alert("Added Successfully");

  }

  render() {
    return (
        <Container style={{ backgroundColor: '#cfe8fc' }} >
            <div  >

                <form onSubmit={event => this.onSubmit(event)} >
                    <div>
                        <Box color="primary.main" p={1}> <h2>Courier Details :</h2></Box>
                    </div>
                    <br />

                    <FormControl fullWidth>
                        <TextField
                            required id="standard-number" label="Consignment Number" type="number"
                            value={this.state.courier.consignmentNo} onChange={event => this.handleCourierChange(event, 'consignmentNo')}
                            InputLabelProps={{
                                shrink: true
                            }} />
                    </FormControl>
                    {this.displayValidationErrors('consignmentNo')}
                    <br />
                    <br />

                    <FormControl fullWidth >
                        <TextField
                            required id="standard-textarea" label="Delivery Date" placeholder="Enter Delivery Date: "
                            value={this.state.courier.deliveredDate} onChange={event => this.handleCourierChange(event, 'deliveredDate')} />
                    </FormControl>
                    {this.displayValidationErrors('deliveredDate')}
                    <br />
                    <br />

                    <FormControl fullWidth >
                        <TextField
                            required id="standard-textarea" label="Initiated Date" placeholder="Enter Initiated Date: "
                            value={this.state.courier.initiatedDate} onChange={event => this.handleCourierChange(event, 'initiatedDate')} />
                    </FormControl>
                    {this.displayValidationErrors('initiatedDate')}
                    <br />
                    <br />

                    <FormControl fullWidth >
                        <TextField
                            required id="standard-textarea" label="Status" placeholder="Enter status"
                            value={this.state.courier.status} onChange={event => this.handleCourierChange(event, 'status')} />
                    </FormControl>
                    {this.displayValidationErrors('status')}
                    <br />
                    <br />

                    <div>
                        <Box color="primary.main" p={1}> <h2>Receiver Details :</h2></Box>
                    </div>
                    <br />

                    <FormControl fullWidth>
                        <TextField
                            required id="standard-number" label="Aadhar Number" type="number"
                            value={this.state.courier.receiver.aadharNo} onChange={event => this.handleReceiverChange(event, 'aadharNo')}
                            InputLabelProps={{
                                shrink: true
                            }} />
                    </FormControl>
                    {this.displayValidationErrors('aadharNo')}
                    <br />
                    <br />

                    <FormControl fullWidth>
                        <TextField
                            required id="standard-number" label="Customer ID Number" type="number"
                            value={this.state.courier.receiver.customerId} onChange={event => this.handleReceiverChange(event, 'customerId')}
                            InputLabelProps={{
                                shrink: true
                            }} />
                    </FormControl>
                    {this.displayValidationErrors('customerId')}
                    <br />
                    <br />

                    <FormControl fullWidth >
                        <TextField
                            required id="standard-textarea" label="Firstname" placeholder="Enter First Name"
                            value={this.state.courier.receiver.firstName} onChange={event => this.handleReceiverChange(event, 'firstName')} 
                            />
                    </FormControl>
                    {this.displayValidationErrors('firstName')}
                    <br />
                    <br />

                    <FormControl fullWidth >
                        <TextField
                            required id="standard-textarea" label="LastName" placeholder="Enter Last Name"
                            value={this.state.courier.receiver.lastName} onChange={event => this.handleReceiverChange(event, 'lastName')} />
                    </FormControl>
                    {this.displayValidationErrors('lastName')}
                    <br />
                    <br />

                    <FormControl fullWidth>
                        <TextField
                            required id="standard-number" label="Mobile Number" type="number"
                            value={this.state.courier.receiver.mobileNo} onChange={event => this.handleReceiverChange(event, 'mobileNo')}
                            InputLabelProps={{
                                shrink: true
                            }} />
                    </FormControl>
                    {this.displayValidationErrors('mobileNo')}
                    <br />
                    <br />

                    <div>
                        <Box color="primary.main" p={1}> <h3>Receiver Bank Details :</h3></Box>
                    </div>
                    <br />

                    <FormControl fullWidth >
                        <TextField
                            required id="standard-textarea" label="Account Holder Name: " placeholder="Enter Account Holder Name: "
                            value={this.state.courier.receiver.acct.accountHolderName} onChange={event => this.handleAccountChange1(event, 'accountHolderName')} />
                    </FormControl>
                    {this.displayValidationErrors('firstName')}
                    <br />
                    <br />

                    <FormControl fullWidth>
                        <TextField
                            required id="standard-number" label="Account Number" type="number"
                            value={this.state.courier.receiver.acct.accountNo} onChange={event => this.handleAccountChange1(event, 'accountNo')}
                            InputLabelProps={{
                                shrink: true
                            }} />
                    </FormControl>
                    {this.displayValidationErrors('accountNo')}
                    <br />
                    <br />

                    <FormControl fullWidth >
                        <TextField
                            required id="standard-textarea" label="Account Type: " placeholder="Enter Account Holder Name: "
                            value={this.state.courier.receiver.acct.accountType} onChange={event => this.handleAccountChange1(event, 'accountType')} />
                    </FormControl>
                    {this.displayValidationErrors('accountType ')}
                    <br />
                    <br />

                    <div>
                        <Box color="primary.main" p={1}> <h3>Receiver Address Details :</h3></Box>
                    </div>
                    <br />

                    <FormControl fullWidth >
                        <TextField
                            required id="standard-textarea" label="City " placeholder="Enter city: "
                            value={this.state.courier.receiver.addr.city} onChange={event => this.handleAddressChange1(event, 'city')} />
                    </FormControl>
                    {this.displayValidationErrors('city')}
                    <br />
                    <br />

                    <FormControl fullWidth >
                        <TextField
                            required id="standard-textarea" label="Country  " placeholder="Enter country : "
                            value={this.state.courier.receiver.addr.country} onChange={event => this.handleAddressChange1(event, 'country')} />
                    </FormControl>
                    {this.displayValidationErrors('country')}
                    <br />
                    <br />

                    <FormControl fullWidth >
                        <TextField
                            required id="standard-textarea" label="State" placeholder="Enter state : "
                            value={this.state.courier.receiver.addr.state} onChange={event => this.handleAddressChange1(event, 'state')} />
                    </FormControl>
                    {this.displayValidationErrors('state')}
                    <br />
                    <br />

                    <FormControl fullWidth >
                        <TextField
                            required id="standard-textarea" label="Street" placeholder="Enter street : "
                            value={this.state.courier.receiver.addr.street} onChange={event => this.handleAddressChange1(event, 'street')} />
                    </FormControl>
                    {this.displayValidationErrors('street')}
                    <br />
                    <br />

                    <FormControl fullWidth>
                        <TextField
                            required id="standard-number" label="Zip" type="number"
                            value={this.state.courier.receiver.addr.zip} onChange={event => this.handleAddressChange1(event, 'zip')}
                            InputLabelProps={{
                                shrink: true
                            }} />
                    </FormControl>
                    {this.displayValidationErrors('zip')}
                    <br />
                    <br />
                    
                    <div>
                        <Box color="primary.main" p={1}> <h2>Sender Details :</h2></Box>
                    </div>
                    <br />

                    <FormControl fullWidth>
                        <TextField
                            required id="standard-number" label="Aadhar Number" type="number"
                            value={this.state.courier.sender.aadharNo} onChange={event => this.handleSenderChange(event, 'aadharNo')}
                            InputLabelProps={{
                                shrink: true
                            }} />
                    </FormControl>
                    {this.displayValidationErrors('aadharNo')}
                    <br />
                    <br />

                    <FormControl fullWidth>
                        <TextField
                            required id="standard-number" label="Customer ID Number" type="number"
                            value={this.state.courier.sender.customerId} onChange={event => this.handleSenderChange(event, 'customerId')}
                            InputLabelProps={{
                                shrink: true
                            }} />
                    </FormControl>
                    
                    <br />
                    <br />

                    <FormControl fullWidth >
                        <TextField
                            required id="standard-textarea" label="Firstname" placeholder="Enter First Name"
                            value={this.state.courier.sender.firstName} onChange={event => this.handleSenderChange(event, 'firstName')} />
                    </FormControl>
                    {this.displayValidationErrors('firstName')}
                    <br />
                    <br />

                    <FormControl fullWidth >
                        <TextField
                            required id="standard-textarea" label="LastName" placeholder="Enter Last Name"
                            value={this.state.courier.sender.lastName} onChange={event => this.handleSenderChange(event, 'lastName')} />
                    </FormControl>
                    {this.displayValidationErrors('lastName')}
                    <br />
                    <br />

                    <FormControl fullWidth>
                        <TextField
                            required id="standard-number" label="Mobile Number" type="number"
                            value={this.state.courier.sender.mobileNo} onChange={event => this.handleSenderChange(event, 'mobileNo')}
                            InputLabelProps={{
                                shrink: true
                            }} />
                    </FormControl>
                    {this.displayValidationErrors('mobileNo')}
                    <br />
                    <br />


                    <div>
                        <Box color="primary.main" p={1}> <h3>Receiver Bank Details :</h3></Box>
                    </div>
                    <br />

                    <FormControl fullWidth >
                        <TextField
                            required id="standard-textarea" label="Account Holder Name: " placeholder="Enter Account Holder Name: "
                            value={this.state.courier.sender.acct.accountHolderName} onChange={event => this.handleAccountChange2(event, 'accountHolderName')} />
                    </FormControl>
                    {this.displayValidationErrors('accountHolderName')}
                    <br />
                    <br />

                    <FormControl fullWidth>
                        <TextField
                            required id="standard-number" label="Account Number" type="number"
                            value={this.state.courier.sender.acct.accountNo} onChange={event => this.handleAccountChange2(event, 'accountNo')}
                            InputLabelProps={{
                                shrink: true
                            }} />
                    </FormControl>
                    {this.displayValidationErrors('accountNo')}
                    <br />
                    <br />

                    <FormControl fullWidth >
                        <TextField
                            required id="standard-textarea" label="Account Type  Name: " placeholder="Enter Account Holder Name: "
                            value={this.state.courier.sender.acct.accountType} onChange={event => this.handleAccountChange2(event, 'accountType')} />
                    </FormControl>
                    {this.displayValidationErrors('accountType')}
                    <br />
                    <br />

                    <div>
                        <Box color="primary.main" p={1}> <h3>Receiver Address Details :</h3></Box>
                    </div>
                    <br />

                    <FormControl fullWidth >
                        <TextField
                            required id="standard-textarea" label="City" placeholder="Enter city: "
                            value={this.state.courier.sender.addr.city} onChange={event => this.handleAddressChange2(event, 'city')} />
                    </FormControl>
                    {this.displayValidationErrors('city')}
                    <br />
                    <br />

                    <FormControl fullWidth >
                        <TextField
                            required id="standard-textarea" label="Country" placeholder="Enter country : "
                            value={this.state.courier.sender.addr.country} onChange={event => this.handleAddressChange2(event, 'country')} />
                    </FormControl>
                    {this.displayValidationErrors('country')}
                    <br />
                    <br />

                    <FormControl fullWidth >
                        <TextField
                            required id="standard-textarea" label="State" placeholder="Enter state : "
                            value={this.state.courier.sender.addr.state} onChange={event => this.handleAddressChange2(event, 'state')} />
                    </FormControl>
                    {this.displayValidationErrors('state')}
                    <br />
                    <br />

                    <FormControl fullWidth >
                        <TextField
                            required id="standard-textarea" label="Street" placeholder="Enter street : "
                            value={this.state.courier.sender.addr.street} onChange={event => this.handleAddressChange2(event, 'street')} />
                    </FormControl>
                    {this.displayValidationErrors('street')}
                    <br />
                    <br />

                    <FormControl fullWidth>
                        <TextField
                            required id="standard-number" label="Zip" type="number"
                            value={this.state.courier.sender.addr.zip} onChange={event => this.handleAddressChange2(event, 'zip')}
                            InputLabelProps={{
                                shrink: true
                            }} />
                    </FormControl>
                    {this.displayValidationErrors('zip')}
                    <br />
                    <br />
                    
                    <Button style={style} type="submit" >Add Courier </Button>
                    <Link to={`/payment`}>
                        <Button style={style} type="submit" >Make Payment</Button>
                        </Link>
                    
                </form>
            </div>
        </Container>
    )
    }

}
export default AddCourierForm


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

const errorStyle = {
color: 'red'
};