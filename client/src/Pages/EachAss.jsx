import React from 'react'



const EachAss = ({text, updateMode, deleteToDo}) => {
    return (
        <div className="todo">
            <div className="text">{text}</div>
            <div className="icons">
                 <span class="material-symbols-outlined"  onClick={updateMode}>Edit</span>
                <span class="material-symbols-outlined" onClick={deleteToDo}>delete</span>
            {/* '<BiEdit className='icon' onClick={updateMode} />
            <AiFillDelete className='icon' onClick={deleteToDo} />' */}

            </div>
        </div>
    )
}

export default EachAss