"use client"
import { deleteTodo } from '@/actions/todoActions'
import AddTodo from './AddTodo'
import EditTodo from './EditTodo'
import { useEffect, useState } from 'react'

function AllTodos({userTodos,editTodo}) {
    console.log(editTodo);
    let [editFlag,setEditFlag] = useState(editTodo)
    let [selectedTodo,setSelectedTodo]=useState(null)

    async function handleDeleteTodo(id){
        await deleteTodo(id)
    }

    function handleEditTodo(todo){
        setEditFlag(!editFlag)
        setSelectedTodo({...todo})
    }
    useEffect(()=>{
        setEditFlag(false)
    },[editTodo])
  return (
    <div className='border p-2 m-2'>
        <h1 className='text-2xl'>AllTodos</h1>
        {!editFlag && (<AddTodo></AddTodo>)}
        {editFlag && (<EditTodo todo={selectedTodo}></EditTodo>)}
        
        <ul>
            {
                userTodos.map((todo)=>{
                    return <li key={todo._id}>
                        {todo.title}
                        <button className='border p-1 m-1 bg-red-200' onClick={()=>{handleDeleteTodo(todo._id)}}>Delete</button>
                        <button className='border p-1 m-1 bg-orange-200' onClick={()=>{handleEditTodo(todo)}}>Edit</button>
                        </li>
                })
            }
        </ul>
    </div>
  )
}

export default AllTodos