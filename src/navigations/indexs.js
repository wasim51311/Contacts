import React ,{ useContext } from 'react';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { GlobalContext } from '../context/Provider';

const AppNavigationContainer =()=>{
    /**
     * Create state object which equal to useContext(GlobalContext) which we created in Provider.js  */
const {authState:{isLoggedIn}} = useContext(GlobalContext);
        return(
            <NavigationContainer>
                {/* Condition and based on result move user to one Navigator */}
                { isLoggedIn ?  <DrawerNavigator/> : <AuthNavigator/> }
               
                    
            </NavigationContainer>
    );
};

export default AppNavigationContainer;
