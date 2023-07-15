import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const CategoryDiv=styled.div`
    display:flex;
    justify-content:space-around;
    align-items:centre;
`
const Img=styled.img`
    width:20vw;
    height:40vh;
    margin-bottom:1px;
    padding:0px;
`
const Btn=styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:40px;
     width:90%;
    padding:10px;
    border-radius:10px;
    background-color: #0BDA51;
    color:white;
    font-weight:bolder;
    border:none;
    font-size:15px;
`
const Container=styled.div`
  background-color: lightblue;
`
const Heading=styled.span`
  
  font-size:2rem;
  font-weight:bolder;
  text-align:center;
  display:flex;
  justify-content:center;
  color:white;
`
const Category = () => {
  const navigate=useNavigate();
  return (
    <Container >
      <Heading> Explore desired category</Heading>
    <CategoryDiv>
<div>
    <Img src='https://storage.googleapis.com/wfhq_webforcehq/images/consultation-main.png' alt="ASSIGNMENTS"/>
    <Btn onClick={()=>navigate("/assignment")}> ASSIGNMENTS</Btn>
</div>
<div>
    <Img src='../assets/expense.png' alt="Expense"/>
    <Btn> EXPENSE</Btn>
</div>
          </CategoryDiv><CategoryDiv>
          <div>
    <Img src='../assets/time_table.png' alt="TIME TABLE"/>
    <Btn> TIME TABLE</Btn>

        </div>
        <div>
    <Img src='../assets/result.png' alt="result"/>
    <Btn>RESULT</Btn>
        </div>
    </CategoryDiv>
    </Container>
  )
}

export default Category