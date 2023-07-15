import { useNavigate } from "react-router";
import Register from "./Register";
import styled from 'styled-components';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import Login from "./Login";

const Container=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#F0F8FF;
    width:100vw;
    height:100vh;
   font-family: 'Poppins', sans-serif;
`
const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
     margin:30px;
     width:50vw;
     height:100vh;
`
const Wrapper2=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    border:2px solid lightblue;
     border-radius:10px;
     width:24vw;
     min-height:2vh;
     padding:20px 40px;
     background-color:white;
`
 const Btn=styled.button`
    border:none;
    background-color:white;
    font-size:larger;
    font-weight:bolder;

 `

const Home=()=>{

    const [registerpage,setregisterpage]=useState(true);
    const navigate=useNavigate();
    useEffect(()=>{
        const userDetails=JSON.parse(localStorage.getItem("userInfo"));
        if(userDetails){
            console.log(userDetails)
            navigate("/category");
        }
    },[navigate])
    return(
        <Container>
        <Wrapper>
            
        <img src="https://du0ulnyus7r80.cloudfront.net/wp-content/uploads/2020/02/application-maintance.png"/>
            {/* </Content> */}
        </Wrapper>
        <div>
            
            <h1 style={{fontFamily:"cursive",color:"blue"}}>EASE CHAT</h1>
        <Wrapper2>
            <Btn onClick={()=>setregisterpage(true)}> Register </Btn>
            <div style={{color:"lightblue",fontSize:40,padding:0}}>|</div>
            <Btn onClick={()=>setregisterpage(false)}> Login</Btn>
        </Wrapper2> 
        {registerpage ?<Register/>:<Login/>}
        </div>
        </Container>
    )
}
export default Home;