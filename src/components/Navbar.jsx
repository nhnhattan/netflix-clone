import { async } from '@firebase/util'
import React, { useState, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const {user, logOut} = UserAuth()
  console.log(user)
  const  navigate = useNavigate()

  const handleLogout = async () =>{
    try {
      await logOut()
      navigate('/')
    } catch(error) {
      console.log(error)
    }
  }

  const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 40) {
            setColor(true)
        } else {
            setColor(false)
        } 
    }
  
    window.addEventListener('scroll', changeColor)

  
  return (
    <div className={color ? "flex items-center justify-between p-4 z-[100] w-full fixed bg-black/100" : "flex items-center justify-between p-4 z-[100] w-full fixed bg-black/40 transition-duration:500ms;"}>
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer' >NETFLIX</h1>
      </Link>
      {user?.email ? 
        <div>
            <Link to='/account'>
              <button className='text-white pr-4'>Account</button>
            </Link>
             <button onClick={handleLogout} button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white' >Log out</button>
        </div> : 
        
        <div>
            <Link to='/signup'>
              <button className='text-white pr-4'>Sign Up</button>
            </Link>
            <Link to='/login'>
              <button button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white' >Sign In</button>
            </Link>
        </div>}
    </div>
  )
}

export default Navbar