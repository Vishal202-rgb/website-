import React from 'react'
import {assets} from '../assets/assets'



import { useNavigate } from 'react-router-dom'
import { useAppContext } from './context/AppContext';

const Navbar = () => {


const {navigate,token}=useAppContext();

  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer '>
<img 
  onClick={() => navigate('/')} 
  src={assets.vishal} 
  alt="logo" 
  className="w-10 sm:w-20" 
/>
{/* <button onClick={()=>navigate('/admin')} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>
  {token? 'Dashboard':'Login'}
    <img src={assets.arrow} className='w-3' alt="arrow" />
</button> */}
<button 
  onClick={()=>navigate('/admin')} 
  className="group flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5 overflow-hidden relative"
>
  <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-2">
    {token ? 'Dashboard' : 'Login'}
  </span>
  <img 
    src={assets.arrow} 
    className="w-3 transition-transform duration-300 group-hover:translate-x-2" 
    alt="arrow" 
  />
</button>

    </div>
  )
}

export default Navbar