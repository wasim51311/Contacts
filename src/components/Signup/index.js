import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from '../../../styles/global';
import CustomButton from '../../components/common/Button';
import Container from '../../components/common/container';
import Input from '../../components/common/Input';
import { LOGIN, REGISTER } from '../../constants/routeName';

const RegisterComponent=({onSubmit, onChange,form ,errors, error,loading})=>{
    
    const {navigate } = useNavigation();


    return(
    <Container>
            {/* <Image 
                    height={300} 
                    width={300 } 
                    source ={require('../../assets/images/tierebook_logo.png')}
                    style={styles.logoImage}/>
             */}
             <View>
                <Text style ={styles.title}> Welcom to Contacts </Text>
                <Text style ={styles.subTitle}> Please Register here </Text>
            {/* //get the error response from api */}
            {error?.error && <Text style={styles.wrongMessage}>{error.error}</Text>}
               
            <View style={styles.form}>
            <Input 
                        label="Username"
                        placeholder = "Enter username"
                        iconPosition = "right"
                        onChangeText={(value) => onChange({name:'userName', value})}
                        error={errors.userName || error?.username?.[0]}
                    />
            <Input 
                        label="Firstname"
                        iconPosition = "right"
                        placeholder = "Enter Firstname"
                        onChangeText={(value) => onChange({name:'firstName', value})}
                        error={errors.firstName || error?.first_name?.[0]}
                    />
            <Input 
                        label="Lastname"
                        iconPosition = "right"
                        placeholder = "Enter Lastname"
                        onChangeText={(value) => onChange({name:'lastName', value})}
                        error={errors.lastName || error?.last_name?.[0]}
                    />
              <Input 
                        label="Email"
                        iconPosition = "right"
                        placeholder = "Enter Email"
                        onChangeText={(value) => onChange({name:'email', value})}
                        error={errors.email || error?.email?.[0]}
                    />        
                     <Input 
                        label="Password"
                        iconPosition = "right"
                        icon={<Text>Show</Text>}
                        iconPosition="right"
                        secureTextEntry ={true}
                        placeholder = "Enter Password"
                        onChangeText={(value) => onChange({name:'password', value})}
                        error={errors.password || error?.password?.[0]}
                    />
                     {/* <Input 
                        label="Confirm Password"
                        iconPosition = "right"
                        icon={<Text>Show</Text>}
                        iconPosition="right"
                        secureTextEntry ={true}
                        placeholder = "Enter Confirm Password"
                        onChangeText={(value) => onChange({name:'confirmPassword', value})}
                        error={errors.confirmPassword}
                    /> */}
                
             <CustomButton disabled={loading} loading={loading} primary title="Submit" onPress={onSubmit}/> 
                <View style ={styles.regContainer}>
                    <Text style={styles.infoText}> Do yout have an account ?</Text>
                    <TouchableOpacity onPress={()=>{navigate(LOGIN)}}>
                        <Text style={styles.regText}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
             </View>

    </Container>
    );
};
export default RegisterComponent;