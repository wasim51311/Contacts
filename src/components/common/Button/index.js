import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import colors from '../../../assets/themes/colors';
import styles from './style';

const CustomButton = ({title, secondary, primary ,danger, disabled, loading, onPress , ...props}) => {
    
    const getBgColor =() => {
        if (disabled){
            return colors.grey;
        }
        if (primary){
            return colors.primary;
        }
        if (danger){
                   return colors.danger;
                }
      if (secondary){
                return colors.secondary;
                 }
        
        };


  return (
        <TouchableOpacity
            disabled={disabled} 
            style ={[styles.wrapper, {backgroundColor : getBgColor()}]}
            onPress={onPress}  
        >
            <View style={styles.loaderSection}>
                {loading && <ActivityIndicator color={primary ? colors.white : colors.primary}/>}
                {title &&  
                (<Text style ={[styles.btnSubmit, {color  : disabled ? "black" : colors.white , paddingLeft : loading ? 5 : 0}]}> {title} </Text>
                )}
            </View>
            
            
        </TouchableOpacity>
  );
};
export default CustomButton;