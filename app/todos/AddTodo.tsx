"use client"
import React, { useRef, useState } from 'react'
import { addTodo } from '@/actions/todoActions'

function AddTodo() {
    const [newTodo,setNewTodo] = useState('')
    const ref1 = useRef()
    async function handleNewTodo(){
        ref1.current.value=""
        await addTodo({title:newTodo,status:"notcompleted"})
    }

  return (
    <div>
        <input className='border p-1 m-1' ref={ref1}  type="text" defaultValue={newTodo} onChange={(e)=>{setNewTodo(e.target.value)}}/>
        <button className='border p-1 m-1' onClick={handleNewTodo}>Add Todo</button>
    </div>
  )
}

export default AddTodo