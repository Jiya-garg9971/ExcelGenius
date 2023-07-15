import { createContext,useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
const CategoryContext=createContext();
const CategoryProvider=({children})=>{
    const navigate=useNavigate();
    const [user,setuser]=useState();
    useEffect(()=>{
        const userDetail=JSON.parse(localStorage.getItem("userInfo"));
        setuser(userDetail);
        console.log(userDetail," userdetails")
        if(!userDetail){
            navigate("/")
        }
    },[navigate])
    return <CategoryContext.Provider value={{user,setuser}}>{children} </CategoryContext.Provider>
}
export const CategoryState=()=>{
    return useContext(CategoryContext);
}
export default CategoryProvider;
