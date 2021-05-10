import axios from "../../axios/axios"
import user from "../../component/Pages/LoginComponent/user"




const _createAccount = user => ({
    type : 'CREATE_ACCOUNT',
    user
});

export const createAccount = user => {
    
    return (dispatch) =>{
        console.log("createAccountAction");
        console.log(user);
        return axios.post("http://localhost:9191/api/ocma/login/add-user",user).then(result=>{
            console.log(result); 
            alert("User added successfully");
            this.props.history.push('/');
        
          
            dispatch(_createAccount(result))
            }
        ).catch(error=>{
            alert(error.response);
        })
    }
  
}

const _login = user => ({
    type : 'LOGIN',
    user
})

 export const login = user => {
    return (dispatch) => {
        console.log("loginAction");
        return axios.post("http://localhost:9191/api/ocma/login/user-login",user).then(result=>{
            console.log(result);
            dispatch(_login(result))
        }).catch(error=>{
            alert(error.data);
        })
    }
}  
