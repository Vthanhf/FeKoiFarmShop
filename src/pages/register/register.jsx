// eslint-disable-next-line no-unused-vars
import React from 'react'
import AuthenTemplate from '../../components/authen-template'
import { Button, Checkbox, Form } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import Input from 'antd/es/input/Input'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../config/axios'
import { toast } from 'react-toastify'

function RegisterPage() {

    const navigate = useNavigate();


    const handleRegister = async (values) => {
      try {
        console.log('Sending data:', values); // Log dữ liệu trước khi gửi
        values.role = "CUSTOMER"
        const response = await api.post("register", values);
        console.log('API Response:', response);
    
        toast.success("Successfully registered new account");
        navigate("/login");
      } catch (err) {
        console.error('API Error:', err);
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Error data:', err.response.data);
          console.error('Error status:', err.response.status);
          console.error('Error headers:', err.response.headers);
          toast.error(err.response.data.message || "Error registering new account");
        } else if (err.request) {
          // The request was made but no response was received
          console.error('Error request:', err.request);
          toast.error("No response received from server");
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error message:', err.message);
          toast.error("Error setting up the request");
        }
      }
    };

    return (
        <AuthenTemplate>
            <h1>Register form</h1>
            <Form labelCol={{
            span: 24,
            }}
            onFinish={handleRegister}
            >
            <FormItem label= "Username" name="email" rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input/>
            </FormItem>
            <FormItem label= "Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </FormItem>
            <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({ 
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
            <FormItem label= "Phone" name="phone"rules={[
          { required: true, message: 'Please input your phone number!' },
          { pattern: /^[0-9]{10}$/, message: 'Phone number must be 10 digits!' },
        ]}>
                <Input/>
            </FormItem>
            <FormItem label= "Email" name="email"rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'The input is not a valid email!' },
        ]}>
                <Input/>
            </FormItem>

            <Link to="/login">Already have account? Go to login page</Link>

            <FormItem   name="agreement"
                        valuePropName="checked"
                        rules={[
                        { validator: (_, value) => (value ? Promise.resolve() : Promise.reject('You must accept the terms!')) },
        ]}>
                <Checkbox>I agree to the terms and policy</Checkbox>
            </FormItem>
            <Button type='primary' htmlType='submit'>Sign up</Button>
        </Form>
        </AuthenTemplate>
      )
}

export default RegisterPage