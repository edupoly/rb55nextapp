"use client"
import React, { useRef, useState } from 'react'
import { addTodo, updateTodo } from '@/actions/todoActions'

function EditTodo({todo}) {
    let [etodo,seteTodo] = useState({...todo})
    const ref1 = useRef()

    async function handleUpdateTodo(){
        ref1.current.value=""
        console.log(etodo);
        await updateTodo(etodo)
    }

  return (
    <div>
        <input type="text" defaultValue={todo.title} onChange={(e)=>{seteTodo({...todo,title:e.target.value})}} ref={ref1} className='border p-1 m-1'/>
        <button className='border p-1 m-1' onClick={handleUpdateTodo}>Update Todo</button>
    </div>
  )
}

export default EditTodo