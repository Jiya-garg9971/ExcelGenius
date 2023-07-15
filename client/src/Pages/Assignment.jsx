import React, { useEffect, useState } from 'react'
import { addToDo, deleteToDo, getAllToDo, updateToDo } from '../Tools/AssignmentAPI'
import EachAss from './EachAss'
import "./Assignment.css";
import { CategoryState } from '../Context/CategoryContext';
const Assignment = () => {
  const {user}=CategoryState();
  console.log(user," user")
  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")

  useEffect(() => {
    getAllToDo(setToDo,user)
  }, [])
  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }
  return (
    <div className="App">
      <div className="container">

        <h1>ToDo App</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add ToDos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div
            className="add"
            onClick={isUpdating ?
              () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating,user)
              : () => addToDo(text, setText, setToDo,user)}>
            {isUpdating ? "Update" : "Add"}
          </div>

        </div>

        <div className="list">

          {toDo?.map((item) => <EachAss
          key={item._id} 
          text={item.text}
          updateMode = {() => updateMode(item._id, item.text)}
          deleteToDo = {() => deleteToDo(item._id, setToDo,user)} />)}
        </div>

      </div>

    </div>
  );
}


export default Assignment