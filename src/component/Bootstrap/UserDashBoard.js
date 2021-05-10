import { Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React from 'react';
import OfficeList from '../../component/Pages/OfficeComponent/OfficeList';
import Box from '@material-ui/core/Box';
import OfficeComponent from '../../component/Pages/OfficeComponent/OfficeComponent';
import Office from '../../component/Pages/OfficeComponent/Office';

function UserDashBoard() {


    const history = useHistory();

   const handleClick = event => {
        event.preventDefault();
        history.push('/login/Manager/AddOffice');
    
        
    }
                    

    return (
        <div>
            <Box color="primary.main" component="div" display="inline" > <h3>ADD OFFICE DETAILS
                <Button style={style} onClick={handleClick}>ADD OFFICE</Button></h3>
            </Box>
            <br />
            <Box color="primary.main" component="div"   > <h3>List of Offices:</h3></Box>
            <Grid>
               <OfficeList></OfficeList>
            </Grid>
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

export default UserDashBoard;