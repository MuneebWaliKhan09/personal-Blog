"use client"
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import "./login.css"




const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submithandler = async (e) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      console.error('Login failed:', result.error);
    } else {
      console.log('Login successful:', result);
    }

  };

  return (
    <div className='flex flex-col gap-9 justify-center items-center mb-16 h-[80vh]'>

      <form onSubmit={submithandler} action="" className=" login shadow-2xl   border-gray-500  rounded-xl  border max-w-[380px] w-[800px] py-9 pb-12 px-9 gap-4 flex flex-col  bg-gradient-to-r text-gray-500">
        <h3 className="font-bold text-2xl text-center m-0 p-0">Login Form</h3>
        <div className="w-[7rem] h-1 relative bottom-4 left-[94px] "></div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-bold text-md">Email</label>
          <input type="email" label='email' name="email" onChange={(e) => setEmail(e.target.value)} id="email" className="bg-gray-300 p-2 rounded-lg border-2 border-gray-300" />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-bold text-md">Password</label>
          <input type="password" name="password" label='password' onChange={(e) => setPassword(e.target.value)} id="password" className="bg-gray-300 p-2 rounded-lg border-2 border-gray-300" />
        </div>
        <div>
          <button type='submit' className="border-2 border-gray-300 font-bold px-2 py-2 mt-3 rounded-lg w-full bg-gray-300 hover:bg-gray-500 hover:text-white transition-all text-gray-600">Submit</button>
        </div>
      </form>

    </div>
  )
}

export default LoginPage