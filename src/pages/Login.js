
import React, { useEffect, useState } from 'react'
import { Flex } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import '../styles/login.css'
function Login() {
  const [data, setData] = useState()
  console.log("🚀 ~ Login ~ data:", data)

  const Api = async () => {
    const url = 'https://covid-193.p.rapidapi.com/countries';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6bb2067e96mshf412f67b1b4aa75p112959jsn15e565b4ec93',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setData(result.response)
    } catch (error) {
      console.error(error);
    }
  }


  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const handleGoogleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error.message);
    }
  }
  const handleEmailLogin = async (values) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(values.email, values.password);
    } catch (error) {
      console.log(error.message);
    }
  }

  // let username = document.getElementsByName("username").value;
  //   let password = document.getElementsByName("password").value;

  //   let upperCaseLetter = [A-Z];
  //   let lowerCaseLetter = [a-z];
  //   let numbers = [0-9];

  //   if (username.length < 6) {
  //     alert("Username phải có ít nhất 6 ký tu");
  //   } else if (password < 8) {
  //     alert("Password phải có ít nhất 8 ký tu");
  //   } else if (!password.match(lowerCaseLetter)) {
  //     alert("Password có ít nhất 1 chữ thường");
  //   } else if (!password.match(upperCaseLetter)) {
  //     alert("Password có ít nhất 1 chữ hoa");
  //   } else if (!password.match(numbers)) {
  //     alert("Password phải có ít nhất 1 số hoặc ký tự đặc biệt.");
  //   } 

  useEffect(() => {
    Api()
  }, [])

  return (
    // <div>
    //   <button onClick={() => setAge(age + 1)}>Tăng tuổi</button>
    //   <Button type="dashed">Dashed Button</Button>
    // </div>
<div className='login-container'>
<div class="form-container sign-up-container">
		<form action="#" >
			<h1>Sign in</h1>
			<div class="social-container">
      <Button  onClick={handleGoogleLogin} >
        <svg class='btnSvg' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 128 128"><path fill="#fff" d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.33 74.33 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.16 36.16 0 0 1-13.93 5.5a41.29 41.29 0 0 1-15.1 0A37.16 37.16 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.31 38.31 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.28 34.28 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38z"/><path fill="#e33629" d="M44.59 4.21a64 64 0 0 1 42.61.37a61.22 61.22 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21z"/><path fill="#f8bd00" d="M3.26 51.5a62.93 62.93 0 0 1 5.5-15.9l20.73 16.09a38.31 38.31 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9z"/><path fill="#587dbd" d="M65.27 52.15h59.52a74.33 74.33 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z"/><path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.16 37.16 0 0 0 14.08 6.08a41.29 41.29 0 0 0 15.1 0a36.16 36.16 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.73 63.73 0 0 1 8.75 92.4z"/> </svg>  
        <span class='btnS'>Tiếp tục với Google</span>
      </Button>
			</div>
      <hr></hr>
			<Form
        className='input'
        name="basic"
        labelCol={{
          span: 9,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
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
          <Input type='email' />
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
          <Input type='email' />
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
          <Input.Password />
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





        {/* <Checkbox style={{marginLeft:30}}>Remember me</Checkbox> */}

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          


          <Button type="primary" htmlType="submit">
            Sign In
          </Button>

        </Form.Item>



      </Form>

      <h3>Don't have an account? <span><a href='/Register'>  Sign up</a></span></h3>
		</form>
	</div>
</div>
	
	
	


      
  )
}

export default Login


