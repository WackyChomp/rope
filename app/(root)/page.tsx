import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import InterviewCard from '@/components/InterviewCard'

import { dummyInterviews } from '@/constants'

const page = () => {
  const img = `https://media.tenor.com/ZFoOuUSqPBEAAAAi/stalzone-meme.gif`;

  return (
    <>
      <section className='card_cta'>
        <div className="bg-red-500 flex flex-col gap-6 max-w-lg">
          <h2 className='capitalize text-5xl'>Perform at your peak off the cuff through rigorous practice & feedback</h2>
          <p className="text-lg">Refine your expertise through trials and tribulations!</p>

          <Button asChild className='btn_primary max-sm:w-full' >
            <Link href='/interview'>Start an Interview</Link>
          </Button>
        </div>

        <Image 
          src={img} 
          alt='img' 
          width={400} 
          height={400}
          className='max-sm:hidden rounded-xl border-6 border-amber-900'
        />
      </section>

      <section className="flex flex-col gap-7 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
        {dummyInterviews.map((interview) => (
          <InterviewCard {...interview} key={interview.id} />
        ))}
        {/*You haven&apos;t done any interviews*/}
        </div>
      </section>

      <section className="flex flex-col gap-7 mt-8">
        <div className="interviews-section">
          There are no interviews available {`:^)`}
        </div>
      </section>

      {/* <section className="flex flex-col gap-7 mt-8">

      </section> */}
    </>
  )
}

export default page