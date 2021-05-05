import React , { createContext, useReducer } from 'react';
import auth from './reducers/auth';
import contacts from './reducers/contacts';
import authinitState from './initailStates/authinitState';
import contactInitState from './initailStates/contactsInitState';


export const GlobalContext = createContext({});

const GlobalProvider =({children}) => {

const [authState, authDispatch ]=useReducer(auth, authinitState);
const [contactsState, contactsDispatch ]=useReducer(contacts,contactInitState);

return (
    <GlobalContext.Provider 
    value={{  authState, contactsState, authDispatch, contactsDispatch  }}>
        {children}
    </GlobalContext.Provider>

    );
};

export default GlobalProvider;
