import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllOffices, getOfficeSuccess } from "../../../action/OfficeOutletAction/OfficeActions";
import axios from 'axios';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { deleteOffice } from "../../../action/OfficeOutletAction/OfficeActions";
import { useHistory } from 'react-router';
import {deleteOfficeSuccess } from "../../../action/OfficeOutletAction/OfficeActions";
import {getOffice} from "../../../action/OfficeOutletAction/OfficeActions";
import { render } from "@testing-library/react";

const OfficeList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const offices = useSelector((state) => state.allOffices.offices);

  const fetchOffices = async () => {
    const result = await axios.get('http://localhost:9191/api/ocma/Office/getAllOfficeData').catch((err) => {
      console.log("Error ", err);
    });
    dispatch(getAllOffices(result.data))
  };

  useEffect(() => {
    fetchOffices();
  }, []);

  console.log("Offices :", offices);
//   const getOfficeById = async (OfficeId) => {
//     await axios.get(`http://localhost:9191/api/Office/deleteOffice/${officeId}`).catch((err) => { console.log("Error", err); });
//     dispatch(getOffice(officeId));
//     alert("Fetched Successfully");
//     history.push('/Office');
// }
const getOffficeById = async (officeId) => {
  await axios.get(`http://localhost:9191/api/ocma/Office/deleteOffice/${officeId}`).catch((err) => { console.log("Error", err); });
  dispatch(getOfficeSuccess(officeId));
  alert("Deleted Successfully");
  fetchOffices();
  history.push('/Office');

  const deleteOfficeById = async (officeId) => {
    await axios.delete(`http://localhost:9191/api/ocma/Office/deleteOffice/${officeId}`).catch((err) => { console.log("Error", err); });
    dispatch(deleteOfficeSuccess(officeId));
    alert("Deleted Successfully");
    fetchOffices();
    history.push('/Office');
  }

  return (
    <div className="">
      <Grid>
        <TableContainer component={Paper}>
          <Table border="1" bgcolor="white" class="table  table-bordered table-hover">
            <TableHead className="thead-dark">
              <TableRow>
                <StyledTableCell>Office Id</StyledTableCell>
                <StyledTableCell>Office Opening Time</StyledTableCell>
                <StyledTableCell>Office Closing Time</StyledTableCell>
                <StyledTableCell>City</StyledTableCell>
                <StyledTableCell>State</StyledTableCell>
                <StyledTableCell>Street</StyledTableCell>
                <StyledTableCell>Country</StyledTableCell>
                <StyledTableCell>Zip</StyledTableCell>


                <StyledTableCell>View</StyledTableCell>
                <StyledTableCell>Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                offices.map((office) => {
                  const { officeId, openingTime, closingTime, ...address } = office;
                  return (
                    <StyledTableRow key={officeId}>
                      <td>{office.officeId}</td>
                      <td>{office.openingTime}</td>
                      <td>{office.closingTime}</td>
                      <td>{office.address.city} </td>
                      <td>{office.address.state}</td>
                      <td>{office.address.street}</td>
                      <td>{office.address.country}</td>
                      <td>{office.address.zip}</td>
                      <td><Link to={`/checkOffice/${officeId}`}><Button color="primary" variant="contained" className="btn btn-info" onClick={() => getOffice(officeId)}> VIEW </Button></Link></td>
                      <td><Link to={`/checkOffice/${officeId}`}><Button color="secondary" variant="contained" className="btn btn-secondary">Delete</Button></Link></td>
                    </StyledTableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

    </div>
  );
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
}
export default OfficeList 
