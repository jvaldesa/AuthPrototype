import React from 'react'
import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <div className='bg-red-200 min-h-screen flex items-center justify-center'>
      AuthLayout <Outlet />
    </div>

  )
}
