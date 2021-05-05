import React from 'react';
import {Button, Text, View} from 'react-native';
import {createStackNavigator } from '@react-navigation/stack'
import { LOGIN, REGISTER } from '../constants/routeName';
import Login from '../screens/Login';
import SignUp from '../screens/Register';



const AuthNavigator =() =>{
    const AuthStack = createStackNavigator();

    return (
            <AuthStack.Navigator screenOptions={{headerShown:false}}>
                  <AuthStack.Screen
                    name={LOGIN}
                    component={Login} >
                  </AuthStack.Screen>  
                  <AuthStack.Screen
                    name={REGISTER}
                    component={SignUp} >
                  </AuthStack.Screen>  
               
            </AuthStack.Navigator>
    );
};

export default AuthNavigator;