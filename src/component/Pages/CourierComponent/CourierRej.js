import React, { useState, useEffect } from 'react';
import axios from '../../../axios/axios';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getCourierR } from '../../../action/CourierAction/CourierActions';
import { Button, Grid } from '@material-ui/core';
import { Link } from "react-router-dom";


const CourierRej = () => {
    const { courierid } = useParams();
    const dispatch = useDispatch();
    
    const[messageR,setMessageR]= useState();
    
    const [] = useState({
                         
    });

    useEffect(() => {
        loadCourierR();
    }, [])

    const loadCourierR = async () => {
        const result = await axios.get(`http://localhost:9191/api/ocma/rejectShipment/${courierid}`).catch((err) => { console.log("Error ", err); });
        dispatch(getCourierR(result));
        console.log(result);
        setMessageR(result);

    }

    return (
        <div>
            {/* <Header /> */}
            <div >
                <h1 class="display-4  bg-primary text-white"> Courier Details </h1>
                <h1>{messageR}</h1>
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

export default connect()(CourierRej);