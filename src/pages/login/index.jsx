/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import AuthenTemplate from '../../components/authen-template'
import { Button, Checkbox, Form } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import Input from 'antd/es/input/Input'
import {  getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { googleProvider } from '../../config/firebase'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../config/axios'

function LoginPage() {
    const navigate = useNavigate;


    const handleLoginGoogle = async () =>{
        const auth = getAuth();
        signInWithPopup(auth, GoogleAuthProvider)
            .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;

    console.log(user);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    console.log(error);
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }

    const handleLogin = async (values) =>{
        try{
           const response = await api.post('login', values)
           const { role } = response.data;

           if(role === "ADMIN"){
            navigate("/dashboard");
           }
        }catch(err){
            toast.err(err.response.data)
        }
        
    };

  return (
    <AuthenTemplate>
        <h1>Welcome back!</h1>
        <h4>Enter your Credentials to access your account</h4>
        <Form labelCol={{
            span: 24,
            }}
            onFinish={handleLogin}
            >
            <FormItem label= "Username" name="username" rules={[
                {
                    required: true,
                    message: "Please input your username!"    
                },
            ]}>
                <Input/>
            </FormItem>
            <FormItem label= "Password" name="password"rules={[
                {
                    required: true,
                    message: "Please input your password!"    
                },
            ]}>
                <Input.Password />
            </FormItem>

            <Link to="/register">Dont have account? Register new account</Link>

            <FormItem>
                <Checkbox>Remember account</Checkbox>
            </FormItem>
            <Button type='primary' htmlType='submit'>Login</Button>

            <Button onClick={handleLoginGoogle}>Login google</Button>
        </Form>
    </AuthenTemplate>
  )
}

export default LoginPage