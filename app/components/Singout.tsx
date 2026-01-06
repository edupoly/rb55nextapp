"use client";

import { getSessionDetails, handleLogout } from '@/actions/auth-actions';
import React from 'react'

function Singout({user}) {
  return (
    <>
        <button className='border px-2 bg-red-400' onClick={handleLogout}> {user.email} Logout</button>
    </>
  )
}

export default Singout