import React, { useState, useEffect } from 'react';
import axios from '../../../axios/axios';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getCourierC } from '../../../action/CourierAction/CourierActions';
import { Button, Grid } from '@material-ui/core';
import { Link } from "react-router-dom";


const CourierClose = () => {
    const { courierid } = useParams();
    const dispatch = useDispatch();
    
    const[messageC,setMessageC]= useState();
    
    const [] = useState({
                         
    });

    useEffect(() => {
        loadCourierC();
    }, [])

    const loadCourierC = async () => {
        const result = await axios.get(`http://localhost:9191/api/ocma/closeShipment/${courierid}`).catch((err) => { console.log("Error ", err); });
        dispatch(getCourierC(result));
        console.log(result.data);
        setMessageC(result.data);

    }

    return (
        <div>
            {/* <Header /> */}
            <div >
                <h1 class="display-4  bg-primary text-white"> Courier Details </h1>
                <h1>{messageC}</h1>
                <ul class="list-group-item">
                   
                    
                </ul>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Link to={`/courier`}><Button style={style} >Back To Home</Button ></Link>
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

export default connect()(CourierClose);