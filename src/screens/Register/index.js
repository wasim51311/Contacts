import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import RegisterComponent from '../../components/Signup';
import envs from '../../config/env';
import  register , {clearAuthState} from '../../context/actions/auth/register';
import axiosInstance from '../../helpers/axiosInterceptor';
import {ClobalContext, GlobalContext} from '../../context/Provider';
import { LOGIN } from '../../constants/routeName';
import {useNavigation, useFocusEffect} from '@react-navigation/native'

const SignUp=()=>{
    const {navigate} = useNavigation();
    const [form , setForm ] =  useState({});
    const [errors , setErrors ] =  useState({});
    const {authDispatch, authState :{error, loading, data}} = useContext(GlobalContext)
    
    
    //we use this effect to move us to login screen after register use is successful
    React.useEffect(()=>{
        if (data){
            navigate(LOGIN)
        }
    }, [data]);
    //we use this to end the move operation and make us able to move to register screen again
    useFocusEffect(
            React.useCallback(()=>{
                if (data){
                    //we declare clearAuthState in 
                    clearAuthState()(authDispatch)
                }
            })
    );
    
      const onChange=( {name, value})=>{
        //this will put the value from register form and then we will test this values with submit
        setForm({...form,[name] :value});

      
        //this for remove the error which appear when user leave any field empty    
        if (value !==''){
            //test password length
          if(name === 'password'){
              //if length less than 6 error message will apear
                if (value.length < 6){
                    setErrors((prev) => {
                        return({  ...prev, [name]: 'Password must be minimum 6 characters' });
                });
                }else {//if password length 6 or more no thing will appear
                    setErrors((prev) =>{
                        return({  ...prev, [name]: null });
                    });
                }
          }else{//if field is not empty no message will appear
            setErrors((prev) =>{
                return({  ...prev, [name]: null });
            });
          }
        } else {//if user type letter and then make field empty this message will appear
            setErrors((prev) => {
                return({  ...prev, [name]: 'This field is required..' });
        });
            }
           
    };

    const onSubmit= () =>{
        //validation
       
        if (!form.userName){
            setErrors(prev =>{
                return({  ...prev, userName: "Please add a username"  });
            });
        }
        if (!form.firstName){
            setErrors(prev =>{
                return({  ...prev, firstName: "Please add a firstname" });
            });
        }
        if (!form.lastName){
            setErrors(prev =>{
                return({  ...prev, lastName: "Please add a lastName" });
            });
        }
        if (!form.email){
            setErrors(prev =>{
                return({  ...prev, email: "Please add an email" });
            });
        }
        if (!form.password){
            setErrors(prev =>{
                return({  ...prev, password: "Please add a password" });
            });
        }
        // if (!form.confirmPassword){
        //     setErrors(prev =>{
        //         return({  ...prev, confirmPassword: "Please add a confirmPassword" });
        //     });
        // }
        // if (form.password !== form.confirmPassword){
        //     setErrors(prev =>{
        //         return({  ...prev, password: "Password and confirm must be same.." });
        //     });
        // }else {
        //     setErrors(prev =>{
        //         return({  ...prev, password: null });
        //     });
        // }
        console.log('object ',Object.values(form))
         //test every thing if it's ok
         if ( Object.values(form).length === 5 &&
         Object.values(form).every((item)=>item.trim().length>0) &&
         Object.values(errors).every((item) => !item))
         {
          console.log('object ',Object.values(form)) 
          register(form)(authDispatch)      
          }

    
    };

    return(
    <RegisterComponent 
            onSubmit={onSubmit} 
            onChange={onChange} 
            form={form} 
            errors={errors}//this errors is for validation data
            error={error}//this error from api
            loading={loading}    
            />
    );
};
export default SignUp;