// import React from 'react';
// import { connect } from "react-redux";
// import {addOffice} from "../../action/OfficeActions"
// import AddOfficeForm from "./AddOfficeForm";
// import Box from '@material-ui/core/Box';
// import { Paper } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// const AddOffice = (props) => (
//     <div >
//     <div className={useStyles.root}>
//          <Box color="white" bgcolor="palevioletred" p={1}> <h2>Add Office</h2></Box>
//          <Paper elevation={3} >
//         <AddOfficeForm 
//              onSubmitPayment={(state) => {
//                  props.dispatch(addOffice(state));
//                  alert("Added Successfully");
//              }} />
//              </Paper>
        
//     </div>
//     </div>
// );
// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       '& > *': {
//         margin: theme.spacing(1),
//         width: theme.spacing(16),
//         height: theme.spacing(16),
//       },
//     },
//   }));
// export default connect()(AddOffice);