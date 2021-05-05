import { StyleSheet } from 'react-native';
import colors from '../src/assets/themes/colors';

export  default StyleSheet.create({
    txtContact:{
        fontSize : 24,
        // alignContent:'center',
        // alignSelf: 'center',
        color: 'red',
        fontFamily:'Poppins-Light',
    },
    wrapper:{
            padding: 20,
    },
    txtInput: {
        height:40,
        borderColor: 'gray',
        borderWidth: 1,
    },
    logoImage:{
        alignSelf:'center',
        height:150,
        width:300,
        margin:20,
        resizeMode:'contain'
    },
    title:{
            fontSize: 21,
            textAlign:'center',
            paddingTop:20,
            fontWeight: '500',

    },
    subTitle:{
        fontSize: 17,
        textAlign:'center',
        paddingVertical:20,
        fontWeight: '500',
    },
    form:{
        paddingTop: 20,
    },
    regContainer:{
        flexDirection:'row',
        alignContent: 'center',
        justifyContent:'center'
    },
    regText:{
        color:colors.primary,
        fontSize: 17,
        paddingLeft:17,

    },
    infoText:{
        fontSize: 17,
        paddingLeft:17,

    },
    wrongMessage:{
        alignSelf:'center',
        fontSize:13,
    }
})