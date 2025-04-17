import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

enum CallStatus{
  INACTIVE = 'INACTIVE',
  CONNECTING = 'CONNECTING',
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED',
}

const Agent = ({ userName, userId, type } : AgentProps ) => {
  const agentIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNwZWVjaC1pY29uIGx1Y2lkZS1zcGVlY2giPjxwYXRoIGQ9Ik04LjggMjB2LTQuMWwxLjkuMmEyLjMgMi4zIDAgMCAwIDIuMTY0LTIuMVY4LjNBNS4zNyA1LjM3IDAgMCAwIDIgOC4yNWMwIDIuOC42NTYgMy4wNTQgMSA0LjU1YTUuNzcgNS43NyAwIDAgMSAuMDI5IDIuNzU4TDIgMjAiLz48cGF0aCBkPSJNMTkuOCAxNy44YTcuNSA3LjUgMCAwIDAgLjAwMy0xMC42MDMiLz48cGF0aCBkPSJNMTcgMTVhMy41IDMuNSAwIDAgMC0uMDI1LTQuOTc1Ii8+PC9zdmc+`
  const userIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXItaWNvbiBsdWNpZGUtdXNlciI+PHBhdGggZD0iTTE5IDIxdi0yYTQgNCAwIDAgMC00LTRIOWE0IDQgMCAwIDAtNCA0djIiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjciIHI9IjQiLz48L3N2Zz4=`
  
  const callStatus = CallStatus.ACTIVE;
  const isSpeaking = true;

  return (
    <>
      <div className='interview_call_view'>
        {/* Agent */}
        <div className="interviewer_card">
          <div className="avatar">
            <Image 
              src={agentIcon}
              alt='ai-agent'
              width={70}
              height={70}
              className='bg-green-500 rounded-full p-0.5 object-cover'
            />
            {isSpeaking && <span className='avatar_animate_speak' />}
          </div>
          <h3>Agent Interviewer</h3>
        </div>

        {/* User */}
        <div className="card_border">
          <div className="avatar_card_content">
            <Image 
              src={userIcon}
              alt='user-avatar'
              width={540}
              height={540}
              className='bg-blue-500 p-1 rounded-full object-cover size-[150px]'
            />
            <h3>{userName}</h3>
          </div>
        </div>
      </div>

      {/* Button for call status */}
      <div className="w-full flex justify-center">
        {callStatus !== "ACTIVE" ? (
          <button className='relative btn_call'>
            <span className={cn('absolute animate-ping rounded-full backdrop-opacity-75', callStatus !== 'CONNECTING' & 'hidden')} />

            <span>
              {callStatus === 'INACTIVE' || callStatus === 'FINISHED' ? 'Call' : '. .. ... ....'}
            </span>
          </button>
        ): (
          <button className='btn_disconnect'>End</button>
        )}
      </div>

  </>
  )
  
}

export default Agent