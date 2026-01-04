"use client";

import { handleLogout } from '@/actions/auth-actions';
import React from 'react'

function Singout() {
  return (
    <>
        <button className='border px-2 bg-red-400' onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Singout