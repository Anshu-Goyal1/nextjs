import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function LandingPage() {
  return (
    <div className='text-red-500'>
        
{/* <Image src={} alt="landingPage" /> */}
        <p>Are you ready to learn languages easily in the most funniest way?</p>
<Link href='/home' className='px-2 py-1 bg-blue-500 text-white rounded-lg'>
       <button>Get for free</button>
       </Link>
        </div>
  )
}

export default LandingPage