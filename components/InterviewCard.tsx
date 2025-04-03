import React from 'react';
import dayjs from 'dayjs';

const InterviewCard = ({ interviewId, userId, role, type, techstack, createdAt } : InterviewCardProps) => {
  const feedback = null as Feedback | null;
  const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;
  const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY')

  return (
    <div className='bg-green-900 w-[360px] max-sm:w-full min-h-96'>
      <div className="bg-red-400">
        <div className="">
          <div className="">
            {normalizedType}
            ----
            {role}
            <div className="p-2">{techstack}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InterviewCard