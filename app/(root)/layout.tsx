import React, {ReactNode} from 'react'
import Link from 'next/link'
import Image from 'next/image'

const RootLayout = ({ children }: {children: ReactNode}) => {
  const logo=`https://images.stockcake.com/public/7/d/e/7de5e9f4-7e5a-4c29-b504-90cb82cfb0f5_large/mystical-chain-magic-stockcake.jpg`

  return (
    <div className='root_layout'>
      <nav>
        <Link href='/' className='flex items-center gap-5'>
          <Image 
            src={logo} 
            alt='logo' 
            width={40}
            height={40}
            className='rotate-90 rounded-md'
          />
          <h2 className='text-orange-600'>Rope</h2>
        </Link>
        <Link href='/sign-in' className='bg-orange-500 flex my-2 items-center gap-5'>Sign In</Link>
        <Link href='/sign-up' className='bg-purple-500 flex my-2 items-center gap-5'>Sign Up</Link>
        <Link href='/interview' className='bg-green-500 flex my-2 items-center gap-5'>Interview</Link>
      </nav>
      {children}
    </div>
  )
}

export default RootLayout