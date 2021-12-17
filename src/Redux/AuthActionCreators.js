import * as ActionTypes from "./ActionTypes";
import axios from "axios";


export const authSuccess=(token,userId)=>{
    return{
        type:ActionTypes.AUTH_SUCCESS,
        payload:{
            token:token,
            userId:userId,
        }
    }
}


export const auth=(email,password,mode)=>dispatch=>{

    const authData={
        email:email,
        password:password,
        returnSecureToken:true,
    }
    let authUrl=null;
    if (mode==="Sign Up"){
        authUrl="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
    }else {
        authUrl="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
    }
    const API_KEY="AIzaSyDqBeFCJUj8iODO1wnyRqslp_2xJdTyplM";
    axios.post(authUrl+ API_KEY,authData)
        .then(response=>{
            dispatch(authSuccess(response.data.idToken,response.data.localId))
        })
}

















