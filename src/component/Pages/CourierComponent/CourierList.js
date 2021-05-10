import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios'
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { getAllCouriers } from "../../../action/CourierAction/CourierActions";
//import { useHistory } from 'react-router';

const CourierList = () => {
  const dispatch = useDispatch();
 // const history = useHistory();
 const couriers = useSelector((state) => state.allCouriers.couriers);

  const fetchCourier = async () => {
    const result = await axios.get('http://localhost:9191/api/ocma/getAllCourier').catch((err) => {
      console.log("Error ", err);
    });
    dispatch(getAllCouriers(result.data))
  };

  useEffect(() => {
    fetchCourier();
  }, []);

  console.log("Couriers :", couriers);


  return (
    <div className="">
      <Grid>
        <TableContainer component={Paper}>
          <Table border="1" bgcolor="white" class="table  table-bordered table-hover">
            <TableHead className="thead-dark">
              <TableRow>
                
                <StyledTableCell>Courier Id</StyledTableCell>
                <StyledTableCell>Consignment Number</StyledTableCell>
                <StyledTableCell>Delivered Date </StyledTableCell>
                <StyledTableCell>Initiated Date </StyledTableCell>
                {/* <StyledTableCell>Update</StyledTableCell>
                <StyledTableCell>Delete</StyledTableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {
                couriers.map((courier) => {
                  const { courierid, consignmentNo, deliveredDate , initiatedDate } = courier;
                  console.log("Couriers :", courier);
                  return (
                    <StyledTableRow key={courierid}>
                      <td>{courierid}</td>
                      <td>{consignmentNo}</td>
                      <td>{deliveredDate}</td>
                      <td>{initiatedDate}</td>
                      <td><Link to={`/checkStatus`}><Button color="primary" variant="contained" className="btn btn-info">checkStatus</Button></Link></td>
                      <td><Link to={`/initiateShipment`}><Button color="primary" variant="contained" className="btn btn-info">initiateShipment</Button></Link></td>
                      <td><Link to={`/rejectShipment`}><Button color="primary" variant="contained" className="btn btn-info">rejectShipment</Button></Link></td>
                      <td><Link to={`/closeShipment`}><Button color="primary" variant="contained" className="btn btn-info">closeShipment</Button></Link></td>
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

export default CourierList;
