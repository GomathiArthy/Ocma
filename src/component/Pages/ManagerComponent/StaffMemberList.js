import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllOffices } from "../../action/OfficeActions";
import axios from '../../axios/axios';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { deleteStaffMember } from '../../action/ManagerAction/staffmemberaction';
import { useHistory } from 'react-router';
import { getAllStaffMember } from "../../../action/ManagerAction/staffmemberaction";
import StaffMember from "./StaffMember";

const StaffmemberList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const staffMembers = useSelector((state) => state.allStaffMember.staffMembers);

  const fetchStaffMembers = async () => {
    const result = await axios.get('http://localhost:9191/api/ocma/manager/get-all-staff').catch((err) => {
      console.log("Error ", err);
    });
    dispatch(getAllStaffMembers(result.data))
  };

  useEffect(() => {
    fetchStaffMembers();
  }, []);

  console.log("StaffMembers :", staffMembers);

  const deleteStaffMemberById = async (empid) => {
    await axios.delete(`http://localhost:9191/api/ocma/manager/delete-staff/${empid}`).catch((err) => { console.log("Error", err); });
    dispatch(deleteStaffMember(empid));
    alert("Deleted Successfully");
    fetchOffices();
    history.push('/StaffMember');
  }

  return (
    <div className="">
      <Grid>
        <TableContainer component={Paper}>
          <Table border="1" bgcolor="white" class="table  table-bordered table-hover">
            <TableHead className="thead-dark">
              <TableRow>
                <StyledTableCell>Employee Id</StyledTableCell>
                <StyledTableCell>Role</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>View</StyledTableCell>
                <StyledTableCell>Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                staffMembers.map((staffMembers) => {
                  const { empid, role, name } = StaffMember;
                  return (
                    <StyledTableRow key={empid}>
                      <td>{empid}</td>
                      <td>{role}</td>
                      <td>{name}</td>
                      <td><Link to={`/getStaffMemberById/${empid}`}><Button color="primary" variant="contained" className="btn btn-info">VIEW</Button></Link></td>
                      <td><Link to={`/getStaffMemberById/${empid}`}><Button color="secondary" variant="contained" className="btn btn-secondary">Delete</Button></Link></td>
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

export default StaffmemberList;