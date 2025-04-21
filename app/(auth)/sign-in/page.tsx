import React from 'react'
import AuthForm from '@/components/AuthForm'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex justify-center'>
      <h1 className='text-7xl capitalize'>
        sign in page
        <Link href='/' className='bg-blue-500 flex my-2 items-center gap-5'>Home</Link>
        <Link href='/sign-up' className='bg-orange-500 flex my-2 items-center gap-5'>Sign Up</Link>
        <AuthForm  type='sign-in'/>
      </h1>
    </div>
  )
}

export default page