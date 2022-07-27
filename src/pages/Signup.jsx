import { async } from '@firebase/util'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, signUp} = UserAuth()
  const  navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp(email, password)
      navigate('/')
      console.log("Successfully signed up")
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='w-full h-screen'>
        <img 
          className='hidden sm:block absolute w-full h-full object-cover'
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3a073c5f-0160-4d85-9a42-6f59aa4b64b9/3242af29-8ec6-41c7-890e-5bd7393e2047/VN-vi-20220718-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
          alt="" 
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen' ></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[550px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] h-[550px] mx-auto py-16'>
               <h1 className='text-3xl font-bold'>Sign Up</h1> 
               <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className='p-3 my-2 bg-gray-600 rounded' 
                    type="email" 
                    placeholder='Email' 
                    autoComplete='email'
                  />
                  <input 
                    onChange={(e) => setPassword(e.target.value)}
                    className='p-3 my-2 bg-gray-600 rounded' 
                    type="password" 
                    placeholder='Password' 
                    autoComplete='current-password'/>
                  <button className='bg-red-600 py-3 my-6 rounded font-bold'>
                      Sign Up
                  </button>
                  <div className='flex justify-between items-center text-sm text-gray-400'>
                    <p><input type="checkbox" className='mr-2'/>Remember me</p>
                    <p>Need Help?</p>
                  </div>
                  <p className='py-8'>
                    <span className='text-gray-500'>
                      Already subscribed to Netflix ?
                    </span>{' '}
                    <Link to='/login'>
                      Sign Up
                    </Link>
                  </p>
               </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup