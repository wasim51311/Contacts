import { StyleSheet } from 'react-native';
import colors from '../../../assets/themes/colors';


export  default StyleSheet.create({
  
    wrapper:{
        height:55,
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical:10,
        marginTop: 5,
        justifyContent:'center'
    },
    messageStyle:{
        fontSize:16,
        color:colors.white
    }
   
})