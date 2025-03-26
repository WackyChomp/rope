import React from 'react'
import AuthForm from '@/components/AuthForm'

const page = () => {
  return (
    <div className='flex justify-center'>
      <h1 className='text-7xl capitalize'>
        sign in page
        <AuthForm  type='sign-in'/>
      </h1>
    </div>
  )
}

export default page