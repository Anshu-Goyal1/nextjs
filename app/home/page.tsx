import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div>Hello 

      <p>Your Lesson</p>
      <Link href="/home/reading">
      <button>Reading</button></Link>
      <button>Listening</button>
      <button>Speaking</button>
      <button>Grammer</button>
    </div>


    

  )
}

export default Home