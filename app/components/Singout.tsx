"use client";

import { handleLogout } from '@/actions/auth-actions';
import React from 'react'

function Singout() {
  return (
    <div>
        <button className='border p-2 m-2 bg-red-400' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Singout