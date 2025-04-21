import React, { ReactNode } from 'react'

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='auth_layout'>{children}</div>
  )
}

export default AuthLayout