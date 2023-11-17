import Login from '@/components/login/Login'
import React from 'react'

export const log =  () => {
  const fetch =  ['akib', 'fahad', 'hasnian', 'wahab', 'zain']
  return fetch
}


const page = () => {

  const users = log()

  return (
    <div className='flex flex-col gap-9 justify-center items-center mb-16 h-[80vh]'>


      <Login users={users}/>

    </div>
  )
}

export default page