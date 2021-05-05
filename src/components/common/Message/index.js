import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../../../assets/themes/colors';
import styles from './style';

const Message = ({
            message,
            onDismiss,
            retry,
            retryFun,
            secondary, 
            primary ,
            danger,
            info,
            success,
            ...props}) => {
                const [useDismissed, setDismissed] = React.useState();
    
    const getBgColor =() => {
       
    if (primary){
        return colors.primary;
        }
    if (danger){
        return colors.danger;
                }
     if (success){
        return colors.success;
                 }
     if (info){
        return colors.info;
          }
        
        };


  return (
      <>
      {useDismissed ? null : 
        <TouchableOpacity onPress={retryFun} style ={[styles.wrapper, {backgroundColor : getBgColor()}]}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <Text 
                    style ={styles.messageStyle}>
                  {message}
                 </Text>
            {retry&& !typeof onDismiss==='function' && (
                <TouchableOpacity onPress={retryFun}>
                 <Text  style ={styles.messageStyle}>Retry</Text>
                </TouchableOpacity>
            )} 

            {typeof onDismiss==="function" && (
                <TouchableOpacity 
                    onPress={()=> {
                        setDismissed(true);
                        onDismiss;
                    }}>
                 <Text  style ={styles.messageStyle}>X</Text>
                </TouchableOpacity>
            )}   
            </View>
            
            
        </TouchableOpacity>}
        </>
  );
};
export default Message;