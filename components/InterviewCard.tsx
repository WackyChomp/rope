import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

import dayjs from 'dayjs';
import { getRandomInterviewCover } from '@/lib/utils';

const InterviewCard = ({ interviewId, userId, role, type, techstack, createdAt } : InterviewCardProps) => {
  const calendarIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNhbGVuZGFyLWljb24gbHVjaWRlLWNhbGVuZGFyIj48cGF0aCBkPSJNOCAydjQiLz48cGF0aCBkPSJNMTYgMnY0Ii8+PHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB4PSIzIiB5PSI0IiByeD0iMiIvPjxwYXRoIGQ9Ik0zIDEwaDE4Ii8+PC9zdmc+`
  const starIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN0YXItaWNvbiBsdWNpZGUtc3RhciI+PHBhdGggZD0iTTExLjUyNSAyLjI5NWEuNTMuNTMgMCAwIDEgLjk1IDBsMi4zMSA0LjY3OWEyLjEyMyAyLjEyMyAwIDAgMCAxLjU5NSAxLjE2bDUuMTY2Ljc1NmEuNTMuNTMgMCAwIDEgLjI5NC45MDRsLTMuNzM2IDMuNjM4YTIuMTIzIDIuMTIzIDAgMCAwLS42MTEgMS44NzhsLjg4MiA1LjE0YS41My41MyAwIDAgMS0uNzcxLjU2bC00LjYxOC0yLjQyOGEyLjEyMiAyLjEyMiAwIDAgMC0xLjk3MyAwTDYuMzk2IDIxLjAxYS41My41MyAwIDAgMS0uNzctLjU2bC44ODEtNS4xMzlhMi4xMjIgMi4xMjIgMCAwIDAtLjYxMS0xLjg3OUwyLjE2IDkuNzk1YS41My41MyAwIDAgMSAuMjk0LS45MDZsNS4xNjUtLjc1NWEyLjEyMiAyLjEyMiAwIDAgMCAxLjU5Ny0xLjE2eiIvPjwvc3ZnPg==`

  const feedback = null as Feedback | null;
  const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;
  const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY')

  return (
    <div className='bg-green-400 card_border w-[360px] max-sm:w-full min-h-96'>
      <div className="card_interview">
        <div className="">
          <div className="text-[12px] absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-400">
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

          <h3 className="mt-5 capitalize">
            {role} Interview
          </h3>

          <div className="flex flex-row gap-10 mt-3">
            <div className="flex flex-row gap-2">
              <Image 
                src={calendarIcon}
                alt='calendar-icon'
                width={30}
                height={30}
                className='bg-blue-800 rounded-xl p-1'
              />
              <p>{formattedDate}</p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <Image 
                src={starIcon}
                alt='star'
                height={30}
                width={30}
                className='bg-yellow-500 rounded-xl p-1'
              />
              <p>{feedback?.totalScore || '---'} / 100</p>
            </div>
          </div>

          <p className="line-clamp-2 mt-5">
            {feedback?.finalAssessment || "You haven't taken this yet. Try it now!"}
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <p>Tech Icons</p>
          <Button className='btn_primary'>
            <Link href={feedback 
              ? `/interview/${interviewId}/feedback`
              : `/interview/${interviewId}`
            }>
              {feedback ? 'Check Feedback' : 'View Interview'}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default InterviewCard