import React from 'react'
import Agent from '@/components/Agent'

const page = () => {
  return (
    <div>
      <div className="">
        Interview Page
      </div>
      <Agent userName='You' userId='user1' type='generate' />
    </div>
  )
}

export default page