import { createStore, applyMiddleware } from "redux";
import RootReducer from '../reducer/RootReducer'
import thunk from 'redux-thunk';
const store =  () => {
    
    try
    {
    return createStore(RootReducer, applyMiddleware(thunk));
    
    }
    catch(e)
    {
        alert(e.message);
    }
    alert("called");
}
export default store;


  