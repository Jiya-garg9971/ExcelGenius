import React, { useContext } from 'react'
import styled from 'styled-components';
import { useRef } from "react";
import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router';
import { Link } from 'react-router-dom';

const Wrapper2=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
     border-radius:10px;
     width:24vw;
     min-height:30vh;
     padding:20px 40px;
     background-color:white;
`
const Heading=styled.h1`
    font-size:4rem;
    color:#1877F2;
    text-align:left;
    margin-bottom:0px;
`
const Content=styled.span`
    margin-top:0px;
    font-size:1.5rem;
    text-align:left;
    
`
const Input=styled.input`
    border:2px solid lightgrey;
    width:100%;
    padding:10px;
    border-radius:10px;
    margin:10px 2px;
    
    font-size:20px;
`
const Button=styled.button`
width:100%;
border:none;
padding:10px;
    border-radius:10px;
    background-color:#1877F2;
    color:white;
    font-size:20px;
    font-weight:bolder;
    cursor:pointer;
`
const Btn=styled.button`
    width:90%;
    padding:10px;
    cursor:pointer;
    border-radius:10px;
    background-color: #0BDA51;
    color:white;
    font-weight:bolder;
    border:none;
    font-size:20px;
`
const Linktext=styled.a`
    width:100%;
    padding:10px;
    text-align:center;
    align-items:center;
    color:#1877F2;
    text-decoration:none;
    
    font-size:14px;
`
const Form=styled.form`
    display:flex;
    width:100%;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const Login = () => {
    const password=useRef();
    const email=useRef();
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const user={
                email:email.current.value,
                password:password.current.value,
            }
        try{
            const res=await axios.post("/user/login",user);
            console.log("response is",res);
            localStorage.setItem("userInfo", JSON.stringify(res));
            // console.log(res);
            toast.success("Login successful");
            
          navigate("/category");
        }
        catch(err){
            console.log(err.response.data);
            toast.warning(err.response.data);
            return;
        }
    }
  return (
        <Wrapper2>

            <Form type="submit" onSubmit={handleSubmit}>
                
                <Input type="email" placeholder='Email' ref={email}/>
                  <Input type='password' minLength={"6"}  placeholder='Password' ref={password}/>
                    <Button type="submit">
                        Log In
                    </Button>
                    <Linktext href=''>Forgot Password?</Linktext>
                    
            </Form>
            </Wrapper2>
  )
}

export default Login;