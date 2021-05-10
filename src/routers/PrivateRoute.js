import {Route} from 'react-router-dom';
import user from '../component/Pages/LoginComponent/user'
import {Redirect} from 'react-router-dom';

const PrivateRoute = ({component:Component,...rest}) => {
    console.log(user.getLoggedIn());
    return (
        <Route {...rest} render={
            props => (
                user.getLoggedIn() ? (<Component {...props} />) : <Redirect to={`/customer`}  />
            )
        }/>
    )
}


export default PrivateRoute;