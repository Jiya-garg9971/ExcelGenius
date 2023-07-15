import axios from 'axios'
import { CategoryState } from '../Context/CategoryContext';

const getAllToDo =async (setToDo,user) => {
    console.log(user?.data, "is data");
     console.log(user?.data?.token," is the token")
     const config = {
        headers: {
          Authorization: `Bearer ${user?.data?.token}`,
        },
      };
    try{
    const {data}=await axios.get('/assignment',config);
    console.log(data," is the assignment list");
    setToDo(data)
    }
    catch(err){
        console.log("err",err.message);
    }
}

const addToDo = async(text, setText, setToDo,user) => {
     console.log(user?.data?.token," is the token")
     const config = {
        headers: {
          Authorization: `Bearer ${user?.data?.token}`,
        },
      };
      try{
            const {data}=await axios.post('/assignment/save', { text },config)
            console.log(data);
            setText("")
            getAllToDo(setToDo,user)
      }
      catch(err){
        console.log(err);
      }
}

const updateToDo =async (toDoId, text, setToDo, setText, setIsUpdating,user) => {
console.log(user?.data?.token," is the token")
     const config = {
        headers: {
          Authorization: `Bearer ${user?.data?.token}`,
        },
      };
      try{
        const {data}=await axios.post('/assignment/update', { _id: toDoId, text },config)
        setText("")
       setIsUpdating(false)
       getAllToDo(setToDo,user)
      }
    catch(err){
      console.log(err)
    }

}

const deleteToDo = async(_id, setToDo,user) => {
console.log(user?.data?.token," is the token")
     const config = {
        headers: {
          Authorization: `Bearer ${user?.data?.token}`,
        },
      };
      try{
const {data}=await axios.post('/assignment/delete', { _id },config);
            console.log(data)
            getAllToDo(setToDo,user)
      }
      catch(err){
        console.log(err);
      }


}


export { getAllToDo, addToDo, updateToDo, deleteToDo }