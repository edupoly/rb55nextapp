"use client";
import { addNewStudent } from '@/actions/todo-actions';
import React from 'react'

function AddStudent() {
    const [student,setStudent]=React.useState({ 
        "fullname": "",
        "gender": "",
        "age": 0,
        "place": ""
    })
  return (
    <div>
        <form onSubmit={async ()=>{addNewStudent(student)}}>
            <input type="text" className='border' onChange={(e)=>{setStudent({...student,fullname:e.target.value})}}/>
            <br />
            <input type="text" className='border' onChange={(e)=>{setStudent({...student,gender:e.target.value})}}/>
            <br />
            <input type="text" className='border' onChange={(e)=>{setStudent({...student,age:e.target.value})}}/>
            <br />
            <input type="text" className='border' onChange={(e)=>{setStudent({...student,place:e.target.value})}}/>
            <br />
            <button type="submit">Add Student</button>
        </form>
    </div>
  )
}

export default AddStudent