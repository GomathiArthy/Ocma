import React from 'react';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import store from './store/store';
import MainRouter from "./routers/MainRouter/MainRouter"
import UserDashBoard from './component/Bootstrap/UserDashBoard'

// import AddCustomer from './component/CustomerComponent/AddCustomer';
// import AddUser from './component/LoginComponent/AddUser';




function App() {
  return (
     <Provider store={store()}>
  <MainRouter></MainRouter> 
  </Provider>

  )
      }

export default App;
