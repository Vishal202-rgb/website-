import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>
      <h1 className='md:text-4xl text-2xl font-semibold'>Your Blog Could be the First</h1>
      <p className='md:text-lg text-gray-500/70 pb-8'>
        Subscribe to get the latest blog, new tech and exclusive info
      </p>

      <form className='flex items-center gap-3 max-w-2xl w-full md:h-13 h-12'>
        <input
          className='border border-gray-300 rounded-md h-full outline-none w-full px-3 text-gray-500'
          type='email'
          placeholder='vishalkumar150206@gmail.com'
          required
        />
        <button
          type='submit'
          className='md:px-10 px-6 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-md'
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default Newsletter
