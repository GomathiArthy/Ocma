const user = {
    userId:0,
    password:null,
    isLoggedIn : false,

    login(user){
        console.log("login");
        this.userId = user.userId;
        this.password = user.password;
        this.isLoggedIn = true;
    },  
    logout(){
        this.userId = 0;
        this.password = null;
        this.isLoggedIn = false;
    },
    getLoggedIn(){
        return this.isLoggedIn; 
    }, 
    
}

export default user;