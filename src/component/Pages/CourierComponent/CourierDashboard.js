import { Button, Grid } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import CourierList from './CourierList'
import Box from '@material-ui/core/Box';

// import Header from "../../component/common/Header";
// import Footer from "../../component/common/Footer";

function CourierDashBoard() {

    const history = useHistory();

    return (
        <div>
            {/* <Header /> */}
            <Box color="primary.main" component="div" display="inline" > <h3>COURIER MANAGEMENT</h3>
            </Box>
            <br />
            <Box color="primary.main" component="div"   > <h3>List of Couriers:</h3></Box>
            <Grid   >
                <CourierList/>
            </Grid>
            {/* <Footer /> */}
        </div>
    );
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

export default CourierDashBoard;