import { CLEAR_AUTH_STATE, REGISTER_FAILD, REGISTER_LOADING, REGISTER_SUCCESS } from "../../constants/actionTypes";


const auth =(state, {type,payload}) =>{
    switch (type){
            case REGISTER_LOADING:
                console.log(' REGISTER_LOADING state', state);
                    return {
                        ...state,
                        loading : true,
                    };
             case REGISTER_SUCCESS:
                        console.log(' REGISTER_SUCCESS state', state);
                            return {
                                ...state,
                                loading : false,
                                data: payload,
                            };
             case REGISTER_FAILD:
                          console.log(' REGISTER_FAILD state', state);
                               return {
                                   ...state,
                                    loading : false,
                                    error: payload,
                             };
            case CLEAR_AUTH_STATE:
                         console.log(' CLEAR_AUTH_STATE state', state);
                                return {
                                    ...state,
                                    loading : false,
                                    data: null,
                                    error:null,
                            };         
                            
             default:
                    return state;       
    }
};

export default auth;