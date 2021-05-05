import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from '../../../styles/global';
import CustomButton from '../../components/common/Button';
import Container from '../../components/common/container';
import Input from '../../components/common/Input';
import { LOGIN, REGISTER } from '../../constants/routeName';
import Message from '../common/Message';

const LoginComponent=()=>{
    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
    const {navigate } = useNavigation();


    return(
    <Container>
            <Image 
                    height={300} 
                    width={300 } 
                    source ={require('../../assets/images/contact.png')}
                    style={styles.logoImage}/>
            
             <View>
                <Text style ={styles.title}> Welcom to Contacts </Text>
                <Text style ={styles.subTitle}> Please login here </Text>
            <Message onDismiss={()=>{}} retry retryFun={()=> console.log('Message', 'primary')} message={"Hello from message"} primary/>
            <Message onDismiss={()=>{}} retry retryFun={()=> console.log('Message', 'success')} message={"Hello from message"} success/>
            <Message onDismiss={()=>{}} retry retryFun={()=> console.log('Message', 'danger')} message={"Hello from message"} danger/>
            <Message onDismiss={()=>{}} retry retryFun={()=> console.log('Message', 'info')} message={"Hello from message"} info/>
            <View style={styles.form}>

            <Input 
                        label="Username"
                        onChangeText={(text) => setUsername(text)}
                        value={username}
                        placeholder = "Enter username"
                        //error={"This field is required"}
                    />
                     <Input 
                        label="Password"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        icon={<Text>HIDE</Text>}
                        iconPosition="right"
                        secureTextEntry ={true}
                        placeholder = "Enter Password"
                    />
             <CustomButton primary title="Submit"/> 
                <View style ={styles.regContainer}>
                    <Text style={styles.infoText}> Don't have an account ?</Text>
                    <TouchableOpacity onPress={()=>{navigate(REGISTER)}}>
                        <Text style={styles.regText}> Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
             </View>

    </Container>
    );
};
export default LoginComponent;