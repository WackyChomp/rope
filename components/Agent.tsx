import React from 'react'
import Image from 'next/image'
import { Span } from 'next/dist/trace';

const Agent = ({ userName, userId, type } : AgentProps ) => {
  const agentIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNwZWVjaC1pY29uIGx1Y2lkZS1zcGVlY2giPjxwYXRoIGQ9Ik04LjggMjB2LTQuMWwxLjkuMmEyLjMgMi4zIDAgMCAwIDIuMTY0LTIuMVY4LjNBNS4zNyA1LjM3IDAgMCAwIDIgOC4yNWMwIDIuOC42NTYgMy4wNTQgMSA0LjU1YTUuNzcgNS43NyAwIDAgMSAuMDI5IDIuNzU4TDIgMjAiLz48cGF0aCBkPSJNMTkuOCAxNy44YTcuNSA3LjUgMCAwIDAgLjAwMy0xMC42MDMiLz48cGF0aCBkPSJNMTcgMTVhMy41IDMuNSAwIDAgMC0uMDI1LTQuOTc1Ii8+PC9zdmc+`
  
  const isSpeaking = true;

  return (
    <div className='interview_call_view'>
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
    </div>
  )
}

export default Agent