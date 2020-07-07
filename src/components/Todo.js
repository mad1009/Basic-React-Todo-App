import React, { useState, useEffect }from 'react'
import "../App.css"

const Todo = ({todo, handleChange}) => {
    const [status, setStatus] = useState(todo.completed)

    const changeState = ()=>{
        setStatus(!status)
    }


    const style = ()=>{
        return status ? {textDecoration:"line-through"} : {}
    }

    return (
    <tr onClick={(e)=> handleChange(todo)} className="todo" >
        <td>
            <p style={style()}>{todo.title}</p>
        </td>
        <td>
            <input type="checkbox" defaultChecked={status} onClick={()=>changeState(!status)}/>
        </td>
    </tr>
    )
}

export default Todo
