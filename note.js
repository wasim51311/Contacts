/**
 * 1- Download all packages we will need in this project
 *      Navigation - icon - stack - ...etc
 * 2-create folders structure :
 *      src :
 *          -assets =>(dir)
 *             -fonts  =>(dir) 
*              -images =>(dir)
 *             -themes =>(dir)
 * 
 *          -components =>(dir)
 *          -config    =>(dir)
 *          -constants =>(dir)
 *          -context   =>(dir)
 *               -actions       =>(dir)
 *               -initialStates =>(dir)
 *               -reducers      =>(dir)
 *               -Provider.js   =>(file)
 * 
 *          -screens
 *          -navigations =>(dir)
 *          -helpers     =>(dir) we will put in it some thing like axios
 *          -utils       =>(dir)
 * 
 * 3- Create .env file for enviroment variables and put ( 
 *          # .env
 *            .env
 *      in .gitignore) 
 * 4-we will work with the navigation
 *      -install all things that we need from navigation docs
 *      -In our App.js file import {gesturHandler } from 'react-native-gesture-handler'
*           (at the beginning of our file)
 * 5-in navigation folder create index.js which will contain AppNavContainer
 *      -in this file we will create NavigationContainer
 * 6-in App.js import AppNavContainer from './src/navigations/index'
 *      -inside return clear every thing and wrilte <AppNavContainer/>
 * 7-Create Screens :
 *      our app will divid into two parts 
 *      screens => Home => which will have Drawer
 *      screens => Auth (to access app) which we will use to make use have access to our app
 * #### important in constants => create routeNames.js containt the names of our screen to make them constants
 * 8-in navigation folder create HomeNavigator.js to build our Drawer
 *      -inside it build our navigator and put four screens
 * 9-create AuthNavigatore which only contain two screens Login && SignUp
 * 10-Create DrawerNavigation.js which responsible about drawer that enable us
 *      create side bar by define Drawer = createDrawerNavigator(); and them define in this step one component it is 
 *      HomeNavigator and it name on Drawer is home
 * 11-Working with context folder :
 *          action folder => having functions dispatching some type and there is glable state
 * 12-Working with Provider.js component which responsible of creating global state and sharing it with other section 
 *      of our app
 * 13-in Provider.js we create component GlobalProvider and make it return GlobalContext.Provider
 *      and create objects authState, authDispatch by using authReducer which we will create in reducers folder
 * 14-Create auth reducer in reducers folder 
 * 15-Create auth initialState in initailState folder
 * 16-Create contactState , contactsDispatch objects using useReducer in Provider.js
 * 17-Create contactsRedcucer in reducers folder and contactsInitState  in initialState folder
 * 18-use these objects and put it into value propreties in ClobalContext.Provider tag so they will be accessible from other section and children
 *          (This will peform in Provider.js )
 * 19-another important tip is wrap all content of app.js in GlobalProvider tag to make us able to use redux 
 * 20-The working in this section is very important to move and access state from any children
 *         what we do is :
 *                  -in index.js of navigations we create an object (const {authState :{isLoggedIn} = useContext(GlobalContext)})
 *                     global context which we created and it will offer the global state to us and in this stage isLoggedIn tell us whether
 *                      the use have logged in to this app or not and based on that we will route the user to different screen
 * 
 * **************************** Creating A containr component *********************************************** 
 * 1-in Component folder we create this  structure /common=>container=>index.js/
 *    this container can be used in every screen as a root contain every thing 
 * 2-in container we pass {children , style} and style we can pass it from the where we will use container an contact screen
 * ********************************* Custom Text Input ************************************
 * 1-edit login screen and wrapp its content into container tap
 * 2-Create index.js in component/common/input folder and inside it custom the input component 
 *          the props between ({ }) we will pass when we created or use this component in our screens
 * 3-in this section we learn how to  :
 *      -make input text custminzed 
 *      - how to make border when we focus on it 
 *      -how to change the color of border
 *      -how to add icon to the inputtext 
 *      -how to control the position of the icon
 * ********************************* Custom Button ************************************
 * 1-in this section I learn :
 *      -how to create custom button from TouchableOpacity
 *      - how to pass props like disable , loading, background Color , title , onPress function 
 * ********************************* Login Screen UI ************************************
 * 1- in this section complete building login UI 
 * ********************************* Form validation ************************************
 * 1-make validation with out import any package only with java code and make different messages appear to user
 * 2-first define a new state [form, setForm],[errors, setErrors] form with take the content of fields and errors will contain
 *       the message we want to show it
 * 3-remember the error props of Input component that we design in previous time
 * 4-prev is previous state
 * ********************************* Managing Enviroment Variables ************************************
 * 1- The enviroment varialbe may help us to protect our api and make it hidden when we produce the product app
 * 2-first we need to install the library : npm i react-native-dotenv
 * 3-after install this library we need to follow the docs (https://github.com/goatandsheep/react-native-dotenv)
 * 4-copy plugins (the long one ) and paste it into babel.config.js after presets and leave only two options
 * 5-in the file (.env) which we created at first  we will write to api urls the real one and the fake one
 * 6-in config folder create new file env.js
 * 7-inside it import the to urls and make two objects and at the export based on the version of app
 * 8-in sign up (import envs from '../../config/env';)
 * 9-you can log the env by : 
 *                        console.log('BACKEND_URL:>>', envs);
 *                          console.log('__DEV__',__DEV__);
 *      and you can see the backend url which we put it into .env file and then import it ot env.js in config folder 
 * ********************************* AXIOS Instance ************************************
 *  1-we don't need every time to privde the base usl
 *  2-install axios pachage
 * 3-install asyncStorage
 * 4-go to helper create axios.js
 * 5-import axios from axios and import envs from config/env
 * 6-create baseURL by (axios.create({baseURL})) and put envs.BACKEND_URL
 * 7-put some headers and change them later
 * 8-use config which define in axiosInstance (config is the baseURL and headers ) and then async them 
 * 9-async them to get token which we will store it and test token to make auth login operation
 * 10-then handle the error
 * 11-in index.js in register folder we add useEffect and call axiosInstance and use get with ('/contacts/')
 * 12-handle and catch error of get operation 
 * 13-then the err will contain status : 403 which mean every think is ok
 * * ********************************* User Registration ************************************
 * 1- add these line in index.js in register folder 
 *                      if ( Object.values(form).length ===6 &&
                                Object.values(form).every((item)=>item.trim().length>0) &&
                                Object.values(errors).every((item) => !item)){
                                console.log('object ',1111)  
    2- this to make data sending not available until every thing is ok
     3-in context folder => actions folder create auth folder and inside it create register.js
     4-inside this folder we will use axiosInstance which make us able to bint api and mke register operation
     5- It's very important that we write the params like they have been written in api
     6-then in index.js in src/screens/register we will useReducer to dispatch our data
    7-create {authDispatch} using Context and pass GlobalContext
    8-pass authDispatch to register(form(authDispatch))
    9-in constants create actionTypes folder and inside it create index.js file which containt the action type of register
    10-in register.js in context/action/auth use dispatch and pass the constants we declared in previous step
    11-edit the reducer int auth.js in src/context/reducers to handle actions
    12- then add authState to authDispatch const in index.js in src/screens/Register
    13-and the authState must be structured as authState :{error, loading, data}
    14-and then pass the : loading , error th RegisterComponent below
    15-add loagin and error props to the root component (RegisterComponent)
    16-There is some mistaks in my code :
            in REGISTER_FAILD I was wrote err.reponse and it must have written err.response
            in axiosInstance.post() I wrote the rest of api url with wrong syntax I just add /api/
    17-in index.js in component/signup/index.js I get the response of api and display it in error field of my component
    18-in index.js in src/screens/register we add useEffect and inside it we put navigate to move us to login
       screen after register is successful
    19-to handle the move to login screen : after do  the previous step we will move to login  screen and if we want to move 
       to register screen we will back to login because data always true
   20-so we will useFouceEffect and for that src/context/auth/action/register.js and export it and make dispatch with type
                                 clearAuthState
   21-in src/context/reducers/auth.js we add this case : 
                        case CLEAR_AUTH_STATE:
                         console.log(' CLEAR_AUTH_STATE state', state);
                                return {
                                    ...state,
                                    loading : false,
                                    data: null,
                                    error:null,
                            }; 
* ********************************* Message Component ************************************
*  1-We will create message component to show message to use in any case and add retry option which allow use to try again the faild action
*  2-
*
*
*
*
*
* 
*
*
*
*
*
*
* 
*
*
*
*
*
*
* 
*
*
*
*
*
*
* 
*
*
*
*
*
*
*/