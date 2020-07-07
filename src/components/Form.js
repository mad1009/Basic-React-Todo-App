import React, {useState, useEffect} from 'react'

const Form = ({add, update, changeTodo}) => {
    const [todo, setTodo]=useState({
        id:null,
        title:"",
        complete:false,
        shoudlUpdate:false


    })

    useEffect(()=>{
        setTodo({
            id:update.todo.id,
            title:update.todo.title,
            complete:update.todo.complete,
            shoudlUpdate:update.shoudldUpdate
        
        })
    },[update])
    const handleChange = (e)=>{
        const title = e.target.value
        setTodo({...todo, title:title})
    }
    const newItem = (e)=>{
        e.preventDefault()
        add(todo)
        setTodo({
            id:null,
            title:"",
            complete:false,
            shoudlUpdate:false
    
        })
    }

    return (
        <form className="d-flex justify-content-center p-3" onSubmit={(e)=>{
            if(todo.shoudlUpdate !=true){
                return newItem(e)
            }
            else{
                e.preventDefault()
                 changeTodo(todo)
                 setTodo({
                    id:null,
                    title:"",
                    complete:false,
                    shoudlUpdate:false
            
                })
        
            }
            }} >
            <input type="text" placeholder="Add Task" onChange={(e)=> handleChange(e)}  value={todo.title} style={{width:"500px", marginRight:"5px"}} />
            <button type="submit" className="btn btn-outline-info" >Submit</button>
        </form>
    )
}

export default Form
