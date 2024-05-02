import React from 'react'
import logo2 from '../Images/John-Wick-Posters-Rule.webp'

const Banner = () => {
  return (
    <>
    <div className='h-[60vh] bg-center bg-no-repeat m-2 flex items-end justify-center' 
    style={{backgroundImage: `url(${logo2})`}}>
    </div>
     <div className='text-3xl text-white w-[100vw] text-center border-y'>John Wick: Chapter 2</div>
    </>
  )
}

export default Banner