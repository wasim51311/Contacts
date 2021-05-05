import { StyleSheet } from 'react-native';
import colors from '../../../assets/themes/colors';
import Colors from '../../../assets/themes/colors';

export  default StyleSheet.create({
   txtInput: {
      fontSize:16,
       flex: 1,
        fontFamily:'Poppins-Light',
        width: '100%'
    },
    wrapper:{
        height:55,
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 5,
         marginTop: 5,
    },
    inputContainer:{
        paddingVertical:12,
    },
    error:{
        color:colors.danger,
        paddingTop:4,
        fontSize: 12,
    },
    label:{
        fontWeight:'bold'
    }
})