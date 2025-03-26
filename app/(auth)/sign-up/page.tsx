import React from 'react';
import AuthForm from '@/components/AuthForm';

const page = () => {
  return (
    <div className='flex justify-center'>
      <h1 className='text-7xl capitalize'>
        sign up page
        <AuthForm  type='sign-up'/>
      </h1>
    </div>
  )
}

export default page