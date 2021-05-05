import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../../../assets/themes/colors';
import styles from './style';

const Input = ({onChangeText , iconPosition , icon, style, value, label, error, ...props}) => {

    const [focused , setFocused ] = React.useState(false)

    const getFlexDirection =() => {
        if (icon && iconPosition){
                if (iconPosition === "left"){
                    return "row";
                }
                if (iconPosition === "right"){
                    return "row-reverse";
                }
        }
    };

    const getBorderColor =() => {
        if (error){
            return colors.danger;
         }
        if (focused){
            return colors.primary;
        }
        else {
            return colors.grey;
        }        
        };


  return (
        <View style={styles.inputContainer}>
             {label && <Text style={styles.label}>{label}</Text>}
            <View style={[
                        styles.wrapper ,
                        {alignItems : icon ? 'center' : 'baseline'},
                        {borderColor : getBorderColor() ,flexDirection:getFlexDirection()}]}>
                <View>
                   {icon && icon}
                </View>

                    <TextInput
                        style={[ styles.txtInput , style]}
                        onChangeText = {onChangeText}
                        value= {value}
                        onFocus={ () => setFocused(true)}
                        onBlur={ () => setFocused(false)}
                        autoCapitalize={"none"}
                        {...props}
                       />
            </View>
                {error && <Text style={styles.error}>{error}</Text>}
        </View>
  );
}
export default Input;