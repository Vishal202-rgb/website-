

import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from './context/AppContext'

const Header = () => {
  const {setInput,input}=useAppContext()
  const inputRef=useRef()

  const onSubmitHandler=async(e)=>{
    e.preventDefault();
    setInput(inputRef.current.value)
  }
  const onClear=()=>{
    setInput('')
    inputRef.current.value=' '
  }
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
      <div className='text-center mt-20 mb-8'>

        <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary'>
          <p><b>Welcome to Adventure Blogs </b></p>
          <i class='fas fa-blog'></i>
          {/* <img src={assets.star_icon} alt="" className='w-2.5' /> */}

        </div>

        <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-[4rem] text-gray-700'>
        Bharat Yatra <span className='text-primary'>Adventure </span><br />Platform
        </h1>

        <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500'>
          This is your space to think out loud, to share what matters, and to write without filters. 
          Whether it's one word or a thousand, your story starts right here.
        </p>

        {/* <form onSubmit={onSubmitHandler} className="flex gap-2 justify-center mt-4">
          <input ref={inputRef}
            type="text" 
            placeholder='Search for blogs' 
            required 
            className="border rounded-lg px-3 py-2"
          />
          <button 
            type="submit" 
            className="bg-primary text-white px-4 py-2 rounded-lg"
          >
            Search
          </button>
        </form> */}
        <form onSubmit={onSubmitHandler} className="flex gap-2 justify-center mt-4">
  <input
    ref={inputRef}
    type="text"
    placeholder="Search for blogs"
    required
    className="border rounded-lg px-3 py-2 
               focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 
               hover:ring-2 hover:ring-primary transition-all duration-200"
  />
  <button
    type="submit"
    className="bg-primary text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
  >
    Search
  </button>
</form>

      </div>
      <div className='text-center'>
       {input && <button onClick={onClear} className='border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer'>Clear Search</button> } 
      </div>

      <img 
        src={assets.gradientBackground} 
        alt="" 
        className='absolute -top-12 z-[-1] opacity-50' 
      />
    </div>
  )
}

export default Header
