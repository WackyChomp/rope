import React from 'react'
import Image from 'next/image'

import { getAllTechLogos } from '@/lib/utils'

const DisplayTechIcons = async ({ techStack } : TechIconProps) => {
  const techIcons = await getAllTechLogos(techStack)

  return (
    <div className='bg-blue-950 gap-2 flex flex-row p-1 text-[9px] flex-wrap max-w-[200px]'>
      {/* {techStack} */}

      {techIcons.slice(0, 3).map(({ tech, url }, index) => (
        <div className="relative group bg-red-500 rounded-full p-1 flex-center">
          <span className='hover_tech_tooltip'>{tech}</span>
          <Image 
            src={url}
            alt={tech}
            width={100}
            height={100}
            className='size-5'
          />
        </div>
      ))}
    </div>
  )
}

export default DisplayTechIcons