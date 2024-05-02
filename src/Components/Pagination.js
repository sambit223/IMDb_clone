import React from 'react'

const Pagination = ({page , onPrev , onNext}) => {
  return (
    <div className='text-white flex justify-center m-4 p-2 gap-4'>
        <button onClick={onPrev} className='border p-3'>Prev</button>
        <div className='text-white p-4'>{page}</div>
        <button onClick={onNext} className='border p-3'>Next</button>
    </div>
  )
}

export default Pagination