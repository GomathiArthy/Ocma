import React from 'react';
import { connect } from "react-redux";
import { addCourier } from '../../../action/CourierAction/CourierActions';
import AddCourierForm from './AddCourierForm'
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const AddCourier = (props) => (
    <div >
    <div className={useStyles.root}>
         <Box color="white" bgcolor="palevioletred" p={1}> <h2>Add Courier</h2></Box>
         <Paper elevation={3} >
        <AddCourierForm
             onSubmitCourier={(state) => {
                 props.dispatch(addCourier(state));
                 alert("Added Successfully");
                 props.history.push('/courier');
             }} />
             </Paper>
        
    </div>
    </div>
);
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));
export default connect()(AddCourier);