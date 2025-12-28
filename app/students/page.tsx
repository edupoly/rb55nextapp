import React from 'react'
import { getAllStudents } from '@/actions/todo-actions'
async function page() {
    const students = await getAllStudents();
    console.log(students);
  return (
    <div>page</div>
  )
}

export default page