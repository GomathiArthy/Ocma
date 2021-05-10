import React, { useState, useEffect } from 'react';
import axios from '../../../axios/axios';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getCourier, getCourierI } from '../../../action/CourierAction/CourierActions';
import { Button, Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
//import Header from "../../component/common/Header";
//import Footer from "../../component/common/Footer";

const Courier = () => {
    const { courierid } = useParams();
    const dispatch = useDispatch();
    const[message,setMessage]= useState();
    
    
    const [] = useState({});

    useEffect(() => {
        loadCourier();
    }, [])

    const loadCourier = async () => {
        const result = await axios.get(`http://localhost:9191/api/ocma/checkStatus/${courierid}`).catch((err) => { console.log("Error ", err); });
        dispatch(getCourier(result.data));
        console.log(result.data);
        setMessage(result.data);
    }


    return (
        <div>
            {/* <Header /> */}
            <div >
                <h1 class="display-4  bg-primary text-white"> Courier Details </h1>
                <h1>{message}</h1>
                <ul class="list-group-item">
                    {/* <h1>{message}</h1> */}
                    {/* <li class="list-group-item list-group-item-info"><h3>Consignment No : {courier.consignmentNo}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>courierId  : {courier.courierid}</h3> </li>
            
                    <li class="list-group-item list-group-item-info"><h3>Delivered Date : {courier.deliveredDate}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>Initiated Date  : {courier.initiatedDate}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>Status : {courier.status}</h3> </li> */}

                   

                    {/* <li class="list-group-item list-group-item-info"><h3>accountHolderName  : {courier.receiver.acct.accountHolderName}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>accountNo : {courier.receiver.acct.accountNo}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>accountType : {courier.receiver.acct.accountType}</h3> </li>

                    <li class="list-group-item list-group-item-info"><h3>city  : {courier.receiver.addr.city}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>country : {courier.receiver.addr.country}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>state : {courier.receiver.addr.state}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>street  : {courier.receiver.addr.street}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>zip : {courier.receiver.addr.zip}</h3> </li> */}
                   


                    {/* <li class="list-group-item list-group-item-info"><h3>aadharNo  : {courier.receiver.aadharNo}</h3> </li> */}
                    {/* <li class="list-group-item list-group-item-info"><h3>Customer Id : {courier.receiver.customerid}</h3> </li> */}
                    {/* <li class="list-group-item list-group-item-info"><h3>First Name : {courier.receiver.firstName}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>Last Name : {courier.receiver.lastName}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>Mobile Number : {courier.receiver.mobileNo}</h3> </li> */}
                    
{/* 
                    <li class="list-group-item list-group-item-info"><h3>accountHolderName  : {courier.sender.acct.accountHolderName}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>accountNo : {courier.sender.acct.accountNo}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>accountType : {courier.sender.acct.accountType}</h3> </li>

                    <li class="list-group-item list-group-item-info"><h3>city  : {courier.sender.addr.city}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>country : {courier.sender.addr.country}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>state : {courier.sender.addr.state}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>street  : {courier.sender.addr.street}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>zip : {courier.sender.addr.zip}</h3> </li> */}

                    {/* <li class="list-group-item list-group-item-info"><h3>aadharNo  : {courier.sender.aadharNo}</h3> </li> */}
                    {/* <li class="list-group-item list-group-item-info"><h3>Customer Id : {courier.sender.customerid}</h3> </li> */}
                    {/* <li class="list-group-item list-group-item-info"><h3>First Name : {courier.sender.firstName}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>Last Name : {courier.sender.lastName}</h3> </li>
                    <li class="list-group-item list-group-item-info"><h3>Mobile Number : {courier.sender.mobileNo}</h3> </li> */}
                    
                </ul>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Link to={`/`}><Button style={style} >Back To Home</Button ></Link>
                    </Grid>
                </Grid>
            </div>
            {/* <   Footer /> */}
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

export default connect()(Courier);