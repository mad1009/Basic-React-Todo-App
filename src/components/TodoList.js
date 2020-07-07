import React, {useState, useEffect} from 'react'
import Todo from './Todo'
import Form from './Form'

 const TodoList = () => {

    const [todos, setTodos] = useState([])
    const [onlyCompleted, setOnlyCompleted] = useState(false)
    const [update, setUpdate] = useState({
        todo : {},
        shoudldUpdate : false
    })

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => {setTodos(json)})
        
    }, [])


    const addNew = (todo)=>{
        setTodos([todo,...todos])
    }

    const changeTodo = (todo)=>{
        const newTodos = todos.slice()
        for (let i = 0; i < newTodos.length; i++) {
            if (newTodos[i].id ===todo.id){
                newTodos[i]=todo
                break
            }
            
        }
        setTodos(newTodos)
    }
    const handleChange = (todo)=>{
        setUpdate({
            todo,
            shoudldUpdate:true
        })
        return todo
    }

    return (
        <React.Fragment>
            <h1 className="pb-3">Todo List</h1> 
            <Form add={addNew} update={update} changeTodo={changeTodo} />
            <div className="d-flex justify-content-around w-100  py-3" >
            <label>Show Only Not Completed</label>
            <input  defaultChecked={onlyCompleted} onChange={(e)=>{
                setOnlyCompleted(!onlyCompleted)
                if(onlyCompleted===false){
                let completed = todos.filter((f)=>(f.completed==onlyCompleted))
                setTodos(completed)
            }else{
                fetch('https://jsonplaceholder.typicode.com/todos/')
                .then(response => response.json())
                .then(json => {setTodos(json)})
                    }
            }} type="checkbox"/>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Status</th>
                    </tr>
            </thead>
            <tbody>
            {todos.map((todo)=>(<Todo key={todo.id} todo={todo}  handleChange={handleChange}/>))}       
                
            </tbody>
            </table>
        
        </React.Fragment>
    )
}
export default TodoList
