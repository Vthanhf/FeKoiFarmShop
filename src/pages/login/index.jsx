import AuthenTemplate from '../../components/authen-template'
import { Button, Checkbox, Form } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import Input from 'antd/es/input/Input'
import {  getAuth, signInWithPopup } from "firebase/auth";
import { googleProvider } from '../../config/firebase'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../config/axios'
import "./index.css";

function LoginPage() {
    const navigate = useNavigate();


    const handleLoginGoogle = async () =>{
        const auth = getAuth();
    try {
        const res = await signInWithPopup(auth,googleProvider)
        const token = res.user.accessToken;
        console.log(res.user);
        console.log(token)
    } catch (error) {
        console.log(error)
    }
    
 
    }

    const handleLogin = async (values) =>{
        try{
           const response = await api.post('login', values)
           const { role,token} = response.data;

           localStorage.setItem("token", token);

           if(role === "ADMIN"){
            navigate("/dashboard");
           }
           else if(role === "CUSTOMER"){
            navigate("/v/home")
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
            <FormItem label= "Username" name="phone" rules={[
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

           <Button className='buttonGoogle' onClick={handleLoginGoogle}>Login google</Button>
           

            <Link to="/v">Home</Link>
        </Form>
    </AuthenTemplate>
  )
}

export default LoginPage