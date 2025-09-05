import React from 'react'
import { assets } from "../../assets/assets";

import Sidebar from '../../admin/Sidebar'
import { useAppContext } from '../../components/context/AppContext'
import { Outlet } from 'react-router-dom';


const Layout = () => {

    const {axios,setToken,navigate}=useAppContext();
    const logout=()=>{
        localStorage.removeItem('token')
        axios.defaults.headers.common['Authorization']=null;
        setToken(null)
        navigate('/')
    }
  return (
    <>
    <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
        <img src={assets.vishal} alt="" className='w-10 sm:w-25 cursor-pointer' onClick={()=>navigate('/')} />
        <button 
  onClick={logout} 
  className="text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer 
             hover:bg-primary/90 hover:shadow-md transition-all duration-200"
>
  Logout
</button>

    </div>
    <div className='flex h-[calc(100vh-70px)]'>
        <Sidebar/>
        <Outlet/>

    </div>
    </>
  )
}

export default Layout