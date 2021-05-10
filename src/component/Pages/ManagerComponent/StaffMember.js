import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Button, Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
import { getOfficeById } from '../../../action/ManagerAction/staffmemberaction';



const staffMember = () => {
    const { empid } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [staffMember, setStaffMember] = useState({
        
        empid: "",                            
        role: "",
        name: "",
        
          address: {
            city: "",
            country: "",
            state: "",
            street: "",
            zip: ""
          },
        
          managerId: {
            managerid: ""
          
        }
    });

    useEffect(() => {
        loadStaffMember();
    }, [])

    const loadStaffMember = async () => {
        const result = await axios.get(`http://localhost:9191/api/ocma/manager/get-staff/${empid}`).catch((err) => { console.log("Error ", err); });
        dispatch(getStaffMember(result.data));
        setStaffMember(result.data);
    }

    const deleteStaffMemberById = async (empid) => {
        await axios.delete(`http://localhost:9191/api/manager/delete-staff/${empid}`).catch((err) => { console.log("Error", err); });
        dispatch(deleteStaffMember(empid));
        alert("Deleted Successfully");
        history.push('/StaffMember')
    }

    return (
        <div>
                        <div >
                <h1 class="display-4  bg-primary text-white"> STAFF MEMBER DETAILS </h1>
                <ul class="list-group-item">
                    <li class="list-group-item list-group-item-info"> <h3>Employee Id : {staffMember.empid}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3> Role : {staffMember.role}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3> Employee Name : {staffMember.name}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>STAFF MEMBER ADDRESS DETAILS</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>Street : {staffMember.address.street}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>City :  {staffMember.address.city}</h3></li>
                    <li class="list-group-item list-group-item-info"><h3>State : {staffMember.address.state}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>Country : {staffMember.address.country}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>Zip : {staffMember.address.zip}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>Manager Id : {staffMember.managerId.managerid}</h3> </li>
                </ul>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Button style={style} onClick={() => deleteStaffMemberById(empid)}>Delete</Button>
                    </Grid>
                    {/* <Grid item xs={3}>
                        <Link to={`/`}><Button style={style} >Back To Home</Button ></Link>
                    </Grid> */}
                </Grid>
            </div>
        </div>
    )
}

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

export default connect()(StaffMember);