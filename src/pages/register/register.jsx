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
        values.role = "Customer"
        // eslint-disable-next-line no-unused-vars
        const response = await api.post("register",values);

        toast.success("successfully register new account");
        navigate("/login");
      } catch (err) {
        //toast.error("Error register new account")
        toast.error(err.reponse.data);

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
            <FormItem label= "Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
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
            <FormItem label= "Full name" name="fullname" rules={[{ required: true, message: 'Please input your full name!' }]}
            >
                <Input/>
            </FormItem>
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