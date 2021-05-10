import axios from 'axios';
import { getLoginSuccessfulAction,getLoginFailedAction } from "../action/LoginActions";

const  USER_API_BASE_URL = "http://localhost:9191/api/ocma/login";

const LOGIN_URL = "/login";

export class LoginServices {
    
     login(userId,password,dispatch){
        axios.get(LOGIN_URL,{userId,password})
        .then(
            response => {
                console.log("Login response:"+ response.data);
                dispatch(getLoginSuccessfulAction(response.data));
                }
        )
        .catch(
            error => {
                console.log("Login error:"+error.response.data);
                dispatch(getLoginFailedAction(error.response.data));
            }
        );
    }
}