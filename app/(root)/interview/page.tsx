import React from 'react'
import Agent from '@/components/Agent'

const page = () => {
  return (
    <div>
      <h3 className="text-center text-orange-400 mt-5">
        Interview Page
      </h3>
      <Agent userName='You' userId='user1' type='generate' />
    </div>
  )
}

export default page