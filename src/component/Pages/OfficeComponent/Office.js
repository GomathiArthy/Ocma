import React, { useState, useEffect } from 'react';
import axios from '../../../axios/axios';
import { connect, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getOffice,deleteOffice, getOfficeSuccess } from '../../../action/OfficeOutletAction/OfficeActions';
import { Button, Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
import { getOfficeById } from '../../../action/OfficeOutletAction/OfficeActions';
import {deleteOfficeSuccess } from "../../../action/OfficeOutletAction/OfficeActions";



const Office = () => {
    const { officeId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [office, setOffice] = useState({
        officeId: '',
        openingTime: '',
        closingTime:'',
        address: {
            street: '',
            city: '',
            state: '',
            country: '',
            zip:'',
        }
    });

    useEffect(() => {
        loadOffice();
    }, [])

    const loadOffice= async ( officeId) => {
        const result = axios.get(`http://localhost:9191/api/ocma/Office/getOffice/${officeId}`).catch((err) => { console.log("Error ", err); });
        dispatch(getOfficeSuccess(result.data));
       office =  setOffice(result.data);
    }
    console.log("Offices :", office);

    const deleteOfficeById = async (officeId) => {
        await axios.delete(`http://localhost:9191/api/Office/deleteOffice/${officeId}`).catch((err) => { console.log("Error", err); });
        dispatch(deleteOfficeSuccess(officeId));
        alert("Deleted Successfully");
        history.push('/Office')
    }
    const getOfficeById = async (OfficeId) => {
        await axios.get(`http://localhost:9191/api/Office/deleteOffice/${officeId}`).catch((err) => { console.log("Error", err); });
        dispatch(getOffice(officeId));
        alert("Fetched Successfully");
        history.push('/Office')
    }
    return (
        <div>
                        <div >
                <h1 class="display-4  bg-primary text-white"> Office Detail </h1>
                <ul class="list-group-item">
                    <li class="list-group-item list-group-item-info"><h3> Office Id  : {office.officeId}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3> Office opening Time : {office.openingTime}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3> Office closing Time : {office.closingTime}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3> Office Address Details</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>Street : {office.address.street}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>City :  {office.address.city}</h3></li>
                    <li class="list-group-item list-group-item-info"><h3>State : {office.address.state}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>Country : {office.address.country}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>Zip : {office.address.zip}</h3> </li>
                </ul>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Button style={style} onClick={() => deleteOfficeById(officeId)}>Delete</Button>
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

export default connect()(Office);