import { Button, Form, Input, message } from 'antd';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import React, { useState } from 'react';
import '../styles/register.css';
import { checkEmail } from './checkEmail';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPw, setConfirmPw] = useState()

    const onFinish = async (values) => {
        if (email === '') {
            return alert('Please enter email!')
        }
        if (password?.length < 6) {
            return alert('Password must be at least 6 characters!')
        }
        else if (confirmPw !== password) {
            return alert('Passwords do not match!')
        }
        else {
            try {
                const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
                await result.user.updateProfile({
                    displayName: '',
                });

            } catch (error) {
                console.error('error', error.message)
                // console.log(error.message);
            }
        }
        const auth = firebase.auth();

        auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
            auth.currentUser.sendEmailVerification().then(() => { });
        })
            .catch((error) => { console.error(error); });

    };

    const handleRegister = () => {
        let dataAccoount = JSON.parse(localStorage.getItem('account'));

        if (email !== '' || password !== '' || confirmPw !== '') {
            if (checkEmail(email)) {
                alert('Email already exists !')
            } else {
                if (password === confirmPw) {
                    dataAccoount.push({
                        id: dataAccoount.length + 1,
                        email: email,
                        password: password
                    })
                    localStorage.setItem('account', JSON.stringify(dataAccoount))
                    messageApi.open({
                        type: 'success',
                        content: 'Register success',
                    });
                    setTimeout(() => {
                        navigate('/login')
                    }, 1000);
                } else {
                    messageApi.open({
                        type: 'error',
                        content: 'Confirm Password Failed',
                    });
                }
            }
        } else {
            messageApi.open({
                type: 'error',
                content: 'Please Enter Email and Password!',
            });
        }
    }

    return (
        <div>
            {contextHolder}

            <div class="form-container1 sign-up-container">
                <form action="#" >
                    <h1>Sign in</h1>

                    <Form
                        name="basic"
                        labelCol={{
                            span: 9,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 600,
                        }
                        }
                        initialValues={{
                            remember: true,
                        }}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >

                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input onChange={(e) => setEmail(e.target.value)} />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password onChange={(e) => setPassword(e.target.value)} />
                        </Form.Item>

                        <Form.Item

                            label="Confirm Password"
                            name="confirmPassword"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input type='password' onChange={(e) => setConfirmPw(e.target.value)} />
                        </Form.Item>


                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >



                            <Button type="primary" onClick={() => handleRegister()} >
                                Submit
                            </Button>

                        </Form.Item>
                    </Form>

                </form>
            </div>


        </div>
    )
}

export default Register