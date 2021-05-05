import axios from "axios"
import { REGISTER_FAILD, REGISTER_LOADING, REGISTER_SUCCESS,CLEAR_AUTH_STATE } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInterceptor"

export const clearAuthState =() =>(dispatch) =>{
    dispatch({
        type: CLEAR_AUTH_STATE
    });
};
export default (
{   
    userName:username,
    firstName: first_name,
    lastName : last_name,
    email,
    password,
    }
)=> (dispatch) =>{
    dispatch({
        type:REGISTER_LOADING,
    })
    axiosInstance.post('/api/auth/register', {
        username,
        first_name,
        last_name,
        email,
        password,
        
    })
    .then ((res) => {
        dispatch({
            type:REGISTER_SUCCESS,
            payload: res.data
        })
        console.log('success res : >>>', res.data)
    } )
    .catch ((err) => {
        
        dispatch({
            
            type:REGISTER_FAILD,
            payload:err.response? err.response.data : {error: "Something went wrong,try again.."}
            
        })
        console.log('err data : >>>' ,err.response.data );
    });
}