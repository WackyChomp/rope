import React from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import { getRandomInterviewCover } from '@/lib/utils';

const InterviewCard = ({ interviewId, userId, role, type, techstack, createdAt } : InterviewCardProps) => {
  const feedback = null as Feedback | null;
  const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;
  const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY')

  return (
    <div className='bg-green-400 card_border w-[360px] max-sm:w-full min-h-96'>
      <div className="card_interview">
        <div className="">
          <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-400">
            {normalizedType}
            ----
            {role}
            <div className="bg-blue-800 p-2">{techstack}</div>
          </div>

          <Image 
            src={getRandomInterviewCover()}
            alt='cover-image'
            width={90}
            height={90}
            className='bg-red-500 rounded-full object-fit size-[90px]'
          />
        </div>
      </div>
    </div>
  )
}

export default InterviewCard