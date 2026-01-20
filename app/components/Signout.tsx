"use client";
import { handleLogout } from '@/actions/authActions';
import React from 'react'

function Signout() {
  return (
    <div>
        <form action={handleLogout}>
            <button type="submit">Logout</button>
        </form>
    </div>
  )
}

export default Signout